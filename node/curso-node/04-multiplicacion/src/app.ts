import { yarg } from './config/plugin/args.plugin';
import { Server } from './presentation/server-app';


(async() => {
    await main()
})();

async function main() {
    const { b:base, l:limit, s:showTable, S:saveTable, n:fileName, d:fileDestination } = yarg;

    Server.run({ base, limit, showTable, saveTable, fileName, fileDestination });
}