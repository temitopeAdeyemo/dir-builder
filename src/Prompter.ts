import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

/**
 * A utility class for prompting the user for confirmation in case a directory exists.
 */
export class Prompter {
  /**
   * Initializes the prompting process.
   * Checks if the specified directory exists and is a directory.
   * If so, prompts the user to confirm whether to continue.
   *
   * @param {string} dir - The path to the directory to check.
   * @returns {Promise<void>} A promise that resolves when the user response has been handled.
   */
  static async init(dir: string): Promise<void> {
    const dirPath = path.resolve(dir);

    if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
      const answer = await this.promptUser('Directory exists. Continue? (y/n): ');

      if (answer === 'y') {
        return;
      } else if (answer === 'n') {
        console.log('Operation aborted.');
        process.exit(0);
      }
    } else {
      return;
    }
  }

  /**
   * Prompts the user with a question and waits for a valid response.
   * Continuously prompts the user until they provide a valid answer ('y' or 'n').
   *
   * @param {string} PromptQuestion - The question to prompt the user with.
   * @returns {Promise<string>} A promise that resolves with the user's response ('y' or 'n').
   */
  static async promptUser(PromptQuestion: string): Promise<string> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      const prompt = () => {
        rl.question(PromptQuestion, (answer: any) => {
          const trimmedAnswer = answer.trim().toLowerCase();
          if (trimmedAnswer === 'y' || trimmedAnswer === 'n') {
            rl.close();
            resolve(trimmedAnswer);
          } else {
            console.log('Invalid input. ' + PromptQuestion);
            prompt();
          }
        });
      };

      prompt();
    });
  }
}
