let json = {}

function fetchTable() {
    fetch("http://127.0.0.1:5000/employees")
        .then(response => response.json())
        .then(data => {
            json = data
            populateTitleSelect()
            drawTable()
        })
}

function populateTitleSelect() {
    let titles = []
    let title_selector = document.getElementById("title")

    json.forEach(employee => {
        let title = employee[7]
        if (!titles.includes(title)) {
            titles.push(title)
            let option = document.createElement("option")
            option.value = title
            option.innerText = title
            title_selector.appendChild(option)
        }
    })
}
function drawTable() {
    let table = document.getElementById("results")
    let title = document.getElementById("title").selectedOptions[0].value
    let search = document.getElementById("search").value

    let matches = json
    let temp = {}

    while (table.children.length > 1) {
        table.removeChild(table.lastChild);
    }

    if (title !== "0") {
        temp = []
        matches.forEach(employee => {
            if (employee[7] === title) {
                temp.push(employee)
            }
        })
        matches = temp
    }

    if (search !== "") {
        temp = []
        matches.forEach(employee => {
            if (employee[1].includes(search)) {
                temp.push(employee)
            } else if (employee[2].includes(search)) {
                temp.push(employee)
            } else if (employee[4].includes(search)) {
                temp.push(employee)
            }
        })
        matches = temp
    }

    matches.forEach(employee => {
        let tr = document.createElement("tr");
        [4, 0, 3, 1, 2, 7, 5, 6].forEach(num => {
            let td = document.createElement("td")
            td.innerText = employee[num]
            tr.appendChild(td)
        })
        table.appendChild(tr)
    })
}

fetchTable()