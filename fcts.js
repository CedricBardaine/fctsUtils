var selectElementsStartingWithA = function (array) {
    let ret = [];
    array.forEach(element => {
        if (element.slice(0, 1) == 'a') ret.push(element);
    });
    return ret;
}

var selectElementsStartingWithVowel = function (array) {
    let ret = [];
    array.forEach(element => {
        if (
            element.slice(0, 1) == 'a' ||
            element.slice(0, 1) == 'e' ||
            element.slice(0, 1) == 'i' ||
            element.slice(0, 1) == 'o' ||
            element.slice(0, 1) == 'u' ||
            element.slice(0, 1) == 'y'
        ) ret.push(element);
    });
    return ret;
}

var removeNullElements = function (array) {
    let ret = [];
    array.forEach(element => {
        if (element != null) ret.push(element);
    });
    return ret;
}

var removeNullAndFalseElements = function (array) {
    let ret = [];
    array.forEach(element => {
        if (element !== null && element !== false) ret.push(element);
    });
    return ret;
}

var reverseWordsInArray = function (array) {
    return array.map((element) => element.toString().split("").reverse().join(""));
}

var everyPossiblePair = function (array) {
    let ret = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            ret.push([array[i], array[j]].sort())
        }
    }
    return ret.sort();
}

var allElementsExceptFirstThree = function (array) {
    return array.slice(3);
}

var addElementToBeginning = function (array, element) {
    array.unshift(element);
    return array;
}

var sortByLastLetter = function (array) {
    return array.sort((e1, e2) => {
        return e1.charAt(e1.length - 1).localeCompare(e2.charAt(e2.length - 1));
    })
}

var getFirstHalf = function (string) {
    return string.slice(0, Math.ceil(string.length / 2))
}

var makeNegative = function (number) {
    return number > 0 ? number - (number * 2) : number;
}

var numberOfPalindromes = function (array) {
    let counter = 0;
    let reversedWordsArray = array.map((element) => element.toString().split("").reverse().join(""));

    for (let i = 0; i < array.length; i++) {
        if (array[i] == reversedWordsArray[i]) counter++
    }

    return counter;
}

var shortestWord = function (array) {
    if (!array.length) return null;

    let theShortest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i].length < theShortest.length) theShortest = array[i];
    }
    return theShortest;
}

var longestWord = function (array) {
    if (!array.length) return null;

    let theLongest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i].length > theLongest.length) theLongest = array[i];
    }
    return theLongest;
}

var sumNumbers = function (array) {
    return array.reduce((acc, num) => acc + num);
}

var repeatElements = function (array) {
    let copiedArray = array.slice();
    copiedArray.push(...array);
    return copiedArray
}

var stringToNumber = function (string) {
    return parseInt(string);
}

var calculateAverage = function (array) {
    return array.reduce((acc, num) => acc + num) / array.length;
}

var getElementsUntilGreaterThanFive = function (array) {
    let ret = [];

    let i = 0;
    let stop = false;
    while (i < array.length && !stop) {
        if (array[i] > 5)
            stop = true;
        else
            ret.push(array[i]);

        i++
    }
    return ret;
}

var convertArrayToObject = function (array) {
    let ret = {};

    for (let i = 0; i < array.length; i++) {
        Object.assign(ret, { [array[i]]: array[i + 1] });
        i++;
    }
    return ret;
}

var getAllLetters = function (array) {
    let letterTab = [];
    array.forEach(elementString => {
        elementString.split("").forEach(aLetter => {
            if (!letterTab.includes(aLetter)) letterTab.push(aLetter);
        });
    });
    return letterTab.sort();
}

var swapKeysAndValues = function (object) {
    var ret = {};
    for (var key in object)
        ret[object[key]] = key;
    return ret;
}

var sumKeysAndValues = function (object) {
    let ret = 0;
    for (let key in object)
        ret += (parseInt(key) + parseInt(object[key]));
    return ret;
}

var removeCapitals = function (string) {
    const regex = /[A-Z]/g;
    let ret = "";

    for (var i = 0; i < string.length; i++)
        if (!string.charAt(i).match(regex))
            ret += string.charAt(i);

    return ret;
}

var roundUp = function (number) {
    return Math.ceil(number);
}

var formatDateNicely = function (date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return (day < 10 ? '0' + day : day) + '/' + (month < 10 ? '0' + month : month) + '/' + year;
}

var getDomainName = function (string) {
    let secondPart = [];
    let ret = '';

    secondPart = string.split('@')[1].split('.');

    for (let i = 0; i < secondPart.length - 1 /* -1 to omit 'com' or 'fr' */; i++)
        ret += secondPart[i] + '.';

    ret = ret.slice(0, ret.length - 1); // delete the last '.'

    return ret;
}

var titleize = function (string) {
    let arrayedString = string.split(" ");

    for (let i = 0; i < arrayedString.length; i++) {
        if (i == 0 // si première lettre
            || arrayedString[i - 1].toLowerCase() == "the" // si succède 'The'
            || arrayedString[i - 1].charAt(arrayedString[i - 1].length - 1) == '.' // si succède un '.'
        )
            arrayedString[i] =
                arrayedString[i].charAt(0).toUpperCase() + arrayedString[i].slice(1);
    }
    return arrayedString.join(' ');
}

var checkForSpecialCharacters = function (string) {
    return !!string.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);
}

var squareRoot = function (number) {
    return Math.sqrt(number);
}

var factorial = function (number) {
    let ret = 1;
    for (let i = 2; i <= number; i++)
        ret *= i;
    return ret;
}

var findAnagrams = function (string) {
    // TODO
    return 'Write your method here';
}

var convertToCelsius = function (number) {
    // − 32) × 5/9

    return Math.round((number - 32) * 5 / 9);
}

var letterPosition = function (array) {
    let alphabet = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
    };
    return array.map((element) => {
        return element = alphabet[element.toLowerCase()]
    });
}
