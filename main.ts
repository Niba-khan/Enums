//~~~~~~~~~~~~~~~~Enums~~~~~~~~~~~~~~~
//"Enum" is called (Enumeration):
//The set of value:
//Which return index or define index or return value
//Enum is use of two condition :
//Numeric Enum:
//string Enum
//syntax :
//enum name{}

//~~~~~~~~~~~~~~Numeric Enums~~~~~~~~~~~~~~~

//By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum fruits{   
    apple,      //0
    mango,      //1
    orange,     //2
    grapes,    //3
    banana,    //4
}

let fruit: fruits = fruits.mango;   //Define index number
console.log(fruit);   //1


let fruit1:string = fruits[2]        //return index value
console.log(fruit1)    //orange

//You can set the value of the first numeric enum and have it auto increment from that:

enum fruits1 {
    apple = 1,         //value initialized
    mango,
    orange,   
    grapes,    
    banana
}

let fruit2:fruits1 = fruits1.banana    
console.log(fruit2)  //5

//You can assign unique number values for each enum value. Then the values will not incremented automatically:

enum fruits2 {
    apple = 12,         //can assign values to all
    mango = 13,
    orange = 14,  
    grapes = 15,   
    banana = 16
}

let fruit3: fruits2 = fruits2.orange
console.log(fruit3);   // 14

let fruit4: string = fruits2[15]
console.log(fruit4)    //grapes

//~~~~~~~~String Enums~~~~~~~~~~~~
//Enums can also contain strings. This is more common than numeric enums, because of their readability and intent

enum fruits3{
    apple = "Apple",        
    mango = "Mango",
    orange = "Orange",  
    grapes = "Grapes",   
    banana = "Banana"
}


console.log(fruits3.orange);     //Orange

let fruit5:string = fruits3.mango
console.log(fruit5);       //Mango


//~~~~~~~~~~~~Enum as a function argument~~~~~~~~~~~~~
//We can also use an enum as a function type or return type:

enum fruits4 {
    apple = "colour is red",        
    mango = "colour is yellow",
    orange = "colour is orange",  
    grapes = "colour is light green",   
    banana = "colour is yellow"
}

function fruitcolours(colour:string){
    return colour;
}
console.log(fruitcolours(fruits4.orange))  //"colour is Orange"
console.log(fruits4);                      //all values print