const persons = [
    "Mike Mills",
    "Alice Aston",
    "Jordan Lewis",
    "Mary Mills",
    "Philip Patterson"
];
let staff_list = document.getElementById("staff_list");

persons.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    staff_list.appendChild(li);
});