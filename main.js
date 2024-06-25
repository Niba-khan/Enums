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
var fruits;
(function (fruits) {
    fruits[fruits["apple"] = 0] = "apple";
    fruits[fruits["mango"] = 1] = "mango";
    fruits[fruits["orange"] = 2] = "orange";
    fruits[fruits["grapes"] = 3] = "grapes";
    fruits[fruits["banana"] = 4] = "banana";
})(fruits || (fruits = {}));
var fruit = fruits.mango; //Define index number
console.log(fruit); //1
var fruit1 = fruits[2]; //return index value
console.log(fruit1); //orange
//You can set the value of the first numeric enum and have it auto increment from that:
var fruits1;
(function (fruits1) {
    fruits1[fruits1["apple"] = 1] = "apple";
    fruits1[fruits1["mango"] = 2] = "mango";
    fruits1[fruits1["orange"] = 3] = "orange";
    fruits1[fruits1["grapes"] = 4] = "grapes";
    fruits1[fruits1["banana"] = 5] = "banana";
})(fruits1 || (fruits1 = {}));
var fruit2 = fruits1.banana;
console.log(fruit2); //5
//You can assign unique number values for each enum value. Then the values will not incremented automatically:
var fruits2;
(function (fruits2) {
    fruits2[fruits2["apple"] = 12] = "apple";
    fruits2[fruits2["mango"] = 13] = "mango";
    fruits2[fruits2["orange"] = 14] = "orange";
    fruits2[fruits2["grapes"] = 15] = "grapes";
    fruits2[fruits2["banana"] = 16] = "banana";
})(fruits2 || (fruits2 = {}));
var fruit3 = fruits2.orange;
console.log(fruit3); // 14
var fruit4 = fruits2[15];
console.log(fruit4); //grapes
//~~~~~~~~String Enums~~~~~~~~~~~~
//Enums can also contain strings. This is more common than numeric enums, because of their readability and intent
var fruits3;
(function (fruits3) {
    fruits3["apple"] = "Apple";
    fruits3["mango"] = "Mango";
    fruits3["orange"] = "Orange";
    fruits3["grapes"] = "Grapes";
    fruits3["banana"] = "Banana";
})(fruits3 || (fruits3 = {}));
console.log(fruits3.orange); //Orange
var fruit5 = fruits3.mango;
console.log(fruit5); //Mango
//~~~~~~~~~~~~Enum as a function argument~~~~~~~~~~~~~
//We can also use an enum as a function type or return type:
var fruits4;
(function (fruits4) {
    fruits4["apple"] = "colour is red";
    fruits4["mango"] = "colour is yellow";
    fruits4["orange"] = "colour is orange";
    fruits4["grapes"] = "colour is light green";
    fruits4["banana"] = "colour is yellow";
})(fruits4 || (fruits4 = {}));
function fruitcolours(colour) {
    return colour;
}
console.log(fruitcolours(fruits4.orange)); //"colour is Orange"
console.log(fruits4); //all values print
