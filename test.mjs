import calcAstParser, { reduceExpression } from "./dist/index.mjs";

const ast = calcAstParser.parse("20 * 40px");

console.assert(reduceExpression(ast).value === 800);
