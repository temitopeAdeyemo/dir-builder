export declare class Prompter {
    static init(dir: string): Promise<void>;
    static promptUser(PromptQuestion: string): Promise<unknown>;
}
