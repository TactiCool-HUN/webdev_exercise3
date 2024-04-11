const persons = [
    {name: "Mike Mills", position: "Secretary", location: "California"},
    {name: "Alice Aston", position: "Sales Manager", location: "Barcelona, Spain"},
    {name: "Jordan Lewis", position: "HR Manager", location: "Milan, Italy"},
    {name: "Mary Mills", position: "Boss", location: "Hamburg, Germany"},
    {name: "Philip Patterson", position: "Web Developer", location: "London, England"}
];
let staff_table = document.getElementById("staff_table");

persons.forEach(item => {
    let line = document.createElement("tr");

    let td_name = document.createElement("td");
    td_name.innerText = item.name;
    line.appendChild(td_name);
    let td_pos = document.createElement("td");
    td_pos.innerText = item.position;
    line.appendChild(td_pos);
    let td_loc = document.createElement("td");
    td_loc.innerText = item.location;
    line.appendChild(td_loc);

    staff_table.appendChild(line);
});