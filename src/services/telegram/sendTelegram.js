import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

export async function sendTelegramMessage(message) {
    try {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        await axios.post(url, {
            chat_id: CHAT_ID,
            text: message,
            disable_web_page_preview: false
        });

        console.log("✅ Telegram message sent.");
    } catch (error) {
        console.error("❌ Failed to send Telegram message.");

        if (error.response) {
            console.error(error.response.data);
        } else {
            console.error(error.message);
        }
    }
}