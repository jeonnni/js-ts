// const car = {
//     wheels:4,
//     color:'red',
//     drive: function () {
//         console.log("test")
//     }
// }
// console.log(Object.values(car)[0]);
// console.log(typeof Object.keys(car)[0])
// car.drive()

// const test = new Object();
// const test2 = {}
// console.log(typeof test2)
// test2.color = 'red';
// console.log(test2);


// const car = {
//     color:'red',
//     "whee ls":4,
// }
// // console.log(car.whee ls);
// console.log(car['whee ls']);

// const cars = {
//     ferrari:"test",
//     porsche:"911",
//     bugatti:"test2"
// }
// const key = "ferrari"
// console.log(cars[key])

// const cars = {
//     color : "red",
// };
// const secondCar = Object.assign({}, cars);
// cars.wheel = 4;
// console.log(cars);
// console.log(secondCar);
// let myint = 1;
// function sum (val) {
//     return val += 1
// }
// console.log(myint);
// console.log(sum(myint));
// console.log(myint);


// let myCar = {
//     maker: "bmw",
//     color: 'red',
// }
// console.log(myCar)
// function changeColor(car){
//     car.color = 'blue';
//     car.maker = '소나타'
// }
// changeColor(myCar);
// console.log(myCar);


// const greeter = function greet(name){
//     console.log(`hello ${name}`)
// };
// greeter("응미")

// const greeter = (name) => {
//     console.log(`hello ${name}`)
// };
// greeter("응미")

// const myCar = {
//     color : 'red',
//     logColor : function(){
//         return this.color;
//     }
// }
// // myCar.logColor()
// const unboundGetColor = myCar.logColor
// console.log(unboundGetColor() + "1");

// const getColor = unboundGetColor.bind(myCar)
// console.log(getColor() + "2");



// function logThis(){
//     console.log(this);
// }
// logThis()


// call 은 인수의 목록
// function Car(maker, color, num){
//     this.carMaker = maker;
//     this.carColor = color;
//     this.carNum = num;
// }
// function MyCar(marker,color, num){
//     // Car.call(this, marker, color);
//     Car.apply(this, [marker, color, num]);
//     this.age = 5;
// }
// const myNewCar = new MyCar('bmw','red','1');
// console.log(myNewCar.carMaker);
// console.log(myNewCar.carColor);
// console.log(myNewCar.age);
// console.log(myNewCar);
// apply 인수의 배열

// for (let i=0; i<10; i++){
//     var test = `test ${i}`
// }
// console.log(test);

// function test2(){
//     var test3 = "test2"
//     console.log(test3);
// }
// test2()
// console.log(test3);


// for (var i=0;i<10;i++){
//     var leak = "test for"
// }
// console.log(leak + "for문 내부");

// function test(){
//     var leak2 = "test fun";
//     console.log(leak2 + "test 함수 내부");
// }
// test()
// console.log(leak2 + "test 함수 내부 불러오기");

// let x = "global";
// if (x === "global") {
//     let x = "block-scoped";
//     console.log(x);
// }
// console.log(x);


// const a = {
//     name : 'a',
//     age : 25,
// }
// a.age = 26
// console.log(a);
// Object.freeze(a);
// a.age = 30
// console.log(a);
// a.age = 26
// console.log(a);

// console.log(a);
// var a = "a"

// console.log(b);
// let b = "b"

// var a = "test1";
// a = "test2";
// for (let index = 0; index < 2; index++) {
//     var a = "test3"
// }
// console.log(a);

// let value = 1;
// if(true){
//     let value = 2;
//     console.log(value);
// }
// value = 3;

// let a = 100;
// if (a>50){
//     let a = 10;
//     console.log(a);
    
// }
// console.log(a);


// const test = function (name) {
//     return `hello ${name}`
// }

// const test2 = name => `hello ${name}`

// const a = test('a')
// const b = test2('b')
// console.log(b);


// const race = "100m dash";
// const runners = ["Usain Bolt","Justin","Asafa"];

