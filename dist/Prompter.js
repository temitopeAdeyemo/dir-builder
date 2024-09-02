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
class Prompter {
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
                            console.log("Invalid input. " + PromptQuestion);
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