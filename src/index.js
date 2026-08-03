import { runCollectors } from "./collectors/collectorManager.js";

console.log("1. App started");

try {
    console.log("2. Before runCollectors");

    const leads = await runCollectors();

    console.log("3. After runCollectors");
    console.log(leads);

} catch (err) {

    console.error(err);

}