"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prompter = void 0;
const fs = require("fs");
const path = require("path");
const readline = require("readline");
/**
 * A utility class for prompting the user for confirmation in case a directory exists.
 */
class Prompter {
    /**
     * Initializes the prompting process.
     * Checks if the specified directory exists and is a directory.
     * If so, prompts the user to confirm whether to continue.
     *
     * @param {string} dir - The path to the directory to check.
     * @returns {Promise<void>} A promise that resolves when the user response has been handled.
     */
    static init(dir) {
        return __awaiter(this, void 0, void 0, function* () {
            const dirPath = path.resolve(dir);
            if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
                const answer = yield this.promptUser('Directory exists. Continue? (y/n): ');
                if (answer === 'y') {
                    return;
                }
                else if (answer === 'n') {
                    console.log('Operation aborted.');
                    process.exit(0);
                }
            }
            else {
                return;
            }
        });
    }
    /**
     * Prompts the user with a question and waits for a valid response.
     * Continuously prompts the user until they provide a valid answer ('y' or 'n').
     *
     * @param {string} PromptQuestion - The question to prompt the user with.
     * @returns {Promise<string>} A promise that resolves with the user's response ('y' or 'n').
     */
    static promptUser(PromptQuestion) {
        return __awaiter(this, void 0, void 0, function* () {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            return new Promise((resolve) => {
                const prompt = () => {
                    rl.question(PromptQuestion, (answer) => {
                        const trimmedAnswer = answer.trim().toLowerCase();
                        if (trimmedAnswer === 'y' || trimmedAnswer === 'n') {
                            rl.close();
                            resolve(trimmedAnswer);
                        }
                        else {
                            console.log('Invalid input. ' + PromptQuestion);
                            prompt();
                        }
                    });
                };
                prompt();
            });
        });
    }
}
exports.Prompter = Prompter;
//# sourceMappingURL=Prompter.js.map