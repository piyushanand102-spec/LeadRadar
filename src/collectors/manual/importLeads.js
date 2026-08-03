import fs from "fs";

const FILE = "./src/data/leads.json";

export function importLeads(leads) {

    fs.writeFileSync(
        FILE,
        JSON.stringify(leads, null, 2),
        "utf8"
    );

    console.log(`✅ Imported ${leads.length} leads.`);
}