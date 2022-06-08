const tokenRole = [
  "meta",
  "keyword",
  "storage",
  "operator",
  "type",
  "numeric",
  "string",
  "variable",
  "function",
  "comment",
  "other",
] as const;

export interface Token {
  line: number;
  char: number;
  code: string;
  role: typeof tokenRole[number];
  swiftRole: string;
}

const wellKnownRole = {
  "(": {
    swiftRole: "meta.left_paren",
    role: "meta",
  },
  ")": {
    swiftRole: "meta.right_paren",
    role: "meta",
  },
  "{": {
    swiftRole: "meta.left_brace",
    role: "meta",
  },
  "}": {
    swiftRole: "meta.right_brace",
    role: "meta",
  },
  "[": {
    swiftRole: "meta.left_bracket",
    role: "meta",
  },
  "]": {
    swiftRole: "meta.right_bracket",
    role: "meta",
  },
  ":": {
    swiftRole: "meta.colon",
    role: "meta",
  },
  ";": {
    swiftRole: "meta.semicolon",
    role: "meta",
  },
  for: {
    swiftRole: "keyword.for",
    role: "keyword",
  },
  while: {
    swiftRole: "keyword.while",
    role: "keyword",
  },
  repeat: {
    swiftRole: "keyword.repeat",
    role: "keyword",
  },
  if: {
    swiftRole: "keyword.if",
    role: "keyword",
  },
  else: {
    swiftRole: "keyword.else",
    role: "keyword",
  },
  switch: {
    swiftRole: "keyword.switch",
    role: "keyword",
  },
  case: {
    swiftRole: "keyword.case",
    role: "keyword",
  },
  default: {
    swiftRole: "keyword.default",
    role: "keyword",
  },
  return: {
    swiftRole: "keyword.return",
    role: "keyword",
  },
  break: {
    swiftRole: "keyword.break",
    role: "keyword",
  },
  continue: {
    swiftRole: "keyword.continue",
    role: "keyword",
  },
  import: {
    swiftRole: "keyword.import",
    role: "keyword",
  },
  as: {
    swiftRole: "keyword.as",
    role: "keyword",
  },
  var: {
    swiftRole: "storage.var",
    role: "storage",
  },
  let: {
    swiftRole: "storage.let",
    role: "storage",
  },
  func: {
    swiftRole: "storage.func",
    role: "storage",
  },
  in: {
    swiftRole: "storage.in",
    role: "storage",
  },
  true: {
    swiftRole: "storage.true",
    role: "storage",
  },
  false: {
    swiftRole: "storage.false",
    role: "storage",
  },
  Int: {
    swiftRole: "type.int",
    role: "type",
  },
  Int8: {
    swiftRole: "type.int8",
    role: "type",
  },
  Int16: {
    swiftRole: "type.int16",
    role: "type",
  },
  Int32: {
    swiftRole: "type.int32",
    role: "type",
  },
  Int64: {
    swiftRole: "type.int64",
    role: "type",
  },
  UInt: {
    swiftRole: "type.uint",
    role: "type",
  },
  UInt8: {
    swiftRole: "type.uint8",
    role: "type",
  },
  UInt16: {
    swiftRole: "type.uint16",
    role: "type",
  },
  UInt32: {
    swiftRole: "type.uint32",
    role: "type",
  },
  UInt64: {
    swiftRole: "type.uint64",
    role: "type",
  },
  Float: {
    swiftRole: "type.float",
    role: "type",
  },
  Double: {
    swiftRole: "type.double",
    role: "type",
  },
  String: {
    swiftRole: "type.string",
    role: "type",
  },
  Bool: {
    swiftRole: "type.bool",
    role: "type",
  },
  Array: {
    swiftRole: "type.array",
    role: "type",
  },
  "=>": {
    swiftRole: "storage.arrow",
    role: "storage",
  },
  "+": {
    swiftRole: "operator.plus",
    role: "operator",
  },
  "-": {
    swiftRole: "operator.minus",
    role: "operator",
  },
  "*": {
    swiftRole: "operator.asterisk",
    role: "operator",
  },
  "/": {
    swiftRole: "operator.slash",
    role: "operator",
  },
  "%": {
    swiftRole: "operator.percent",
    role: "operator",
  },
  "&": {
    swiftRole: "operator.bit_and",
    role: "operator",
  },
  "|": {
    swiftRole: "operator.bit_or",
    role: "operator",
  },
  "^": {
    swiftRole: "operator.bit_xor",
    role: "operator",
  },
  "~": {
    swiftRole: "operator.bit_not",
    role: "operator",
  },
  "&&": {
    swiftRole: "operator.logic_and",
    role: "operator",
  },
  "||": {
    swiftRole: "operator.logic_or",
    role: "operator",
  },
  "!": {
    swiftRole: "operator.logic_not",
    role: "operator",
  },
  "??": {
    swiftRole: "operator.null_union",
    role: "operator",
  },
  "?.": {
    swiftRole: "operator.optional_chain",
    role: "operator",
  },
  "?": {
    swiftRole: "operator.question",
    role: "operator",
  },
  "==": {
    swiftRole: "operator.equal",
    role: "operator",
  },
  "===": {
    swiftRole: "operator.strict_equal",
    role: "operator",
  },
  "!=": {
    swiftRole: "operator.not_equal",
    role: "operator",
  },
  "!==": {
    swiftRole: "operator.strict_not_equal",
    role: "operator",
  },
  "<": {
    swiftRole: "operator.less",
    role: "operator",
  },
  ">": {
    swiftRole: "operator.greater",
    role: "operator",
  },
  "<=": {
    swiftRole: "operator.less_equal",
    role: "operator",
  },
  ">=": {
    swiftRole: "operator.greater_equal",
    role: "operator",
  },
  "<<": {
    swiftRole: "operator.left_shift",
    role: "operator",
  },
  ">>": {
    swiftRole: "operator.right_shift",
    role: "operator",
  },
  ">>>": {
    swiftRole: "operator.unsigned_right_shift",
    role: "operator",
  },
  "=": {
    swiftRole: "operator.assign",
    role: "operator",
  },
  "+=": {
    swiftRole: "operator.add_assign",
    role: "operator",
  },
  "-=": {
    swiftRole: "operator.sub_assign",
    role: "operator",
  },
  "*=": {
    swiftRole: "operator.mul_assign",
    role: "operator",
  },
  "/=": {
    swiftRole: "operator.dev_assign",
    role: "operator",
  },
  "%=": {
    swiftRole: "operator.mod_assign",
    role: "operator",
  },
  "<<=": {
    swiftRole: "operator.left_shift_assign",
    role: "operator",
  },
  ">>=": {
    swiftRole: "operator.right_shift_assign",
    role: "operator",
  },
  ">>>=": {
    swiftRole: "operator.unsigned_right_shift_assign",
    role: "operator",
  },
  "&=": {
    swiftRole: "operator.bit_and_assign",
    role: "operator",
  },
  "|=": {
    swiftRole: "operator.bit_or_assign",
    role: "operator",
  },
  "^=": {
    swiftRole: "operator.bit_xor_assign",
    role: "operator",
  },
  "&&=": {
    swiftRole: "operator.logic_and_assign",
    role: "operator",
  },
  "||=": {
    swiftRole: "operator.logic_or_assign",
    role: "operator",
  },
  "??=": {
    swiftRole: "operator.null_union_assign",
    role: "operator",
  },
  ",": {
    swiftRole: "operator.comma",
    role: "operator",
  },
  ".": {
    swiftRole: "operator.dot",
    role: "operator",
  },
  "..<": {
    swiftRole: "operator.half-range",
    role: "operator",
  },
  "...": {
    swiftRole: "operator.range",
    role: "operator",
  },
} as const;

