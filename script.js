const tbody = document.querySelector("tbody");
const descItem = document.querySelector("#desc");
const amount = document.querySelector("#amount");
const type = document.querySelector("#type");
const btnNew = document.querySelector("btnNew");

const incomes = document.querySelector("#.incomes");
const expenses = document.querySelector(".expenses");
const total = document.querySelector(".total");

let items;

function deleteItem(index) {
    items.splice(index, 1);
    setItensBD();
    loadItens();
}



function insertItem(item, index) {
    let tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${item.desc}</td>
    <td>R$ ${item.amount}</td>
    <td class="columnType">${
        item.type === "Entrada"
        ? '<i class="bx bxs-chevron-up-circle"></i>'
        : '<i class="bx bxs-chevron-down-circle></i>'
    }</td>
    <td class="columnAction">
     <button onClick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
     </td>
    `;

   tbody.appendChild(tr);

}
 
function getTotals() {
    const amountIncomes = items 
    .filter ((item) => item.type === "Entrada")
    .map((transaction) => Number(transaction.amount));
}


function loadItens() {
    items = getItensBD();
    tbody.innerHTML = "";
    items.forEach((item, index) => {
        insertIte(item, index);
    });
    getTotals();
}

const getItensBD = () => JSON.parse(localStorage.getItem("db_items")) ?? [];
const setItensBD = () => 
     localStorage.setItem("db_items", JSON.stringify(items));
    
     loadItens();