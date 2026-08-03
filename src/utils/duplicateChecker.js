import fs from "fs";

const FILE_PATH = "./data/sentPosts.json";

// Read all sent post URLs
export function getSentPosts() {
    try {
        const data = fs.readFileSync(FILE_PATH, "utf8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Check if a URL has already been sent
export function isDuplicate(url) {
    const sentPosts = getSentPosts();
    return sentPosts.includes(url);
}

// Save a new URL after sending
export function savePost(url) {
    const sentPosts = getSentPosts();

    if (!sentPosts.includes(url)) {
        sentPosts.push(url);

        fs.writeFileSync(
            FILE_PATH,
            JSON.stringify(sentPosts, null, 4)
        );
    }
}