// const results = runners.map((runner,i)=>[{name:runner, race, place:i+1}]);
// console.log(results);

// const person1 = {
//     age:10,
//     grow: function(){
//         this.age++;
//         console.log(this.age)
//     }
// }
// person1.grow()
// const person2 = {
//     age:10,
//     grow: ()=>{
//         this.age++;
//         console.log(this.age)
//     }
// }
// person2.grow()

// function test (){
//     console.log(arguments[0]);
    
// }
// test(1,2,3)


// const show = () => {
//     const winner = arguments[0];
//     console.log(winner);
// }
// show('a','b','c')
// const show = (...args) => {
//     const winner = args[0];
//     console.log(winner);
// }
// show('a','b','c')
// const show2 = function (...args) {
//     const winner = arguments[0];
//     console.log(winner);
// }
// show2('a','b','c')

// const a = {
//     age:10,
//     grow: ()=>{
//         console.log(this.age);
//         this.age++;
        
//     }
// }
// a.grow()
// console.log(a.age);

// const a = (arg) => console.log(arg);
// a('test')


// 함수 인수의 기본값 
// function getLocation(city,country,continent){
//     if(typeof country === 'undefined'){
//         country = 'Italy'
//     } else if (typeof continent === 'undefined'){
//         continent = 'Europe'
//     }
//     console.log(city, country, continent);
    
// }
// getLocation('Milan')
// getLocation('Paris','France')

// function calculate()

// function a({total=0, tax=0.1, tip=0.05,}={}){
//     return total+(total*tax)+(total*tip)
// }
// const bill = a({tip:0.15, total:150});
// console.log(bill);

// function a({total=0, tax=0.1, tip=0.005,}={}){
//     return total + (total*tax) + (total*tip)
// }
// const bill = a();
// console.log(bill);

// function calculatePrice (total,tax,tip){
//     return total + (total*tax) + (total*tip)
// }
// console.log(calculatePrice(10,0.1,0.05));
// function calculatePrice ({total=0,tax=0,tip=0}={}){
//     return total + (total*tax) + (total*tip)
// }
// console.log(calculatePrice({tip:0.05,total:10,tax:0.1,}))

// var b = 3;
// function a (a,b=2){
//     return a* b;
// }
// console.log(a(5))

// var name ="eunmi"
// var greeting =`Hello my name ${name}`
// console.log(greeting);

// var a = 2;
// var b = 5;
// // console.log('1 * 10 is '+(a*b));
// console.log(`${a}*${b}=${(a*b)}`);

// var test ="hello, \
// my name \
// eunmi\ "
// var test =`hello,
// my name
// eunmi`
// console.log(test);

// const people = [{
//     name:'eunmi',
//     age:30,
// },{
//     name:'yong',
//     age:32,
// },{
//     name:'jun',
//     age:3,
// }];

// const markup=`
//     <ul>
//         ${people.map((person)=>`<li>${person.name}</li>`)}
//     </ul>
// `
// console.log(markup);

// const isDiscounted = false
// function getPrice (){
//     console.log(isDiscounted? "$10" : "$20");
    
// }
// getPrice()

// const artist = {
//     name:'eunmi',
//     get:30,
//     // song:'song'
// }
// const text = `
//     <div>
//         <p>
//             ${artist.name} is ${artist.age} years old ${artist.song ? `and wrote the song ${artist.song}` : ''}
//         </p>
//     </div>
// `

// console.log(text);


// const groceries = {
//     meat:'pork chop',
//     veggie:'salad',
//     fruit:'apple',
//     others:['a','b','c','d']
// };
// function groceryList (others){
//     return(
//         `
//             <p>
//                 ${others.map(other=>`<span>${other}</span>`).join('\n')}
//             </p>
//         `
//     )
// }
// const marker = `
//     <div>
//         <p>${groceries.meat}</p>
//         <p>${groceries.veggie}</p>
//         <p>${groceries.fruit}</p>
//         <p>${groceryList(groceries.others)}</p>
//     </div>
// `
// console.log(marker);

