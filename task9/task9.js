let json = {}

function fetchTable() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            json = data
            drawTable()
            populateUserSelect()
        })
}

function populateUserSelect() {
    let user_ids = []
    let user_selector = document.getElementById("user")

    json.forEach(line => {
        let user_id = line.userId
        if (!user_ids.includes(user_id)) {
            user_ids.push(user_id)
            let option = document.createElement("option")
            option.value = user_id
            option.innerText = user_id
            user_selector.appendChild(option)
        }
    })
}

function drawTable() {
    let table = document.getElementById("results")
    let completed_only = document.getElementById("completed").checked
    let user_id = parseInt(document.getElementById("user").selectedOptions[0].value)
    let title = document.getElementById("title").value

    let matches = json
    let temp = {}

    while (table.children.length > 0) {
        table.removeChild(table.lastChild);
    }

    let tr = document.createElement("tr");

    let th = document.createElement("th")
    th.innerText = "ID"
    tr.appendChild(th)

    if (user_id !== -1) {
        temp = []
        matches.forEach(line => {
            if (line.userId === user_id) {
                temp.push(line)
            }
        })
        matches = temp
    } else {
        let th = document.createElement("th")
        th.innerText = "UserID"
        tr.appendChild(th)
    }

    th = document.createElement("th")
    th.innerText = "Title"
    tr.appendChild(th)

    if (completed_only) {
        temp = []
        matches.forEach(line => {
            if (line.completed) {
                temp.push(line)
            }
        })
        matches = temp
    } else {
        let th = document.createElement("th")
        th.innerText = "Status"
        tr.appendChild(th)
    }

    table.appendChild(tr)

    if (title !== "") {
        temp = []
        matches.forEach(line => {
            if (line.title.includes(title)) {
                temp.push(line)
            }
        })
        matches = temp
    }

    matches.forEach(line => {
        tr = document.createElement("tr")

        let td = document.createElement("td")
        td.innerText = line.id
        tr.appendChild(td)

        if (user_id === -1) {
            td = document.createElement("td")
            td.innerText = line.userId
            tr.appendChild(td)
        }

        td = document.createElement("td")
        td.innerText = line.title
        tr.appendChild(td)

        if (!completed_only) {
            td = document.createElement("td")
            if (line.completed) {
                td.innerText = "Done"
            } else {
                td.innerText = "In Progress"
            }
            tr.appendChild(td)
        }

        table.appendChild(tr)
    })
}

fetchTable()