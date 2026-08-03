import cron from "node-cron";

import { redditCollector } from "./collectors/reddit/redditCollector.js";

import {
    isDuplicate,
    savePost
} from "./utils/duplicateChecker.js";

import { sendTelegramMessage } from "./services/telegram/sendTelegram.js";

export function startScheduler() {

    console.log("⏰ Scheduler started.");

    // Every minute (change to */5 later)
    cron.schedule("*/1 * * * *", async () => {

        console.log("\n================================");
        console.log("🔍 Checking for new leads...");
        console.log("================================\n");

        const leads = await redditCollector();

        if (leads.length === 0) {

            console.log("❌ No new hiring leads.\n");

            return;

        }

        for (const lead of leads) {

            if (isDuplicate(lead.url)) {

                console.log("⏭ Already sent:");
                console.log(lead.title);

                continue;

            }

            const minutesAgo = Math.floor(
                (Date.now() - lead.createdAt.getTime()) / 60000
            );

            const message =
`🚨 NEW EDITING LEAD

🌐 Platform: ${lead.platform}

📂 Community:
${lead.community}

📝 Title:
${lead.title}

⭐ Score:
${lead.score}

⏰ Posted:
${minutesAgo} minutes ago

🔗 ${lead.url}`;

            await sendTelegramMessage(message);

            savePost(lead.url);

            console.log(`✅ Sent to Telegram: ${lead.title}`);
        }

    });

}