// let person = "Alberto"
// let age = 25

// function myTag (strings,personName,personAge){
//     console.log(strings,personName,personAge);
    
//     let str = strings[1];
//     let ageStr;

//     personAge > 50 ? ageStr="grandpa" : ageStr ="youngstr";
//     return personName + str + ageStr
// }
// let sentence = myTag`That ${person} is a ${age}`
// console.log(sentence);

// const str = "this is a short sentence"
// console.log(str.indexOf("a"));


// const str = "this is a short sentence";
// console.log(str.indexOf("is"));
// console.log(str.slice(0,5));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const code = "ABCDEFG";
// console.log(code.startsWith("A"));
// console.log(code.startsWith("DE",2));
// console.log(code.endsWith("def"));
// console.log(code.endsWith("G",7));
// console.log(code.includes("A"));

// const hello = "Hi";
// console.log(hello.repeat(2));

// const str = "Na"
// const bat = "BatMan"
// let batman = `${str.repeat(10)} ${bat}`
// console.log(batman);

// let person = {
//     first:'test1',
//     last:'test2',
// }
// // let first = person.first;
// // let last = person.last;

// let { first, last } = person;
// console.log(first);
// console.log(last);

// const person = {
//     name:'Alberto',
//     last:'Montalesi',
//     links:{
//         social:{
//             facebook:"https://www.facebook.com",
//         },
//         website:"https://albertomontalesi.github.io/",
//     },
// };
// const {facebook: test = "https://www.facebook.com"} = person.links.social
// console.log(test);

// const person = ["jeon","eunmi","30","test"];
// const [firstname,lastname, ...all] = person;

// console.log(firstname);
// console.log(lastname);
// console.log(all);


// let hungry = "yes";
// let full = "no";

// [hungry,full] = [full,hungry]
// console.log(hungry);
// console.log(full);

// let arr = ["one","two","three"];
// [one,two,three] = arr;
// console.log(one);
// console.log(two);
// console.log(three);

// let fruite = ["apple","banana","orange"];
// // for(let i = 0; i < fruite.length;i++){
// //     console.log(fruite[i]);
// // }

// for (const fruit of fruite) {
//     console.log(fruit);
    
// }

// const car = {
//     maker:"BMW",
//     color:"red",
//     year:"2010"
// };

// for(const prop of car){
//     console.log(prop);
// }

// for(const prop in car){
//     console.log(prop, car[prop]);
// }

// let list = [4,5,6];
// for(let i in list){
//     console.log(i);
// }
// for(let i of list){
//     console.log(i);
// }

// let a = ["Tom","AAA","BBB"]
// for(let test of a){
//     console.log(test);
    
// }

// const digits = Array.of(1,2,3,4,5);
// console.log(digits);

// const array = [1,2,3,4,5];
// const found = array.find(e=>e>3)
// console.log(found);

// const greetings = ["hello","hi","byebye","goodbye","hi"];
// let foundIndex = greetings.findIndex(e=>e === "byebye")
// console.log(foundIndex);

// const array = [1,2,3,4,5,6,1,2,3,1];
// let arr1 = array.some(e=>e >=6)
// let arr2 = array.every(e=>e >=6)
// console.log(arr1);
// console.log(arr2);












// const apple = "Apple";
// const myArr = Array.from(apple, e =>{
//     console.log(e);
// });
// console.log(myArr);


// const arr = [1,2,3,4,5,6,1,2,3,1]
// let arraySome=arr.some(e=>e>2)
// console.log(arraySome);

// console.log(Array.from([1,2,3], x=>x*x));


// const veggie = ["tomato","cucumber","beans"]
// const meat = ["pork","beef","chicken"]

// const menu = [...veggie, "pasta", ...meat]
// console.log(menu);

// const newVeggie = veggie
// newVeggie.push("test")
// console.log(veggie);
// console.log(newVeggie);

// const newVeggie = [].concat(veggie);
// veggie.push("a")
// console.log(newVeggie);
// console.log(veggie);

