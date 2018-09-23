module.exports = function solveEquation(equation) {
  let arr = equation.split(' ');
  let a = +arr[0];
  let b = +arr[4];
  let c = +arr[8];
  let op1 = arr[3];
  let op2 = arr[7];
  if(op1 == '-') b = -b;
  if(op2 == '-') c = -c;
  let d = Math.pow(b, 2) - 4*a*c;
  let x1 = Math.round((-b + Math.sqrt(d))/(a*2));
  let x2 = Math.round((-b - Math.sqrt(d))/(a*2));
  return x1 < x2 ? [x1,x2] : [x2,x1]
}

