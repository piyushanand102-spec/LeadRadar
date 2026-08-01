import { filterPosts } from "../../filters/keywordFilter.js";
import Parser from "rss-parser";

const parser = new Parser();

const RSS_URL = "https://www.reddit.com/r/NewTubers/.rss";
const MAX_POST_AGE_MINUTES = 60;

export async function testCollector() {
    console.log("🚀 Starting Reddit Collector...\n");

    try {
        console.log("📡 Fetching RSS feed...\n");

        const feed = await parser.parseURL(RSS_URL);

        // Convert RSS items into our standard format
        const posts = feed.items.map((post) => ({
            title: post.title || "No Title",
            link: post.link,
            published: new Date(post.pubDate),
            author: post.creator || post.author || "Unknown"
        }));

        // Calculate cutoff time
        const cutoffTime = Date.now() - MAX_POST_AGE_MINUTES * 60 * 1000;

        // Keep only recent posts
        const recentPosts = posts.filter(
    (post) => post.published.getTime() >= cutoffTime
);

const freshPosts = filterPosts(recentPosts);

        console.log(`📂 Subreddit: ${feed.title}`);
        console.log(`📊 Total Posts Fetched: ${posts.length}`);
        console.log(`📰 Total RSS Posts : ${posts.length}`);
console.log(`🕒 Recent Posts    : ${recentPosts.length}`);
console.log(`🎯 Hiring Leads    : ${freshPosts.length}\n`);

        if (freshPosts.length === 0) {
            console.log("❌ No fresh hiring posts found.");
            return;
        }

        console.log("========================================");

        freshPosts.forEach((post, index) => {
            const minutesAgo = Math.floor(
                (Date.now() - post.published.getTime()) / 60000
            );

            console.log(`\n#${index + 1}`);
            console.log(`📝 Title      : ${post.title}`);
            console.log(`👤 Author     : ${post.author}`);
            console.log(`⏰ Posted     : ${minutesAgo} minutes ago`);
            console.log(`🔗 Link       : ${post.link}`);

            console.log("----------------------------------------");
        });

    } catch (error) {
        console.error("❌ Failed to fetch Reddit RSS.");
        console.error(error.message);
    }
}