// const newVeggie = [...veggie]
// veggie.push("a")
// console.log(newVeggie);
// console.log(veggie);


// const veggie = ["tomato","cucumber","beans"]
// // const meat = ["pork","beef","chicken"]

// // const menu = [...veggie, "pasta", ...meat]
// // console.log(menu);

// const newVeggie = veggie
// newVeggie.push("test")

// console.log(veggie); // [ 'tomato', 'cucumber', 'beans', 'test' ]
// console.log(newVeggie); // [ 'tomato', 'cucumber', 'beans', 'test' ]


// function a (x,y,z){
//     console.log(x+y+z);  
// };
// let args = [0,1,2];
// a(...args)

// const name = ["Alberto","Montalesi"]
// function greet (first,last){
//     console.log(`Hello ${first} ${last}`);
    
// }
// greet(...name)

// let person = {
//     name:'eunmi',
//     surname:'j',
//     age:30,
// }
// let clone = {...person}
// console.log(person);
// console.log(clone);

// const a = ["a","b","c","d","e"]
// const [first,last, ...all] = a;
// console.log(first);
// console.log(last);
// console.log(...all);

// const veggie = ["tomato","cucumber","beans"]
// const meat = ["pork","beef","chicken"]
// const menu = [...veggie, "pasta", ...meat]
// console.log(menu);

// const runners = ["Tom","Paul","Mark","Luke"]
// const [a,b,...runner] = runners
// console.log(runner);

// const a = "test"
// const b = {
//     [a]:"ing"
// }
// // b[a] = "ing"
// console.log(b);



// const name = "eunmi";
// const age = 30;
// const favoriteColot ="Green";
// const person = {
//     name,
//     age,
//     color,
// }
// console.log(person.color);

// const me = Symbol("Eunmi")
// console.log(me);


// const clone = Symbol("Eunmi")
// console.log(clone);
// console.log( me === clone);

// const office = {
//     "Tom":"CEO",
//     "Mark":"CTO",
//     "Mark":"CIO",
// };
// for (person in office){
//     console.log(person);
// }

// const office = {
//     [Symbol("Tom")]:"CEO",
//     [Symbol("Mark")]:"CTO",
//     [Symbol("Mark")]:"CIO",
// };
// const symbols = Object.getOwnPropertySymbols(office)
// const value = symbols.map(symbol => office[symbol])
// for (person in symbols){
//     console.log(person);
// }
// console.log(value);

// const a = {
//     [Symbol("Tom")]:'a',
//     [Symbol("Jim")]:'b',
//     [Symbol("Tom")]:'c',
// }
// const symbols = Object.getOwnPropertySymbols(a)
// console.log(symbols);



// function Person (name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.greet = function(){
//     console.log(`hello, my name is ${this.name}`);
// }
// const mi = new Person("eunmi",30)
// const yong = new Person("yong",32)

// mi.greet()
// yong.greet()


// // class
// class Person {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     static info(){
//         console.log(`Hi my name is ${this.name} and I'm ${this.age} yearsold`);
//     }
//     greet(){
//         console.log(`Hi my name is ${this.name} and I'm ${this.age} yearsold`);
//     }
//     farewell(){
//         console.log(`good`);
//     }
// }
// const eunmi = new Person("Eunmi",30);
// const yong = new Person("Yong",32)
// console.log(eunmi);
// console.log(yong);
// yong.greet()
// eunmi.farewell()
// Person.info()



// class Person {
//     constructor(name,surname){
//         this.name = name;
//         this.surname = surname;
//         this.nickname = "";
//     }
//     greet(){
//         console.log(`${this.name} ${this.surname} ~~!!`);
        
//     }
//     set nicknames(value){
//         this.nickname = value;
//         console.log(`setter : ${this.nickname}`);
//         console.log(value);
//     }
//     get nicknames(){
//         console.log(`getter : ${this.nickname}`);
//     }
// }
// const alberto = new Person("Alberto","Montalesi")
// alberto.nicknames = "Albi"
// alberto.nicknames;


