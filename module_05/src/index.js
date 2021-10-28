import database from './../database.json';
import TerminalController from './terminalController.js'
import Person from './person.js';
import { save } from './respository.js';

const DEFAULT_LANG = "pt-BR";
const STOP_TEEN = ":q";

const terminalController = new TerminalController();
terminalController.initializeTerminal(database, DEFAULT_LANG);

async function mainLoop() {
    try {
        const answer = await terminalController.question();
        
        if (answer === STOP_TEEN) {
            terminalController.closeTerminal();

            console.log("Process finished");

            return;
        }

        const person = Person.generateInstanceFromString(answer);
        terminalController.updateTable(person.formatted(DEFAULT_LANG));
        
        await save(person)

        return mainLoop();
    } catch (error) {
        console.log("BADDDD");

        return mainLoop();
    }
}

await mainLoop();