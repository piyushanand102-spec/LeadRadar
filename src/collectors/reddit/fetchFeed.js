import Parser from "rss-parser";

const parser = new Parser();

export async function fetchFeed(feedUrl) {
    try {
        const feed = await parser.parseURL(feedUrl);
        return feed;
    } catch (error) {
        console.error(`❌ Failed to fetch ${feedUrl}`);
        console.error(error.message);
        return null;
    }
}