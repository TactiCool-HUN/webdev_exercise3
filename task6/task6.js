let products = [
    {id: 1, name: "coffee", price: 2.90, category: "drink", discount: false},
    {id: 2, name: "tea", price: 1.90, category: "drink", discount: false},
    {id: 3, name: "chocolate cake", price: 3.90, category: "bakery", discount: true},
    {id: 4, name: "strawberry cake", price: 4.90, category: "bakery", discount: false},
    {id: 5, name: "orange juice", price: 2, category: "drink", discount: true}
];

let category_select = document.getElementById("category_select")
let added = []
products.forEach(product => {
    if (!added.includes(product.category)) {
        let opt = document.createElement("option")
        opt.value = product.category
        opt.innerText = product.category
        category_select.appendChild(opt)
        added.push(product.category)
    }
})

function changer() {
    let comparison = parseInt(document.getElementById("comparison").selectedOptions[0].value)
    let user_num = parseFloat(document.getElementById("price").value)
    let user_type = document.getElementById("type_select").selectedOptions[0].value
    let user_discount_check = document.getElementById("discount").checked
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

    let temp = []
    if (user_type !== "0") {
        matching.forEach(product => {
            if (product.category === user_type) {
                temp.push(product)
            }
        })
        matching = temp
    }

    temp = []
    if (user_discount_check) {
        matching.forEach(product => {
            if (product.discount) {
                temp.push(product)
            }
        })
        matching = temp
    }

    let table = document.getElementById("results")
    while (table.children.length > 1) {
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