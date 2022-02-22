function factorial(num) {
  if (num === 0) {
    return 1;
  } else if (num > 0) {
    return num * factorial(num - 1);
  }
  throw new TypeError("Number is not defined");
}

function toPower(number, exp){
  if(exp === 1){
    return number;
  } else if(exp > 1){
    return number * toPower(number, exp - 1 )
  } else if(exp === 0){
    return 1
  } else{
    return 1 / ( number * toPower(number, Math.abs(exp) - 1 ))

  }
}