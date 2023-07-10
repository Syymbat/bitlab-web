// Задание 6 - 1 

// let x = parseInt(prompt("Insert quantity number"))
// let array = prompt("Insert array").split(" ")
// let ans = "";
// for(let i=x-1; i>=0; i--){
//     ans = ans + " " + array[i]
// }
// alert(ans)


// -----------------------------------------------------------------------------------------------------
// Задание 6 - 2

// let a = parseInt(prompt("Insert quantity number"))
// let array = prompt("Insert number:").split(" ")
// let ans = " ";
// let max = array[0]
// for(let i=0; i<a; i++){
//     if(array[i]>max){
//         max = array[i];
//     }
//     ans =   max
// }
// alert(ans)


// -----------------------------------------------------------------------------------------------------
// Задание 6 - 3

// let a = parseInt(prompt("Insert quantity number"))
// let array = prompt("Insert number:").split(" ").map(Number)
// let sum = 0
// for(let i=0; i<a ;i++){
//     sum += array[i]
// }
// let  sr = sum / a 

// alert("сумма всех чисел: " + sum)
// alert("общая средняя всех чисел: " + sr)


// -----------------------------------------------------------------------------------------------------
// Задание 6 - 4

// let a = parseInt(prompt("Insert quantity number"))
// let array = prompt("Insert number:").split(" ").map(Number)
// let kvs = " "
// for(let i=0; i<a ;i++){
//    let  kv =  array[i]*array[i]
//    kvs += kv + " "
// }
// alert(kvs)


// -----------------------------------------------------------------------------------------------------
// Задание 6 - 5


// users = [

//     {"login":"ilyas", "password": "qwerty"},

//     {"login":"eldar", "password": "qqqqq"},

//     {"login":"assylkhan", "password": "qweqwe"},

//     {"login":"anel", "password": "asdasd"},

//     {"login":"alibek", "password": "aaaaaa"}

// ];

// var login = prompt("Введите логин:")
// var password = prompt("Введите пароль:")
// var boolean = false;

// for(var i=0;i<users.length;i++){
//     if(users[i]["login"] === login && users[i]["password"] === password){
//         boolean = true;
//         break;
//     }
// }
// if(boolean){
//     alert("Welcome, you are authenticated")
// }else{
//     alert("User not found")
// }


// -----------------------------------------------------------------------------------------------------
// Задание 6 - 6

// books = [
//     {"author":"Joanne Rowling",
//      "books" : [{"book": "Harry Potter and the Philosopher's Stone" , "price" : 100 },
//                 {"book": "Harry Potter and the Chamber of Secrets" , "price" : 150 },
//                 {"book": "Harry Potter and the Prisoner of Azkaban" ,  "price" : 120 }
//               ] 
//             },
//     {"author":"William Bell",
//      "books" : [{"book": "Crabbe" , "price" : 100 },
//                 {"book": "The blue Helmet" , "price" : 300 },
//                 {"book": "Stones" ,  "price" : 200 }
//               ] 
//             }   
// ];
// var author = prompt("Введите имя автора:")
// var findbooks = []
// for(var i=0; i<books.length;i++){
//     if(books[i]["author"] === author){
//         findbooks = books[i]["books"]
//         break;
//     }
// }

// if(findbooks.length > 0){
//     var all = ""
//     for(var j = 0; j < findbooks.length; j++){
//         all+=findbooks[j]["book"] + author + " - " + findbooks[j]["price"] + "\n"; 
//     }
// alert(all);    
// }else{
//     alert("Нет такого автора")
// }



  