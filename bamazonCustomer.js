require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
var password = process.env.password;

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: password,
    database: "bamazonDB"
});

connection.connect(function(err, data){
    if(err){
        throw err;
        return;
    }
    console.log("Database is connected as id: " + connection.threadId);
    viewProducts();
    idOfDesiredProduct();
    howManyUnits();
});

// Function that selects all items in the product table to view
function viewProducts(){
    connection.query("select * from products", function(err, results){
    
        for(var i=0; i < results.length; i++){
            console.log(`
                Item ID: ${results[i].id}
                Product Name: ${results[i].productName}
                Department Name: ${results[i].departmentName}
                Price: ${results[i].price}
                In Stock: ${results[i].stockQuantity}
            `);
        }
    
    });
}

// Function that asks the id of desired product
function idOfDesiredProduct(){
    inquirer
    .prompt([
        {
            type: "list",
            message: "What is the ID of your desired product?",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            name: "idNumber"
        }
    ])
    .then(function(inquirerResponse){
        
        connection.query("select * from products", function(err, results){
            for(var i=0; i<results.length; i++){
                if(parseInt(inquirerResponse.idNumber) === results[i].id){
                    console.log(`
                        Product Name: ${results[i].productName}
                        Department Name: ${results[i].departmentName}
                        Price: ${results[i].price}
                        In Stock: ${results[i].stockQuantity}
                    `);
                }
            }
        });
    });
}

function howManyUnits(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "How many units would you like to buy?",
            name: "unitNumber"
        }
    ])
    .then(function(inquirerResponse){
        connection.query("select * from products", function(err, results){
            var totalAmount = 0;
            
            for(var i=0; i<results.length; i++){
                var remainingQuantity = 0;
                if(parseInt(inquirerResponse.unitNumber) === results[i].stockQuantity){
                    remainingQuantity -= results[i].stockQuantity;
                    console.log(`Enjoy your ${results[i].productName}!`);
                    console.log(`
                        Product Name: ${results[i].productName}
                        Department Name: ${results[i].departmentName}
                        Price: ${results[i].price}
                        In Stock: ${results[i].stockQuantity}
                    `);
                }
            }
            
        });
    }); 
}


    




















// variable to hold total purchase amount
// var totalAmount = 0;
// var idNumber = parseInt(inquirerResponse.idNumber);

// for(var i=0; i < inquirerResponse.length; i++){
    
//     for(var j=0; i < results.length; i++){
//         var id = results[j].id;
//         var price = results[j].price;
//         var name = results[j].productName;
//         var stock = results[j].stockQuantity;

//         if(idNumber == id){
//             totalAmount = price * stock;
//             connection.query("select name from products where id = " + id, function(){
//                 console.log("you chose")
//             });
//         }

//     }
    
// }


// inquirer
//   .prompt([
//     // Here we create a basic text prompt.
//     {
//       type: "input",
//       message: "What is your name?",
//       name: "username"
//     },
//     // Here we create a basic password-protected text prompt.
//     {
//       type: "password",
//       message: "Set your password",
//       name: "password"
//     },
//     // Here we give the user a list to choose from.
//     {
//       type: "list",
//       message: "Which Pokemon do you choose?",
//       choices: ["Bulbasaur", "Squirtle", "Charmander"],
//       name: "pokemon"
//     },
//     // Here we ask the user to confirm.
//     {
//       type: "confirm",
//       message: "Are you sure:",
//       name: "confirm",
//       default: true
//     }
//   ])
//   .then(function(inquirerResponse) {
//     // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
//     console.log(inquirerResponse);
//     if (inquirerResponse.confirm) {
//       console.log("\nWelcome " + inquirerResponse.username);
//       console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
//     }
//     else {
//       console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
//     }
//   });