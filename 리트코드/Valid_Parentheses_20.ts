function isValid(s: string): boolean {

    const stack : string[] = [];
    const open = ['(', '{', '['];
    const close = [')', '}', ']'];
    for(let i = 0 ; i< s.length; i++){
        const cur = s[i];
        if(open.includes(cur)){
            stack.push(cur);
        }else{
            const last = stack[stack.length-1];
            if(cur === ')' && last === '('){
                stack.pop();
            }
            else if(cur === '}' && last === '{'){
                stack.pop();
            }
            else if(cur === ']' && last === '['){
                stack.pop();
            }else{
                return false;
            }
        }
    }

    return true;
};


'(' '{' '['