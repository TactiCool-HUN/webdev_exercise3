let products = [
    {id: 1, name: "coffee", price: 2.90},
    {id: 2, name: "tea", price: 1.90},
    {id: 3, name: "chocolate cake", price: 3.90},
    {id: 4, name: "strawberry cake", price: 4.90},
    {id: 5, name: "orange juice", price: 2}
];

let prod_sel = document.getElementById("comparison");

function changer() {
    let selected_option = prod_sel.selectedOptions[0]
    let comparison = parseInt(selected_option.value)
    let user_num = parseFloat(document.getElementById("price").value)

    let matching = [];
    if (comparison === 0) {
        products.forEach(item => {
            if (item.price === user_num) {
                matching.push(item)
            }
        })
    } else if (comparison === 1) {
        products.forEach(item => {
            if (item.price > user_num) {
                matching.push(item)
            }
        })
    } else if (comparison === 2) {
        products.forEach(item => {
            if (item.price < user_num) {
                matching.push(item)
            }
        })
    } else if (comparison === 3) {
        products.forEach(item => {
            if (item.price >= user_num) {
                matching.push(item)
            }
        })
    } else if (comparison === 4) {
        products.forEach(item => {
            if (item.price <= user_num) {
                matching.push(item)
            }
        })
    } else if (comparison === 5) {
        products.forEach(item => {
            if (item.price !== user_num) {
                matching.push(item)
            }
        })
    }
    let table = document.getElementById("results")
    while (table.children.length > 1) {
        // The list is LIVE so it will re-index each call
        table.removeChild(table.lastChild);
    }
    matching.forEach(product => {
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
    table.hidden = table.children.length === 1;
}