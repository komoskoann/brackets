module.exports = function check(str, bracketsConfig) {
  let bracketsMap = {};

  bracketsConfig.forEach(function(config) {
    let openBracket = config[0];
    let closeBracket = config[1];
    bracketsMap[openBracket] = closeBracket;
  });

  let openBrackets = Object.keys(bracketsMap);
  let closeBrackets = Object.values(bracketsMap);
  let stack = [];

  for(let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];

    if(openBrackets.includes(currentSymbol)) {
      if (closeBrackets.includes(currentSymbol)) {
        if(bracketsMap[topElement] === currentSymbol) {
          stack.pop();
        } else {
          stack.push(currentSymbol);
        }
      } else {
        stack.push(currentSymbol);
      }

    } else {
      if(stack.length === 0) {
        return false;
      }
      if(bracketsMap[topElement] === currentSymbol) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
