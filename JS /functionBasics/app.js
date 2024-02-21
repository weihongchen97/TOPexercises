function add7(){
    number1 + 7
}
function multiply(num1, num2){
    return (num1 * num2)
}

tester = function capitalize(arg){
    if (typeof arg === 'string') {
        if (arg && arg.length > 0 ) {// make sure that index 0 gets applied .toUpperCase of argument input
    const result =  arg[0].toUpperCase() + arg.slice(1);
    return result;
    } else {
            window.alert("your input was blank, please enter a string")
        }
        } else {
        window.alert("please enter a string")
    }
}

capLast = function lastLetter(agg){
    if(typeof agg === 'string'){
        if(agg && agg.length > 0){
            const i = agg.length - 1;
            const result = agg.slice(0, i).toLowerCase() + agg[i].toUpperCase();
            return result;
        } else {
            window.alert("your input was blank, please enter a string")
        }
    } else {
        window.alert("please enter a string")
    }
}