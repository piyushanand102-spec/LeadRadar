import {
    POSITIVE_KEYWORDS,
    NEGATIVE_KEYWORDS,
    MINIMUM_SCORE
} from "../../../config/keywords.js";

export function keywordFilter(posts) {

    console.log("\n========== Keyword Filter ==========\n");

    const filteredPosts = [];

    for (const post of posts) {

        const text = `${post.title} ${post.description || ""}`.toLowerCase();

        let score = 0;
        let matchedKeywords = [];

        // Positive keywords
        for (const keyword of POSITIVE_KEYWORDS) {

            if (text.includes(keyword.phrase.toLowerCase())) {

                score += keyword.score;
                matchedKeywords.push(keyword.phrase);

            }

        }

        // Negative keywords
        for (const keyword of NEGATIVE_KEYWORDS) {

            if (text.includes(keyword.phrase.toLowerCase())) {

                score += keyword.score;

            }

        }

        post.score = score;
        post.matchedKeywords = matchedKeywords;

        // Debug Output
        console.log("----------------------------------------");
        console.log(`Title   : ${post.title}`);
        console.log(`Score   : ${score}`);
        console.log(
            `Matched : ${
                matchedKeywords.length
                    ? matchedKeywords.join(", ")
                    : "None"
            }`
        );
        console.log("----------------------------------------");

        if (score >= MINIMUM_SCORE) {
            filteredPosts.push(post);
        }
    }

    console.log(`\n✅ Accepted Leads: ${filteredPosts.length}\n`);

    return filteredPosts;
}