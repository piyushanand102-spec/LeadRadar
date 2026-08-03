import fs from "fs";

const FILE = "./src/data/leads.json";

export function loadLeads() {
    if (!fs.existsSync(FILE)) {
        return [];
    }

    const data = fs.readFileSync(FILE, "utf8");

    if (!data.trim()) {
        return [];
    }

    return JSON.parse(data);
}