import { getEnabledSources } from "./sources/index.js";

import { upworkCollector } from "./upwork/upworkCollector.js";
import { contraCollector } from "./contra/contraCollector.js";
import { wellfoundCollector } from "./wellfound/wellfoundCollector.js";
import { peopleperhourCollector } from "./peopleperhour/peopleperhourCollector.js";

const collectors = {
    upwork: upworkCollector,
    contra: contraCollector,
    wellfound: wellfoundCollector,
    peopleperhour: peopleperhourCollector
};

export async function runCollectors() {

    let allLeads = [];

    const sources = getEnabledSources();

    for (const source of sources) {

        if (source.id === "reddit") continue;

        const collector = collectors[source.id];

        if (!collector) continue;

        try {

            const leads = await collector();

            allLeads.push(...leads);

            console.log(`${source.id}: ${leads.length} leads`);

        } catch (error) {

            console.log(`${source.id} failed: ${error.message}`);

        }

    }

    return allLeads;

}