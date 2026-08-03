import { githubCollector } from "./githubCollector.js";

const leads = await githubCollector();

console.log("Total:", leads.length);

console.log(leads.slice(0, 3));