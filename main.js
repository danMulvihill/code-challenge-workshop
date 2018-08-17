function stringy(iterNum){
    let binStr = "";
    for (let i = 0; i<iterNum; i++){ 
        binStr += "10";
    }
    binStr = binStr.slice(0, binStr.length/2)

    return binStr
}
console.log("Striny: "+stringy(6));


function revArray(inty){
    strInty = inty.toString();
    arStrInty = strInty.split("").reverse();
    let inties = []
    for (let i = 0; i<arStrInty.length; i++){        
        inties.push(parseInt(arStrInty[i]));
    }
    return inties;
}
console.log("reverse Array of Ints: "+revArray(12345));


console.log("Fibonacci seq: ")

function Fibonacci(size){
    var i=1; var j=0; var k=0;
    while(size > 0){ 
        k = i;
        i = i+j;
        j = k;
        size--;        
        console.log(i);  
    }
}
Fibonacci(10)

function checkCoupon(coup){
    var today = new Date();
    var coupYear = coup.split(" ")[2];
    //check year:
    if (coupYear>today.getFullYear()) return true;  //any coupon dated after current year is valid

    //check month:
    var mths = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    coupMth = coup.split(" ")[0].slice(0,3).toLowerCase();
    //allows for most abbreviations of months and for upper and lower cases;
   
    for (var i =0; i<13; i++){
        if (coupMth == mths[i]) break;
    }
    if (i>today.getMonth()) return true;  //any coupon dated after current month is valid
   
    //check date (day of month)
    if (parseInt(coup.split(" ")[1])>=today.getDate()) return true;
    return false;
 }

console.log("Coupon check: "+checkCoupon("August 17, 2018"))


function validateEmail(email){
    email = email.toLowerCase();
    var atInd = email.indexOf("@");
    //check to see of @ is there, but not at beginning or end of string
    if(atInd == 0 || atInd == -1 || atInd == email.length-1 ) return "invalid email"
    //check to see if there is a . after @ and not the last char
    if(email.lastIndexOf('.') < atInd || email.lastIndexOf('.') == email.length-1 ) return "invalid email";
    
    //check to see if first char is a letter
    var firstCharIsLetter = email[0].match(/[a-z]/);
    if (firstCharIsLetter == null) return "invalid email"

    //check to see if last char is a letter
    console.log(email.length)
    var lastCharIsLetter = email[email.length-1].match(/[a-z]/);
    if (lastCharIsLetter == null) return "invalid email"

    var emails = email.split("@");

    //check to see if first part has letters, nums or underscore
    console.log(emails[0])
    var x = emails[0].match(/[a-z0-9_]/);
    console.log(x)
    if (x == null) return "invalid email"
    
    //check to see if last part has letters, nums, underschore, or hyphen
    var y = emails[1].match(/[a-z0-9_\.\-]/);
    console.log(y)
    if (y == null) return "invalid email"
    
    return "valid email"
}
    //if you read this, I have not quite got the last two regEx matchs working
console.log(validateEmail("x#d@y.zt"));