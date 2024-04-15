let products = [
    {id: 1, name: "coffee", price: 2.90, category: "drink", discount: false},
    {id: 2, name: "tea", price: 1.90, category: "drink", discount: false},
    {id: 3, name: "chocolate cake", price: 3.90, category: "bakery", discount: true},
    {id: 4, name: "strawberry cake", price: 4.90, category: "bakery", discount: false},
    {id: 5, name: "orange juice", price: 2, category: "drink", discount: true}
];

let table = document.getElementById("results")

products.sort((a, b) => a.price - b.price)

products.forEach(product => {
    let tr = document.createElement("tr")
    let td_id = document.createElement("td")
    let td_name = document.createElement("td")
    let td_price = document.createElement("td")

    td_id.innerText = product.id.toString()
    td_name.innerText = product.name
    td_price.innerText = product.price.toString()

    tr.appendChild(td_id)
    tr.appendChild(td_name)
    tr.appendChild(td_price)
    table.appendChild(tr)
})