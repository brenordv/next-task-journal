export const onlyCapitalLetters = (str:string, maxLetters?: number): string => {
    let newStr = "";

    if (!str) {
        return "?";
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[A-Z]/)) {
            newStr += str[i];
        }
        if (maxLetters && newStr.length >= maxLetters)
            break;
    }

    if (newStr === "") {
        newStr = str[0].toUpperCase();
    }

    return newStr;
}