// class Adult extends Person {
//     constructor(name,surname,age){
//         super(name,surname)
//         // this.name = name;
//         // this.surname = surname;
//         this.age = age;
//     }
// }
// const albertos = new Adult("ym","em",30)
// alberto.greet()


// class Classroom extends Array {
//     constructor(name, ...students){
//         super(...students);
//         this.name = name;
//     }
//     add(students){
//         this.push(students);
//     }
// }
// const myClass = new Classroom ('1A',
//     {name: "Tim", mark:6},
//     {name: "Tom", mark:3},
//     {name: "Jim", mark:8},
//     {name: "Jon", mark:10},
// );
// myClass.add({name:'eunmi',mark:3})
// // console.log(myClass[4]);

// for(student of myClass){
//     console.log(student);
    
// }

// class Test {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Test2 extends Test {
//     constructor(work){
//         this.work = work;
//     }
// }
// const my = Test2


// 기존 생성자 만드는 법
// function Car (model){
//     this.model = model
// }
// Car.prototype.drive = function(){
//     console.log(this.model);
// }
// const bmw = new Car("BMW")
// bmw.drive()

// class Car{
//     constructor(model, price){
//         this.model = model;
//         this.price = price;
//         this.color = "";
//     }
//     set colors(value){
//         this.color = value;
//     }
//     get colors(){
//         console.log(this.color);
//     }
//     eunmi(){
//         console.log(`test ${this.model} ${this.price}`);
//     }
// }
// const bmw = new Car("BMW","red")
// bmw.colors = "red";
// bmw.colors;

// class Bmw extends Car{
//     constructor(model, price, test){
//         super(model,price)
//         this.test = test;
//     }
// }
// const suv = new Bmw("suv","white",1)
// console.log(suv);
// suv.eunmi()



// class Classroom extends Array{
//     constructor(name, ...students){
//         super(...students);
//         this.name = name;
//     }
//     add(student){
//         this.push(student)
//     }
// }
// const myClass = new Classroom('1A',
//     {name:"Tim",mark:6},
//     {name:"Tom",mark:3},
//     {name:"Jim",mark:8},
//     {name:"Jon",mark:10},
// );
// myClass.add({ name:"eunmi",mark:7})
// for(student of myClass){
//     console.log(student);
// }


// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hi ${this.name} and ${this.age}`);
        
//     }
// }
// class Adult extends Person{
//     constructor(name,age,work){
//         super(name,age)
//         this.work = work
//     }
// }

// const my = new Adult('Alberto',27,'tset test');
// console.log(my.work);



// const data = fetch('https://jsonplaceholder.typicode.com/todos/1');
// console.log('Finished');
// console.log(data); 

// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject(new Error("에러입니닷."))
//     },3000)
// });
// myPromise
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error=> {
//         console.log(error);
//     })

// const myPromise = new Promise((resolve,reject)=>{
//     resolve();
// });
// myPromise
//     .then(data=>{
//         return 'working...'
//     })
//     .then(data=>{
//         console.log(data);
//         throw 'failed!'
//     })
//     .catch(err=>{
//         console.error(err)
//     })

// 실패할 경우 연속적 
// myPromise
//     .then(data=>{
//         throw new Error("ooops")
//         console.log("first value");
//     })
//     .catch(()=>{
//         console.log("error")
//     })
//     .then(data=>{
//         console.log("second value");
//     })


// Promise.resolve('Success').then(function(value){
//     console.log('Success');
    
// }, function(value){
//     console.log('fall');
    
// });

// Promise.reject(new Error('fall')).then(function(){

// }, function(error){
//     console.log(error);
// })

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,500,'first value')
// })
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000, 'second value')
// })
// promise1
//     .then(data=>{
//         console.log(data);
        
//     })

// promise2
//     .then(data=>{
//         console.log(data);
        
