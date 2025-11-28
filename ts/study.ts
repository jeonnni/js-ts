const greeter = (name: string)=>{
    console.log(`hello ${name}`)
}
greeter('eunmi');


const active:boolean = true;
console.log(active)

const decimal:number = 9;
const hex: number = 0xf00d;
const binary:number =0xb1010;
const octal:number=0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

const str:string = '문자열'
console.log(str);

const firstArr:number[] = [1,2,3]
const secondArr:Array<number> = [4,5,6]
console.log(firstArr);
console.log(secondArr);
function example (arg: Array<{labal:string, value:string}>){

}

function greetUser(user:object}){
    console.log(`hello ${user.name} ~~`);
    
}
greetUser({name:'ym',age:30})

let myTuple:[string, number, string]
myTuple = ['hi',5,'hello']
console.log(myTuple);
