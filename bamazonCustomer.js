
var mysql = require("mysql");
var inquirer = require("inquirer");
// create the connection information for the sql database
var connection = mysql.createConnection({
  socketPath:"/Applications/MAMP/tmp/mysql/mysql.sock",
  // Your username
  user: 'root',
  // Your password
  password: 'root',
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) {throw err;}
  console.log("connect as id" + connection.threadid)
  // run the start function after the connection is made to prompt the user
  start();
});


function start() {
    //show all ids, names, and products from database.
    connection.query('SELECT * FROM products', function(error, response) {
        if (error) { console.log(error) };
        
        var table = '';

        for (i = 0; i < response.length; i++) {
            table += '';
            table += 'Item ID: ' + response[i].item_id + '  //  ';
            table += 'Product Name: ' + response[i].product_name + '  //  ';
            table += 'Department: ' + response[i].department_name + '  //  ';
            table += 'Price: $' + response[i].price + '\n';

      console.log(table);
        }

        inquirePurchase();
    });


}; //end start

// function which prompts the user for what action they should take
function inquirePurchase() {
  inquirer
    .prompt([

    {
      name: "item_id",
      type: "input",
      message: "What item number would you like to purchase?",
  
    }, {
      name: "stock_quantity",
      type: "input",
      message: "How many would you like to buy?"
    }
    ])
    .then(function(answer) {
      console.log('Customer selects' + input.item_id + 'stock_quantity = ' + input.stock_quantity);

      var quantityDesired = answer.stock_quantity;
      var idDesired = answer.item_id;
      purchaseFromDatabase(idDesired, quantityDesired);
    });
};

function purchaseFromDatabase(idDesired, quantityDesired) {
  
      connection.query(
        'SELECT * FROM Products WHERE item_id = ' + ID, function(error, response) {
        if (error) { console.log(error) };

      
        if (quantityDesired <= response[0].stock_quantity) {
            //var totalCost = response[0].Price * quantityDesired;
            console.log("We'll have your order out ASAP!");
            //update database, minus purchased quantity
            connection.query(
              'UPDATE Products SET stock_quantity = stock_quantity - ' + quantityDesired + ' WHERE item_id = ' + item_id);
        } else {
            console.log("Sorry, insufficient quantity!");
        };
        start();
    });

}; 

start();
