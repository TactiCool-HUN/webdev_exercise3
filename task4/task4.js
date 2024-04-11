let products = [
    {id: 1, name: "coffee", price: 2.90},
    {id: 2, name: "tea", price: 1.90},
    {id: 3, name: "chocolate cake", price: 3.90},
    {id: 4, name: "strawberry cake", price: 4.90},
    {id: 5, name: "orange juice", price: 2}
];

let prod_sel = document.getElementById("product_choice");
let body = document.getElementById("body");

products.forEach(item => {
    let prod_option = document.createElement("option");
    prod_option.value = item.id;
    prod_option.innerText = item.name;

    prod_sel.appendChild(prod_option);
});

selected = prod_sel.selectedIndex
console.log(selected)
if (selected < 0) {
    let display = document.createElement("p");
    display.innerText = products[0].name;
    body.appendChild(display);
}