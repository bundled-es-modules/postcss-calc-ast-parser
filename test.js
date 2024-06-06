const calcAstParser = require("./dist/index.js");
const { reduceExpression } = require("./dist/index.js");

const ast = calcAstParser.parse("20 * 40px");

console.assert(reduceExpression(ast).value === 800);
