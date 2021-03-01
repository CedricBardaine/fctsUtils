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
        // no determination to parse a vowel tab
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
    let nameProcessed = []; // no need, the first loop won't process a second time already processed values.

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


// // Bon bah je sais pas ce qui m'arrive, je revoie ça après
// var sortByLastLetter = function (array) {
//     return array.sort((e1, e2) => {
//         console.log(e1.charAt(e1.length - 1));
//         // if (e1.charAt(e1.length-1) - e2.charAt(e2.length-1) < 0)
//         //     return 1
//         // else if (e1.charAt(e1.length-1) - e2.charAt(e2.length-1) > 0)
//         //     return -1
//         // else
//         //     return 0
//         if (e1.charAt(e1.length - 1).localeCompare(e2.charAt(e2.length - 1)) < 0)
//             return 1
//         else if (e1.charAt(e1.length - 1).localeCompare(e2.charAt(e2.length - 1)) > 0)
//             return -1
//         else
//             return 0

//     })
// }

var getFirstHalf = function (string) {
    return string.slice(0, Math.ceil(string.length / 2))
}

var makeNegative = function (number) {
    // console.log(number, number*2 , number - number*2)
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
    // return Object.assign({}, array);

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
    return string.split('@')[1].split('.')[0];
}

var titleize = function (string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function (string) {
    return 'Write your method here';
}

var squareRoot = function (number) {
    return 'Write your method here';
}

var factorial = function (number) {
    return 'Write your method here';
}

var findAnagrams = function (string) {
    return 'Write your method here';
}

var convertToCelsius = function (number) {
    return 'Write your method here';
}

var letterPosition = function (array) {
    return 'Write your method here';
}
