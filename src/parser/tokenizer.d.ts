declare const tokenRole: readonly ["meta", "keyword", "storage", "operator", "type", "numeric", "string", "variable", "function", "comment", "other"];
export interface Token {
    line: number;
    char: number;
    code: string;
    role: typeof tokenRole[number];
    swiftRole: string;
}
export declare const tokenize: (src: string) => Token[];
export {};
