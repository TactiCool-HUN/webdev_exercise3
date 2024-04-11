let products = [
    {id: 1, name: "coffee", price: 2.90},
    {id: 2, name: "tea", price: 1.90},
    {id: 3, name: "chocolate cake", price: 3.90},
    {id: 4, name: "strawberry cake", price: 4.90},
    {id: 5, name: "orange juice", price: 2}
];

let prod_sel = document.getElementById("product_choice");
let display_name = document.getElementById("display_name")
let display_price = document.getElementById("display_price")

products.forEach(item => {
    let prod_option = document.createElement("option");
    prod_option.value = item.id;
    prod_option.innerText = item.name;

    prod_sel.appendChild(prod_option);
});

function select_changer() {
    let selected_option = prod_sel.selectedOptions[0]
    let value = parseInt(selected_option.value)
    console.log(selected_option)
    if (value === 0) {
        document.getElementById("display").hidden = true
    } else {
        document.getElementById("display").hidden = false
        display_name.value = products[value - 1].name
        display_price.value = products[value - 1].price.toString()
    }
}