import { tokenize } from "./tokenizer";

export class Parser {
  parse(src: string) {
    const tokens = tokenize(src);
    for (let i = 1; i < tokens.length; i++) {
      if (tokens[i].swiftRole === "meta.left_paren") {
        if (tokens[i - 1].role === "variable") {
          tokens[i - 1].role = "function";
        }
      }
    }
    return tokens;
  }
}