//     })
// Promise
//     .all([promise1,promise2])
//     .then(data=>{
//         const [promise1data, promise2data] = data;
//         console.log(promise1data, promise2data);
        
        
//     })


// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,500,'첫 번째 성공')
// })
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'두 번째 성공')
// })
// promise1.then(data=>{
//     console.log(data);
// })
// promise2.then(data=>{
//     console.log(data);
    
// })
// Promise
//     .all([promise1,promise2])
//     .then(data=>{
//         const[promise1,promise2] = data
//         console.log(promise1, promise2);
//     })

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,500,'first')
// });
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,100,'second');
// });
// // Promise
// //     .all([promise1,promise2])
// //     .then(data=>{
// //         const [promise1data,promise2data] = data;
// //         console.log(promise1data,promise2data);
// //     })
// //     .catch(err=>{
// //         console.log(err);
// //     })
// Promise
//     .race([promise1,promise2])
//     .then(function(value){
//         console.log(value);
        
//     })


// const promise1 = new Promise((resolve,reject)=>{
//     resolve('성공인데요?')
// })
// promise1
//     .then(data=>{
//         console.log(data);
//     })

// function my(){
//     return new Promise((resolve,reject)=>{
//         reject()
//     })
// }
// my()
//     .then(()=>{
//         console.log(1);
//     })
//     .then(()=>{
//         console.log(2);
//     })
//     .catch(()=>{
//         console.log(3);
//     })
//     .then(()=>{
//         console.log(4);
//     })
    

// function* test(){
//     yield 'banana';
//     yield 'tomato';
//     yield 'orange';
// }

// const test2 = test()
// console.log(test2.next());
// console.log(test2.next());
// console.log(test2.next());
// console.log(test2.next());


// const fruitList = ["Banana","Apple","Melon","Cherry"];

// function* loop(arr){
//     for(const list of arr){
//         yield `과일가게 입니다 : ${list}`
//     }
// }
// const generator = loop(fruitList)
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next().done);
// console.log(generator.next().value);

// function* fruitList(){
//     yield 'Banana';
//     yield 'Apple';
//     yield 'Cherry';
// }
// const list = fruitList()
// console.log(list.return());

// function* gen(){
//     try{
//         yield "Try..."
//         yield "Try....."
//         yield "Try......."
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// const my = gen();
// console.log(my.next());
// console.log(my.next());
// console.log(my.throw("ooops"));

// const myPromise = () => new Promise((resolve)=>{
//     resolve("our value is...")
// })
// function* gen(){
//     let result = "";
//     yield myPromise().then(data=>{result=data}) 
//     yield result+' 2'
// }

// const fun = gen() 
// const val = fun.next(); 
// console.log(val);

// val.value
//     .then(()=>{
//     console.log(fun.next());
//     })


// function* fruitsList (){
//     yield 'Banana'
//     yield 'Apple'
//     yield 'Pomelo'
//     yield 'Mango'
//     yield 'Orange'
// }
// const fruits = fruitsList()
// console.log(fruits.return());

// const dog = {breed:"German Shephard", age:5}
// const dogProxy = new Proxy(dog, {
//     get(target,breed){
//         return target[breed].toUpperCase()
//     },
//     set(target,breed,value){
//         console.log("test..");
//         target[breed] = value
        
//     }
// })
// console.log(dogProxy.breed);
// console.log(dogProxy.breed = "Labrador");
// console.log(dogProxy.breed);

// const family = new Set();
// family.add("Dad")
// family.add("Mom")
// family.add("Son")
// family.add("Son")

// const iterator = family.values();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (const a of family){
//     console.log(a);
// }

// const myArr = ["a","b","c","d","e",'e','e']
// const set = new Set(myArr)
// console.log(set);

// const uniqueArr = Array.from(set)
// console.log(uniqueArr);

// const uniqueArr2 = Array.from(new Set(myArr))
// console.log(uniqueArr2);


// let dad = {name:'Daddy', age:50}
// let mom = {name:'Mummy', age:45}
// const family = new WeakSet([dad,mom])
// // console.log(family);
// // for(const list of family){
// //     console.log(list);
// // }

