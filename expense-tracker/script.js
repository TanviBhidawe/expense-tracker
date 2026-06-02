let totalIncome = 0;
let totalExpense = 0;

document.getElementById("addBtn").onclick = function () {

    let title = document.getElementById("title").value;
    let amount = Number(document.getElementById("amount").value);
    let type = document.getElementById("type").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;

    if (title == "" || amount == "" || date == "") {
        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
        "Title: " + title +
        " | Amount: ₹" + amount +
        " | Category: " + category +
        " | Date: " + date +
        " | Type: " + type;

    if (type == "Income") {
        totalIncome = totalIncome + amount;
        li.style.color = "green";
    }
    else {
        totalExpense = totalExpense + amount;
        li.style.color = "red";
    }

    document.getElementById("transactionList").appendChild(li);

    document.getElementById("totalIncome").innerHTML = totalIncome;
    document.getElementById("totalExpense").innerHTML = totalExpense;
    document.getElementById("balance").innerHTML =
        totalIncome - totalExpense;

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
};