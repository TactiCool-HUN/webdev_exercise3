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
    let user_type = document.getElementById("category_select").selectedOptions[0].value
    let user_discount_check = document.getElementById("discount").checked
    let sorter = document.getElementById("sorter").selectedOptions[0].value
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

    if (sorter === "name") {
        for (let i = 0; i < matching.length; i++) {
            for (let j = 0; j < (matching.length - i - 1); j++) {
                if (matching[j].name > matching[j + 1].name) {
                    let temp = matching[j]
                    matching[j] = matching[j + 1]
                    matching[j + 1] = temp
                }
            }
        }
    } else if (sorter === "price") {
        matching.sort((a, b) => a.price - b.price)
    } else if (sorter === "category") {
        for (let i = 0; i < matching.length; i++) {
            for (let j = 0; j < (matching.length - i - 1); j++) {
                if (matching[j].category > matching[j + 1].category) {
                    let temp = matching[j]
                    matching[j] = matching[j + 1]
                    matching[j + 1] = temp
                }
            }
        }
    } else if (sorter === "discount") {
        for (let i = 0; i < matching.length; i++) {
            for (let j = 0; j < (matching.length - i - 1); j++) {
                if (matching[j].discount > matching[j + 1].discount) {
                    let temp = matching[j]
                    matching[j] = matching[j + 1]
                    matching[j + 1] = temp
                }
            }
        }
    }

    let table = document.getElementById("results");
    while (table.children.length > 0) {
        table.removeChild(table.lastChild);
    }

    let tr = document.createElement("tr");
    ["id", "name", "price", "category"].forEach(item => {
        let th = document.createElement("th");
        th.innerText = item;
        tr.appendChild(th);
    });
    if (!user_discount_check) {
        let th = document.createElement("th")
        th.innerText = "discount"
        tr.appendChild(th)
    }
    table.appendChild(tr)

    matching.forEach(product => {
        tr = document.createElement("tr")

        let td = document.createElement("td")
        td.innerText = product.id.toString()
        tr.appendChild(td)

        td = document.createElement("td")
        td.innerText = product.name
        tr.appendChild(td)

        td = document.createElement("td")
        td.innerText = product.price.toString()
        tr.appendChild(td)

        td = document.createElement("td")
        td.innerText = product.category
        tr.appendChild(td)


        if (!user_discount_check) {
            let td_discount = document.createElement("td")
            if (product.discount) {
                td_discount.innerText = "discounted"
            } else {
                td_discount.innerText = ""
            }
            tr.appendChild(td_discount)
        }

        table.appendChild(tr)
    })
    table.hidden = table.children.length === 1;
}