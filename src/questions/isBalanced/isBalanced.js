const isParenthesis = char => ['{', '(', '[', ']', ')', '}'].includes(char);

const isClosingParenthesis = char => ['}', ')', ']'].includes(char);

const getOpenParenthesis = char => {
    return {
        '}': '{',
        ')': '(',
        ']': '[',
    }[char];
};

export const isBalanced = string => {
    const stack = [];
    for (let i = 0; i < string.length; i++) {
        if (!isParenthesis(string[i])) {
            continue;
        }
        if (isClosingParenthesis(string[i])) {
            if (stack[stack.length - 1] === getOpenParenthesis(string[i])) {
                stack.pop();
            }
        } else {
            stack.push(string[i]);
        }
    }
    return stack.length === 0;
};