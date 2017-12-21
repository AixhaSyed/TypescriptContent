// var a: string ="hello world"
// console.log("a")
// var a:any ;
// a= "aisha"
// console.log("a");
// let myType={
//    name: "Aisha", id: 1
// }
// myType={ id: 2 , name: "nida"
// }
// console.log(myType)
// myType={
//     name:"aisha", age: 18, id: 1
// }
//step # 1 strong typing
// var a:string ="aisha"
// var b:number = 45
// var c:boolean =true
// var g=true
// g=false
//step # 2 const let 
// const j = "Aixha";
// console.log(j)  
// if (true){
// let n = "Aisha "}
//  else {
//      let n  :number
//  }
//step # 4 array type 
// let array1 : number[] = [1,2,3,4]  
// console.log(array1)   
//    let array2 : string[] = ["aisha", "saba", "sehar"]
//    console.log(array2[2])  
//    let array3 :any[] = ["aisha", "nida", 3 , 8 , true ]
//    console.log(array3[2])
//   let array4 = []
//   console.log(array4[0])
// let array5 : number[] = [] 
// array5.push(2345)
// console.log(array5)         //ye code undefinned q arha h???
//step # 5  any type 
//  let myType : any= { name: "aisha" , age : 20}
//  myType = {name : "aisha", age : 20, gender: "female"}
//  myType = { name : "nida" , gender : "female ", id : 2}
//  console.log(myType)                
//step # 6 Explict casting
//  let myName = <any> {name: "aisha" , age : 20} 
//  myName = {id : 4, aim : "progrmmer"}
//  console.log(myName)    //is case me dono values ane chahye na to phr hmare pax aik neche wale ke he value q arhe h?
//  let myType = {name: "aisha", age : 4} as any
//  myType = {id : 2, subject : "maths"}
//  console.log(myType)
//step # 7   Enum
//     enum color { red , green , blue}
//     let c:color = color.blue
//     console.log(color)   
//     enum color1 {yellow=3 , purple , pink}
//     let colorName=color1[3]
//     console.log(color1)  
//    enum color2 {pink=4 , blue=7 , brown}
//    let colorIndex =color["blue"] //isme hume blue ka index 2 q ml rha h??
//    let colortype=color2[2]
// //    console.log(colorIndex) 
//     enum color {red , blue , yellow}
//     console.log(color)
//     enum color1 {pink , purple, blue}
//     let colorName: string=color1[2]
//     console.log(colorName)
//     enum color2 {pink , brown=5 ,yellow}
//     let colorIndex:string= color2[6]   
//     console.log(colorIndex) 
//step # 8   const Enum
//  const enum color {red , blue , yellow}
//  let colorIndex = color["blue"]
//  console.log(colorIndex)
//  const enum color1{ peach=1 , pink , red=5}
//  let colorName = color1["pink"]
//  console.log(colorName)
//          //step # 9  function
//     let add = function merged(a:number=9, b : number=10) {
//         return a+ b
//     }
//     console.log(add)//named function
//   let add1= function(a:number, b :number){
//       return a+b 
//   }      
//   console.log(add1)  //anoyous function let sub = function(a :number , b : number){return a - b }
//  let add2:( a : number , n : number)=>number = function(a:number, b :number){
//       return a+b 
//   }      
//   console.log(add2) 
// let add1: (a : number , b : number )=>number = function(a : number , b : number ){return a + b }
// let add3: (baseNumber:number , increment : number) => number = function chnges(x:number, y:number) { 
//     return x+y
// }
// console.log(add3)
// let add4 =(a:number=5 , b : number=9)=> a+b
// console.log(add4)//lambda function
//step # 10 optional parameters
//  var Identification=  function name1(firstname:string="aisha" , lastName?: string):string {
//        if (lastName)
//        return firstname +  " " + lastName
//       else
//       return firstname
//    }      
// console.log(Identification())
// var persnality=function(color:string="fair", height?:number=4.5) {
//     if (height)
//     return color + " " + height 
//     else 
//     return color
// }
//  console.log(persnality())
//step # 11 
//   var theDress = function(stuff:string= "linean", color : string ="black") :string 
//    {if (color)
//       return "you are in "+ color + "dress"
//       else 
//       return stuff
//   }       
//   console.log(theDress())
//    let getName= function addressed(firstName:string= "hira" , lastName = "syed"): string {
//        if (lastName)
//        return firstName + " " + lastName
//        else 
//        return firstName
//    }
//    console.log(getName()); 
// var pehchan : (firstName: string, lastname? : string ) => string =
// function(firstName : string , lastname : "khan") : string {
//     if  (lastname)
//      return firstName + " " + lastname
//      else
//      return (lastname)
// }
// console.log(pehchan()) //asked by sir
// var buildName1 : (firstName: string, lastName?: string) => string = 
// function(firstName: string, lastName = "Khan") : string {
//     if (lastName){
//         return firstName + " " + lastName;}
//     else
//     {
//         return firstName;}
// } 
// console.log(buildName1);
//step # 12 (reset parameters)
//    var hello = function buildName1 (name :string= "hira" , ...restOfName : string[]){return name  + restOfName.join("");}
//  var employeeName = hello ("aisha " , "nida ", "urooj");
//  console.log(hello());
// step # 13 
//       var add =(a : number=223 , b : number=123  )=> {
//           return a+b
//       }    
//       console.log(add ())
//var add = (a:number , b :number )=> {
//return a + b }
//     var subract =( x : number=19, y : number=34 )=> (x-y)
//     console.log(subract())
//    var myfunction= f => {this.x="x"}
//    console.log(myfunction)
//step # 14
var anotherFunction = function callback(test) {
    if (test === void 0) { test = "hey it's Aisha"; }
    console.log("here it is inside my call back:" + " " + test);
};
// console.log(anotherFunction())/
//step # 15
//   function add (name:string  , name1 : string) : string ; 
//   function add (name:number  , name1:number ): number ;
// //  function add(name2:boolean= true) : boolean; 
// //  function add(name:any) :any; 
// {
//      return  name  + name1 ;
//  }
//    console.log(add ())
//    function add(arg1: string, arg2: string): string;
//    function add(arg1:number,arg2:number) : number;
//  {
//      return arg1 + arg2
//  }
//  console.log(add("hello", "world"))
//  console.log(add(1,5))
//step 18         
//   var tuple : [number , string]  = [1, "aisha"]
//   var secondMember = tuple[0]
//   console.log(secondMember)
//   var tuple  : [number, string , any]= [1, "aisha", true ]
//   var anotherNum = tuple[2]
//   console.log (anotherNum)
//step # 17
//    type stringnumberorboolean = number | string | boolean 
//        var add = function allow(x:string | number = 18, y :number = 20) {
//            return x = x
//        }    
//        console.log(add ())
//  var type = type ,PrimitiveArray : Array<string|number|boolean> ;  {
//     //      "aisha ","rida ", 2 , true
//     //  } 
//     //  console.log(type[0])
//     var hello =  function callback(text:string = "hello world ") {
//          return ("this is my callback" + " " + text)
//      }
//      console.log(hello())
//      var g = true 
//      g= false
//      console.log(g)
//      let num= <any>  4
//      num = "hello"
//      console.log(num)
//      enum color {red , blue , green }
//      var c : color= color.blue 
//       enum color1 {pink ,purple }
//       var colorName: string = color1[1]
//       var colorIndex :number = color1["pink"]
//       const enum color4{yellow, blue }
//       var colorIndex3 : number = color4["blue"]
//       var a :(x:string , y:string)=>string = function (a:string, b :string): string {
//           return a=b}
//           var D = (x :string , y : string= "hello" ) => (x+y)
//           var num1 : (x :string , y? :string) => string =
//            function(x :string , y ="Abdul hadi "): string 
//             {if (y)
//                 return x+y 
//                 else 
//                 return y 
//           }
//           console.log(num1("arham "))
//           var hello2 : (y :string, z? : string)=>string =
//           function (y :string , z = "aisha ") :string{ if 
//               (z)
//               return y + z
//               else 
//               return y 
//           }
//            console.log(hello2("aisha "))
//         function names(firstName:string= "nida" , ...otherName:string[] ) 
//       {return firstName + " " + otherName.join(" ")}
//         var adding = names ("aisha", "saba", "tooba")
//         console.log(adding)
// var add1 =(x:number = 19 , y: number = 24)=> { return x+y}
// console .log(add1())
// var add2 = ( a : number = 19 , b : number = 34 )=> (a+b)
// console.log(add2())
//   var hello6 = function callback(test:string = "hello its my call back ", other: (test:string ) => void  ) {
//       return  console.log ("hie " + " " + callback) 
//    }        
//    console.log(hello
//    function add4(arg : number , arg2 :number): number ;
//    function add4(arg: string , arg2 : string ): string ;
//     {
//        return arg + arg2
//    }
//    console.log(add4(4,3));
//    console.log(add4("nida", "aisha "));
//    function add9(arg1: string, arg2: string): string;//option 1
// function add9(arg1: number, arg2: number): number;//option 2
// function add9(arg1: boolean, arg2: boolean): boolean;//option 3
// function add9(arg1: any, arg2: any): any //this is not part of the overload list, so it has only three overloads
//    { return arg1 + arg2 }
//     console.log(add9("irqa", "yasemn"));
//     console.log(add9(5 , 9));
//     console.log(add9(true  ,false));
//     var hello =function hiwe(arg1:number | string | boolean , arg2 :number | string | boolean) : number | string | boolean{
//        if (typeof arg1==="string"){
//        return arg1 + "is string "
//     }}
//            console.log(hello())
//       let hie = function same(z:number | number[] ) {if ( typeof z=== "number") {
//           return z + 18;}
//           else 
//       }
//   console.log(hie )
//  var many= function addWithUnion(arg1: string | number | boolean, arg2: string | number | boolean): string | number | boolean {
//     if (typeof arg1 === "string") {///This is known as a type guard and means that the type of x will be treated as a string within the if statement block
//         // arg1 is treated as a string here
//         return arg1 + "is a string";
//     }
//     if (typeof arg1 === "number") {
//         // arg1 is treated as a number here
//         return arg1 + 10;
//     }
//     if (typeof arg1 === "boolean") {
//         // arg1 is treated as a boolean here
//         return arg1 && false;
//     }
// }
// console.log(many())
// class Dog { woof() { } }
// class Cat { meow() { } }
// var pet: Dog|Cat = new Dog();
// if(pet instanceof Dog) {//this is also a type guard
//    pet.woof(); // OK
// } else {
//    pet. (); // Error
// }
//  class duck {quick(){ }}
//  class hen {quark(){ }}
//  var pet2 : duck|hen =new hen();
//  if (pet2 instanceof hen){
//      pet2.quark();
//  }else{
//      pet2 .quick ();
//  }
//      console.log(pet2)
//      class sparrow{chee() { }}
//      class pengoen {lee() {}}
//      var bird : sparrow| pengoen= new sparrow();
//      if (bird instanceof sparrow){
//          bird.chee
//      }
//          else{
//              bird.lee
//          }     
