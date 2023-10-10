// code your solution here
function saturdayFun(str = "roller-skate") {
    return `This Saturday, I want to ${str}!`
}
// console.log(saturdayFun("bathe my dog"));
// console.log(saturdayFun());
function mondayWork(str = "go to the office") {
    return `This Monday, I will ${str}.`
}
function wrapAdjective(flair = "*") {
    return function (p = "special") {
        return `You are ${flair}${p}${flair}!`

    }
}
// console.log(wrapAdjective("%")("a dedicated programmer"));
console.log(wrapAdjective()());