// dad = null;
// console.log(mom);
// console.log(dad);


// const family = new Map();
// family.set("Dad",40)
// family.set("Mom",50)
// family.set("Son",20)
// console.log(family);
// console.log(family.size);
// family.forEach((val,key)=>{
//     console.log(key,val);
// })
// //첫 번째 인자가 값(value), 두 번째 인자가 키(key)

// for(const [key,val] of family){
//     console.log(key,val);
// }

// let dad = {name:"Daddy"}
// let mom = {name:"Mommy"}
// const myMap = new Map()
// const myWeakMap = new WeakMap()
// console.log(myMap);
// console.log(myWeakMap);

// myMap.set(dad,"test")
// myWeakMap.set(mom,"test")

// dad = null;
// mom = null;

// console.log(myMap);
// console.log(myWeakMap);

// console.log(myMap);
// console.log(myWeakMap);

// let arr = [1,2,3,4]
// console.log(arr.includes(1,0)); //true
// console.log(arr.includes(1,1)); //false
// console.log(arr.includes(4,-1)); //true
// console.log(arr.includes(2,-3)); //true

// console.log(Math.pow(Math.pow(2,2),2));
// console.log(2**2 **2);



// const arr = [1,3,5,7,9,11]
// console.log(arr.includes(5,4));

// console.log(Math.pow(Math.pow(2,2),2));
// console.log(2**2**2);

// console.log("hello".padStart(6));
// console.log("hello".padEnd(6));

// const str = ["short","medium length","very long string"]
// // const longestString = str.sort(str=>str.length).map(str=>str.length)[0]
// const longestString = str.sort((a, b) => b.length - a.length)[0].length;

// // console.log(longestString);
// str.forEach(str=>console.log(str.padStart(longestString)));


// console.log("hello".padEnd(13, "tests"));
// console.log("1".padEnd(2, "2"));

// const family = {
//     father:"Jonatan Kent",
//     mother:"Martha Kent",
//     son:"Clak Kent",
// }
// console.log(family);
// console.log(Object.keys(family));
// console.log(Object.values(family));
// console.log(Object.entries(family));


// const obj = {
//     name:'eunmi',
//     age:30,
//     greet(){
//         console.log("hello");
//     }
// }
// console.log(Object.getOwnPropertyDescriptors(obj));

// console.log("hello".padStart(6));

// const arr= ["a","aa","aaa"]
// const arr2 = arr.sort((a,b)=>b-a)
// console.log(arr2);


// fetch('http://api.github.com/users/AlbertoMontalesi')
// .then(res=>{
//     return res.json()
// }).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// function walk (amount){
//     return new Promise((resolve,reject)=>{
//         if(amount > 500){
//             reject ("500보다 작음")
//         }
//         setTimeout(()=>resolve(`500보다 큼 ${amount}`),amount)
//     })
// }
// walk(1000).then(res=>{
//     console.log(res)
//     return walk(500)
// }).then(res=>{
//     console.log(res);
//     return walk(700)
// }).then(res=>{
//     console.log(res);
//     return walk(800)
// }).then(res=>{
//     console.log(res);
//     return walk(100)
// }).then(res=>{
//     console.log(res);
//     return walk(400)
// }).then(res=>{
//     console.log(res);
//     return walk(600)
// })
// async function go(){
//     const res = await walk(500);
//     console.log(res);
//     const res2 = await walk(300);
//     console.log(res2);
//     const res3 = await walk(200);
//     console.log(res3);
//     const res4 = await walk(700);
//     console.log(res4);
//     const res5 = await walk(400);
//     console.log(res5);
//     console.log("finished");
// }
// go()


// async function fun(){
//     try{
//         let response = await fetch('your-url')
//     }catch(err){
//         console.log(err);
//     }
// }
// fun()

// function fun(){
//     let pro = Promise(1)
//     let re = await pro
// }
// fun()

