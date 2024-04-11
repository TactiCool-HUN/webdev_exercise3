const persons = [
    {name: "Mike Mills", position: "Secretary"},
    {name: "Alice Aston", position: "Sales Manager"},
    {name: "Jordan Lewis", position: "HR Manager"},
    {name: "Mary Mills", position: "Boss"},
    {name: "Philip Patterson", position: "Web Developer"},
];
let staff_list = document.getElementById("staff_list");

persons.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.name.concat(', ', item.position);
    staff_list.appendChild(li);
});