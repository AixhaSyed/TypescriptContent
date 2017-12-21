// let aisha=  class man {
//     name: string ;
//     constructor(name:string){
//         this.name="Aisha";
//     }
//     eat(){console.log(this.name + " " + "is a animal who is Eating")
// }
// }


    class Animal {
    private name:string;
    constructor(theName: string) { this.name = theName; }
    move(meters: number) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

// var a = new Animal("cat").name;
// console.log(a);


// class human {
//     private name: string ;
//     constructor(theName :string){
//         this.name = theName;
//     }
//     alert(this.name + " " + "is a animal");

// }


   class Human {
    private name: string="Aisha";
    
    constructor(name: string){
        this.name = name;
    }
    eat(){
    console.log( this.name  + " is a Human and is eating");}
  }

  class animal {
      private name :string ;
      constructor(name:string){
          this.name=name

      }
      eat(){
          console.log(this.name + "is an animal and is eating")
      }
  }


  class robot {
      private name :string ;
      constructor(name:string){
          this.name=name;
      }
  }
  let h: Human = new Human ("Aisha");
  let a:Animal = new Animal ("dog");
  let r :robot = new robot ("chitti");
//   let r0 :robot = new Animal ("cat")//
let h2=h

  console.log(r);



  class bigAnimal {
      private name: string 
      constructor (name:string){
          this.name =name ;
      }
      
  }

  class cat extends bigAnimal {
    constructor (){super("cat"); }
  }



class servent {
    private name :string 
    constructor (name:string){
        this.name=name ;
    }
}

let b :bigAnimal = new bigAnimal ("lion");
let c :cat = new cat ();  //isme agr value dal dnge too error aega q k ye extend class h
let s : servent =new servent ("nabeel")
b=c  //extend class h tuu is lyn ye allow karega 
// b=s  //extend class nh h thtx why ye allow nh kare ga 

 

            //step # 23 (class-protected-modifier)

 //protected keyword allows subclasses to gain visibility into the parent class without exposing this API to other parts of the code.           


   class list {
       private content :string[]
       constructor (){
           this.content = ["aisha" , "hira"]
       }
   
   protected setElement (index:number=4 , name:string="Aisha"){
      this.content[index] ="Aisha"           //this class is not shown ass its portected nd only shown in subclasses

   }
   }
   class stack extends list{
       currentIndex:number;
       constructor()
       {super()
           this.currentIndex=9;
       }
       
       public push(item:string){
           this.setElement(this.currentIndex,item)
           this.currentIndex++;
       }
   }
   var hahah =new stack() ;
   console.log(hahah);



            //  step # 24 (accessor)//


//TypeScript supports getters/setters as a way of intercepting accesses to a member of an object, thus allowing Encapsulation
//This gives you a way of having finer-grained control over how a member is accessed on each object.

//Encapsulation is the packing of data and functions into a single component. 
//It allows selective hiding of properties and methods in an object by building an impenetrable wall to protect the code
// from accidental corruption.

//Note getters and setters are only supported when targeting ES 5 or higher 



    var passcode ="secret passcode"   
    class Employee {
        private _fullName:string ;
        get fullName():string{
           return "MR"+ this._fullName }
        set fullName(newName:string){
            if (passcode == "secret passcode")
            {
                this._fullName = newName;
            }
            else{
                console.log("Error!")
            }
        }
    }
    var employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
    console.log(employee.fullName);
}

    // console.log(passcode)


    //step # 2 as we want to access modifier than we should apply same access modifier on getter nd setter 

class human {
    private _fullName:string ;
    protected get fullName() :string{
        return this._fullName;

    }
    protected set fullName(newName:string){
        if (passcode && passcode == "secretpasscode"){
            this._fullName=newName

        }
        else{
            console.log("Error!");
        }
    }
}

var employee =new Employee();
employee.fullName="aisha";
if (employee.fullName){
    console.log(employee.fullName);
}


    
                         //step # 25 (static proporties)