const lineCommentMode = Symbol();
const blockCommentMode = Symbol();
const stringMode = Symbol();
const codeMode = Symbol();
type Mode =
  | typeof lineCommentMode
  | typeof blockCommentMode
  | typeof stringMode
  | typeof codeMode;
export const tokenize = (src: string) => {
  const tokens: Token[] = [];
  let curLine = 0;
  let curChar = 0;
  let begLine = 0;
  let begChar = 0;
  let buffer = "";
  let mode: Mode = codeMode;
  let begStr = "";
  const pushBuffer = (char: string) => {
    if (buffer === "") {
      begLine = curLine;
      begChar = curChar;
    }
    buffer += char;
  };
  const clearBuffer = () => {
    switch (mode) {
      case lineCommentMode:
        tokens.push({
          line: begLine,
          char: begChar,
          code: buffer,
          role: "comment",
          swiftRole: "comment.line",
        });
        buffer = "";
        break;
      case blockCommentMode:
        tokens.push({
          line: begLine,
          char: begChar,
          code: buffer,
          role: "comment",
          swiftRole: "comment.block",
        });
        buffer = "";
        break;
      case stringMode:
        tokens.push({
          line: begLine,
          char: begChar,
          code: buffer,
          role: "string",
          swiftRole: "string.double",
        });
        buffer = "";
        break;
      case codeMode:
        if (buffer !== "") {
          tokens.push(createToken(begLine, begChar, buffer));
          buffer = "";
        }
        break;
    }
    begLine = curLine;
    begChar = curChar;
  };
  for (const line of src.split("\n")) {
    for (curChar = 0; curChar < line.length; ++curChar)
      switch (mode) {
        case lineCommentMode:
          pushBuffer(line[curChar]);
          break;
        case blockCommentMode:
          if (line[curChar] === "*" && line[curChar + 1] === "/") {
            pushBuffer("*/");
            ++curChar;
            clearBuffer();
            mode = codeMode;
          } else {
            pushBuffer(line[curChar]);
          }
          break;
        case stringMode:
          pushBuffer(line[curChar]);
          if (line[curChar] === begStr) {
            clearBuffer();
            mode = codeMode;
          }
          break;
        case codeMode:
          switch (line[curChar]) {
            case " ":
            case "\t":
              clearBuffer();
              break;
            case '"':
            case "'":
            case "`":
              clearBuffer();
              mode = stringMode;
              begStr = line[curChar];
              pushBuffer(line[curChar]);
              break;
            case "(":
            case ")":
            case "{":
            case "}":
            case "[":
            case "]":
            case ";":
              clearBuffer();
              pushBuffer(line[curChar]);
              clearBuffer();
              break;
            case "+":
              clearBuffer();
              if (line[curChar + 1] === "=") {
                pushBuffer("+=");
                ++curChar;
              } else {
                pushBuffer("+");
              }
              clearBuffer();
              break;
            case "-":
              clearBuffer();
              if (line[curChar + 1] === "=") {
                pushBuffer("-=");
                ++curChar;
              } else {
                pushBuffer("-");
              }
              break;
            case "*":
              clearBuffer();
              if (line[curChar + 1] === "=") {
                pushBuffer("*=");
                ++curChar;
              } else {
                pushBuffer("*");
              }
              break;
            case "/":
              clearBuffer();
              if (line[curChar + 1] === "=") {
                pushBuffer("/=");
                ++curChar;
                clearBuffer();
              } else if (line[curChar + 1] === "/") {
                mode = lineCommentMode;
                pushBuffer("//");
                ++curChar;
              } else if (line[curChar + 1] === "*") {
                mode = blockCommentMode;
                pushBuffer("/*");
                ++curChar;
              } else {
                pushBuffer("/");
                clearBuffer();
              }
              break;
            case "%":
              clearBuffer();
              if (line[curChar + 1] === "=") {
                pushBuffer("%=");
                ++curChar;
              } else {
                pushBuffer("%");
              }
              break;
            case "&":
              clearBuffer();
              if (line[curChar + 1] === "&") {
                if (line[curChar + 2] === "=") {
                  pushBuffer("&&=");
                  curChar += 2;
                } else {
                  pushBuffer("&&");
                  ++curChar;
                }
              } else if (line[curChar + 1] === "=") {
                pushBuffer("&=");
                ++curChar;
              } else {
                pushBuffer("&");
              }
              clearBuffer();
              break;
            case "|":
              clearBuffer();
              if (line[curChar + 1] === "|") {
                if (line[curChar + 2] === "=") {
                  pushBuffer("||=");
                  curChar += 2;
                } else {
                  pushBuffer("||");
                  ++curChar;
                }
              } else if (line[curChar + 1] === "=") {
                pushBuffer("|=");
                ++curChar;
              } else {
                pushBuffer("|");
              }
              clearBuffer();
              break;
            case "^":
              clearBuffer();
              if (line[curChar + 1] === "=") {
                pushBuffer("^=");
                ++curChar;
              } else {
                pushBuffer("^");
              }
              clearBuffer();
              break;
            case "~":
              clearBuffer();
              pushBuffer("~");
              clearBuffer();
              break;
            case "=":
              clearBuffer();
              if (line[curChar + 1] === "=") {
                if (line[curChar + 2] === "=") {
                  pushBuffer("===");
                  curChar += 2;
                } else {
                  pushBuffer("==");
                  ++curChar;
                }
              } else {
                pushBuffer("=");
              }
              clearBuffer();
              break;
            case "!":
              clearBuffer();
              if (line[curChar + 1] === "=") {
                if (line[curChar + 2] === "=") {
                  pushBuffer("!==");
                  curChar += 2;
                } else {
                  pushBuffer("!=");
                  ++curChar;
                }
              } else {
                pushBuffer("!");
              }
              clearBuffer();
              break;
            case "<":
              clearBuffer();
              if (line[curChar + 1] === "<") {
                if (line[curChar + 2] === "=") {
                  pushBuffer("<<=");
                  curChar += 2;
                } else {
                  pushBuffer("<<");
                  ++curChar;
                }
              } else if (line[curChar + 1] === "=") {
                pushBuffer("<=");
                ++curChar;
              } else {
                pushBuffer("<");
              }
              clearBuffer();
              break;
            case ">":
              clearBuffer();
              clearBuffer();
              if (line[curChar + 1] === ">") {
                if (line[curChar + 2] === ">") {
                  if (line[curChar + 3] === "=") {
                    pushBuffer(">>>=");
                    curChar += 3;
                  } else {
                    pushBuffer(">>>");
                    curChar += 2;
                  }
                } else if (line[curChar + 2] === "=") {
                  pushBuffer(">>=");
                  curChar += 2;
                } else {
                  pushBuffer(">>");
                  ++curChar;
                }
              } else if (line[curChar + 1] === "=") {
                pushBuffer(">=");
                ++curChar;
              } else {
                pushBuffer(">");
              }
              clearBuffer();
              break;
            case "?":
              clearBuffer();
              if (line[curChar + 1] === "?") {
                if (line[curChar + 2] === "=") {
                  pushBuffer("??=");
                  curChar += 2;
                } else {
                  pushBuffer("??");
                  ++curChar;
                }
              } else if (line[curChar + 1] === ".") {
                pushBuffer("?.");
                ++curChar;
              } else {
                pushBuffer("?");
              }
              clearBuffer();
              break;
            case ":":
              clearBuffer();
              pushBuffer(":");
              clearBuffer();
              break;
            case ",":
              clearBuffer();
              pushBuffer(",");
              clearBuffer();
              break;
            case ".":
              clearBuffer();
              if (line[curChar + 1] === "." && line[curChar + 2] === ".") {
                pushBuffer("...");
                curChar += 2;
              } else if (
                line[curChar + 1] === "." &&
                line[curChar + 2] === "<"
              ) {
                pushBuffer("..<");
                curChar += 2;
              } else {
                pushBuffer(".");
              }
              clearBuffer();
              break;
            default:
              pushBuffer(line[curChar]);
          }
          break;
      }

    clearBuffer();
    if (mode === lineCommentMode) {
      mode = codeMode;
    }
    ++curLine;
  }
  clearBuffer();
  return tokens;
};
const createToken = (
  begLine: number,
  begChar: number,
  buffer: string,
): Token => {
  let role: Token["role"] = "other";
  let swiftRole: Token["swiftRole"] = "unknown";
  if (Object.keys(wellKnownRole).includes(buffer)) {
    role = wellKnownRole[buffer as keyof typeof wellKnownRole].role;
    swiftRole = wellKnownRole[buffer as keyof typeof wellKnownRole].swiftRole;
  } else if (/^[a-zA-Z_][a-zA-Z_0-9]*$/.test(buffer)) {
    role = "variable";
    swiftRole = "variable";
  } else if (/^[0-9]+(\.[0-9]*)?$/.test(buffer)) {
    role = "numeric";
    swiftRole = "numeric.number";
  }
  return {
    line: begLine,
    char: begChar,
    code: buffer,
    role: role,
    swiftRole: swiftRole,
  };
};
