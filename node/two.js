
export function randNum(x,y){
return randNum = Math.floor(Math.random() * (Math.max(x,y) - Math.min(x,y)+1)) + Math.min(x,y);
}

console.log(randNum(num1, num2));