//Please note that in each instance accesses this static value through prepending the name of the class. 
//Similarly to prepending 'this.' in front of instance accesses, here we prepend 'Grid.' in front of static accesses.


class Employee1{
    name:string;
    static incomeTax:number= 30 ;

}
var e =new Employee1()
Employee1.incomeTax= 40;
console.log(Employee1.incomeTax)


//we can also have static methods


                       //step # 26(interfaces)


 //One of TypeScript's core principles is that type-checking focuses on the 'shape' that values have. 
//This is sometimes called "duck typing" or "structural subtyping". 
//In TypeScript, interfaces fill the role of naming these types

                //new objects

 function name1(labelledobj: {label :string }){
    console.log(labelledobj.label + "is a label")

}                      

name1({label :"aisha"})  //its ok as its new object
// name1({mylabel: "Aisha"})   //gives error becaues itx a new object nd it doex exist rename proporty


function nameX ({x:string}:any){
    console.log(arguments[0])
    
}

nameX ({arguments : "Aisha"})
nameX ({name : "nida"})    //name matched by index signature



// name1({label :"one" size : "10th"})   //as it a fresh object soo it doesnt allow extra proporties 


             //stale objects

 var new2 = {label: "aisha " , name : "aisha" }
 name1(new2);                //it doesnt give any error as it contain same proporties while if w chnge label by name dn its give an error 



 var new3 = {name :"aisha", size : "30" }
 nameX (new3);             // its gives error as it doesnt give the proporty 

   //Rules of Ducktyping :

//fresh with less properties = error
//fresh with access propertise = error
//stale with less properties = error
//stale with access properties = correct

  
              //step # 27(interface optional proporties)

 //The advantage of optional properties is that you can describe these possibly available properties
//while still also catching properties that you know are not expected to be available. 


interface name4 {
    name? : string;
    size? : number;

}             
function create(config : name4): {name:string  ; age : number ;size : number } {
    var new6 = {name : "Aisha" , age : 12, size : 39 }
    if (config.name){ 
        new6.name = config.name
    }
    if (config.size){
        new6.age = config.size * config.size;
    }

    return new6 ;
}
var new7 = create({name:"saba"})
console.log(new7.age);



                 //step # 28 (interfaces functional types)

//We can use interfaces to describe function types, please note this is different from Java or C# 
//where we can only use interfaces to describe class types.

//We are defining a interface with a single function, any function with the same signature will have this type 


interface searchfunc{
    (FirstName :string , lastName:string):boolean;

}
var mySearch: searchfunc = function(fS: string="Aisha" , lS :string= "Akber" ){
    var result = fS.search(lS);
    if (result == 1){          //ye result hmexha num hoga ne too error aega 
        return false;

    }
    else{
    return true;
    }
}
console.log(mySearch);

//For function types to correctly type-check, the name of the parameters do not need to match. 
//Function parameters are checked one at a time, with the type in each corresponding parameter position checked against each other. 


                            //step # 28 (interface-array type)

//We can use interfaces to describe an array also, please note this is different from Java or C# 
//where we can only use interfaces to describe class types.


interface stringArr {
    [index:number]:string
    length:number
}
var newArr:stringArr =["Aisha", "Nida"]
var first = newArr[0]
console.log(first);

//Array types have an 'index' type that describes the types allowed to index the object, 
//along with the corresponding return type for accessing the index.

//There are two types of supported index types: string and number.
//Index signatures are a powerful way to describe the array and 'dictionary' pattern
//array pattern is demonstrated above, dictinary is as follows:

interface lib {
    [index :string ]: string
    lenght :string
}
let  newLib: lib = {"first " : "maths", "second": "chemistry", lenght: "2"} //without lenght k error dega 
var hello = newLib["first"]
console.log(hello);  //ye result undefined q arha h?


//It is possible to support both types of index, 
//with the restriction that the type returned from the numeric index must be a subtype of the type returned from the string index.

