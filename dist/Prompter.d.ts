/**
 * A utility class for prompting the user for confirmation in case a directory exists.
 */
export declare class Prompter {
    /**
     * Initializes the prompting process.
     * Checks if the specified directory exists and is a directory.
     * If so, prompts the user to confirm whether to continue.
     *
     * @param {string} dir - The path to the directory to check.
     * @returns {Promise<void>} A promise that resolves when the user response has been handled.
     */
    static init(dir: string): Promise<void>;
    /**
     * Prompts the user with a question and waits for a valid response.
     * Continuously prompts the user until they provide a valid answer ('y' or 'n').
     *
     * @param {string} PromptQuestion - The question to prompt the user with.
     * @returns {Promise<string>} A promise that resolves with the user's response ('y' or 'n').
     */
    static promptUser(PromptQuestion: string): Promise<string>;
}
