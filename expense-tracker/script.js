let title = document.getElementById("title");
let amount = document.getElementById("amount");
let type = document.getElementById("type");
let category = document.getElementById("category");
let date = document.getElementById("date");

// button
let addBtn = document.getElementById("addBtn");

// transaction list
let list = document.getElementById("transactionList");


// empty array (SEPARATE)
let transactions = [];


// function
function getTransactions() {
    return transactions;
}
addBtn.addEventListener("click", function () {

    // create object
    let data = {
        title: title.value,
        amount: amount.value,
        type: type.value,
        category: category.value,
        date: date.value
    };
    transactions.push(data);

});

   