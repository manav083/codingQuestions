

function convertDecimalToBinary(decimalNumber) { 
    let base2 = decimalNumber.toString(2);
    console.log(base2.split(""))
    let invert = "";
    for(let i = 0; i < base2.split("").length; i++){
        if(base2[i] === '0'){
            invert += 1
        }else{
            invert += 0;
        }
    }
    
    console.log(invert)
    let invertedBase10 = 0;
    for(let i = invert.split("").length - 1; i >= 0; i--){
        // console.log(i, invert[i], Math.abs((i - invert.split('').length) + 1));
    invertedBase10 += invert[i] * Math.pow(2, Math.abs(i - invert.split('').length +1));
    // console.log(invert[i] , Math.pow(2, Math.abs(i - invert.split("").length - 1)), invertedBase10);
    }
    return invertedBase10
} 
  
const num1 = 99; 
const result = convertDecimalToBinary(num1); 
console.log(result);