// const veggie = ["tomato","cucumber","beans"]
// const meat = ["pork","beef","chicken"]
// const menu = [...veggie,'pasta',...meat]
// console.log(menu);

// 레스트 연산자를 사용하며 a,b를 제외한 나머지 속성을 변수 z에 할당 
// let myObj = {
//     a:1,
//     b:3,
//     c:5,
//     d:8,
// }
// let {a,b, ...z} = myObj
// console.log(a);
// console.log(b);
// console.log(z);

// 스프레드 연산자를 사용하여 myObj 의 복사본 생성
// let clone = {...myObj}
// console.log(clone);
// myObj.e = 10
// console.log(clone);
// console.log(myObj);



// const test =[1,2,3]
// function arr (){
//     for (const e of test){
//         console.log(e);
//     }
// }
// arr()

// const eunmi = [1,2,3]
// async function yong(){
//     for await(const a of eunmi){
//         console.log(a);
//     }
// } 
// yong()

// const myPromise = new Promise((resolve,reject)=>{
//     resolve();
// })
// myPromise
//     .then(()=>{
//         console.log('still working');
//         return 'still working?'
//     })
//     // .catch(()=>{
//     //     console.log('there was an error');
//     // })
//     .finally(()=>{
//         console.log('Done');
//         return 'Done'
//     })
//     .then(res=>{
//         console.log(res);
//     })

// console.log(/foo.bar/s.test('foo/nbar'));

// const test = new Promise((resolve,reject)=>{
//     resolve()
// });

// test
//     .then(()=>{
//         return '1'
//     })
//     .finally(()=>{
//         return '2'
//     })
//     .then(res=>{
//         console.log(res);
        
//     })

// const greeting = ['greeting from',' ','vietnam']
// const result= greeting.map(x=>x.split(' '))
// console.log(result);



// const keyVal = [
//     ['key1','val1'],
//     ['key2','val2'],
// ]
// console.log(keyVal);
// const obj = Object.fromEntries(keyVal)
// console.log(obj);


// let str = ' test'
// console.log(str.length);
// let result = str.trim()
// console.log(result.length);

// function sum (a,b){
//     // test
//     return a+b
// }
// console.log(sum.toString());

// const me = Symbol("Test")
// console.log(me.description);
// console.log(me.toString());


// const letters = ['a','b',['c','d',['e','f']]];
// console.log(letters.flat().flat());
// console.log(letters.flat(Infinity));


// const key = [
//     ['key1','val1'],
//     ['key2','val2'],
// ]
// console.log(key);
// console.log(Object.fromEntries(key));


// let bigint = BigInt(99999999999999)
// console.log(bigint);

// let bigintN = 99999999999999n
// bigintN += 1n;
// console.log(bigintN);

// const user1 = {
//     name:'eunmi',
//     age:30,
//     work: {
//         title:'tsets',
//         // location:'test2'
//     } 
// }
// let result = user1?.work?.location ? user1?.work?.location : user1?.work?.title;
// console.log(result);


// const user2 = {
//     name:'yong',
//     age:32,
// }

// let a;
// if(user1.work){
//     a = user1.work.title    
// }
// // console.log(a);

// const b = user1.work ?.title;
// const c = user2.work ?.name;
// console.log(c);


// const arrPromise = [
//     new Promise((res,rej)=>{res(1000)}),
//     new Promise((res,rej)=>{rej(1000)}),
//     new Promise((res,rej)=>{res(1000)}),
// ]
// Promise.allSettled(arrPromise)
//     .then(data=>{
//         console.log(data);
//     })

    

// let str = ''
// console.log(!!str);

// str = 0
// console.log(!!str);

// str = null
// console.log(!!str);

// str = undefined
// console.log(!!str);


// const x = '' ?? '~~ enpty string';
// console.log(x);

// const num = 0 ?? '~~ zero';
// console.log(num);

// const n = null ?? '~~ null';
// console.log(n);

// const u = undefined ?? '~~ undefined';
// console.log(u);


// let big = 9999999999999;
// console.log(big+1n);