//While index signatures are a powerful way to describe the array and 'dictionary' pattern, 
//they also enforce that all properties match their return type. In this example, 
//the property does not match the more general index, and the type-checker gives an error:

interface AnotherDictionary {
   [ index: string]: string //Note there is no name assigned to the function signature
//    length: number     // error, the type of 'length' is not a subtype of the indexer
   //lenght kou agr num k xth chalna h tuu phr index k xth number krnge type otherwixe it gives an error 
} 


            //step # 30 interface-class types

 //One of the most common uses of interfaces in languages like C# and Java, 
//that of explicitly enforcing that a class meets a particular contract, is also possible in TypeScript.



interface setClock{
    currentTime:Date;
    setTime(d:Date)
}           

class clock implements setClock {
    currentTime:Date
    setTime(d:Date){
        this.currentTime=d;
    }
    constructor(h:number, d:number){

    }

}


                  //step # 31 (classes-static-side type )

//When working with classes and interfaces, it helps to keep in mind that a class has two types: 
//the type of the static side and the type of the instance side. 

//Lets us define a interface that defines a constructor


   interface clock{
       new (hour :number , min:number) //this defines a conxtructor signature 
   }                  

//Please note that the constructor sits in the static side, it cannot be implemented:

//You may notice that if you create an interface with a construct signature and try to 
//create a class that implements this interface you get an error:


//   class newClock1 implements clock{ //error 
//       currentTime: Date;
//       constructor(h:number, m :number){

//       }
//   }


//Instead, you would need to work with the 'static' side of the class directly. In this example, we work with the class directly:

 interface clock2{
     new(hour:number , minute:number )
 }
 interface clock3{
     currentTime:Date;
 }

class clock5 implements clock3{
    currentTime:Date
    constructor(h:number , m:number ) {

    }
}


var newClock :clock2 = clock
var newC :clock3 = new newClock(30, 40)



                //step # 32 (interface extending)

interface shape {
     color : string
}       

interface newShape extends shape{
    size : number 
}      

interface hie extends newShape {
    height :number 
}   

var Hie  = <hie>{}
Hie.color= "blue"
Hie.size = 40
Hie.height= 5
// NewShape.a="hello "   //it gives error as it doexnt include...



//An interface can extend multiple interfaces, creating a combination of all of the interfaces:

interface color {
    color1 : string 

}
interface color2 extends color , shape {
    size : number 
    height : number 
}
 var he = <color2>{}    //var he = {} as he    another syntex for explict casting
 he.color = "yellow"
 he.size= 12 



             //step # 33(interface hybrid types) 


//An example of hybrid type is an object that acts as both a function and an object, with additional properties:


interface copy {
    (start :number) :string 
    interval : number 
    reset(): void;

}

var copy1:copy ;
copy1(10)
// copy1.reset()
copy1.interval=5.


//When interacting with 3rd-party JavaScript, you may need to use patterns like the above to fully-describe the shape of the type.

//Note: The transpiled Javascript code will not run here it is being used as an example



               //step # 34 (classes as interface)


//A class declaration creates two things: a type representing instances of the class and a constructor function. 
//Because classes create types, you can use them in the same places you would be able to use interfaces.


class point {
    x: number
    y:number
}  
class pointX extends point {
    z : number 
}             

var PointX :pointX= {
    x: 1, y : 3, z : 5 
}
 

              //step # 35 (modules)


 export function add (a:number =2  ,b:number = 3 ){
    return a + b

}

export function sub ( a, b ){
    return a - b 
}

export default function cal(a :number , b : number ) {
    return a * b 

}


          //step # 37(generics) 

//In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is 'generics', that is,
//being able to create a component that can work over a variety of types rather than a single one. 
//This allows users to consume these components and use their own types.




class Container<T>
{
    private _array: T[];
    
    constructor(){
        this._array = [];
    }
    
    add(item: T){
        this._array.push(item);
    }
}

let d = new Container<string>();
let c1 = new Container<number>();


 



























































































































































    




















      

























































































