function canConstruct(ransomNote: string, magazine: string): boolean {
    const ransomNoteObj : Record<string ,number>= {}

    for(let i = 0; i < ransomNote.length; i++){
        let cur = ransomNote[i];
        if(ransomNoteObj[cur] === undefined){
            ransomNoteObj[cur] = 1;
        }else{
            ransomNoteObj[cur] = ransomNoteObj[cur] + 1;
        }
    }
    for(let i = 0; i < magazine.length; i++){
        let cur = magazine[i];
        if(ransomNoteObj[cur]){
            ransomNoteObj[cur] = ransomNoteObj[cur] - 1;
        }
    }

    for(const char in ransomNoteObj){
        console.log('char', char)
        if(ransomNoteObj[char] < 0 || ransomNoteObj[char] > 0) return false;
    }
    return true;
};

const ransomNote = 'a';
const magazine = 'b';

[].indexOf