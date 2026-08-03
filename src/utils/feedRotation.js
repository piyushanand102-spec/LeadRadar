import fs from "fs";

const FILE = "./data/feedState.json";

export function getNextFeed(feeds) {
    if (!fs.existsSync("./data")) {
        fs.mkdirSync("./data");
    }

    if (!fs.existsSync(FILE)) {
        fs.writeFileSync(FILE, JSON.stringify({ index: 0 }, null, 2));
    }

    const state = JSON.parse(fs.readFileSync(FILE, "utf8"));

    const feed = feeds[state.index];

    state.index = (state.index + 1) % feeds.length;

    fs.writeFileSync(FILE, JSON.stringify(state, null, 2));

    return feed;
}