function isPalindrome(s: string): boolean {
    
    const removeNonalpha = Array.from(s).filter(s => /[0-9a-zA-Z]/.test(s));
    const toLowerString = removeNonalpha.map((char) => char.toLowerCase());
    const reverseString = [...toLowerString].reverse();

    for(let i = 0; i < toLowerString.length; i++){
        if(toLowerString[i] !== reverseString[i]){
            return false;
        }
    }

    return true;
};