function stringToUnicode() {
    var string = prompt("Enter the string you would like to convert to unicode");
    var hex, result;
    var unicodeChars = [];
    for (i in string) {
        hex = string[i].codePointAt(0).toString(16);
        unicodeChars.push("\\u" + "0000".substring(0, 4 - hex.length) + hex);
    };
    window.alert(unicodeChars.join(''));
};

function unicodeToString() {
    var unicode = prompt("Enter the unicode you would like to convert to a string");
    window.alert(decodeURIComponent(JSON.parse('"' + unicode.replace(/\"/g, '\\"') + '"')));
};
