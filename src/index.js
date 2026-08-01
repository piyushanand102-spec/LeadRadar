import { sendTelegramMessage } from "./services/telegram/sendTelegram.js";

console.log("🚀 Testing Telegram...");

await sendTelegramMessage(
`🔥 LeadRadar Test

If you received this message, Telegram is connected successfully.`
);