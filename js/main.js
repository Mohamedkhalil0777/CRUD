// open with overlay
let addNewBtn = document.querySelector(".addNew");
let closeFormbtn = document.querySelector(".addNewContact .close");
let formSection = document.querySelector(".form");
let contactForm = document.querySelector(".addNewContact");

addNewBtn.addEventListener('click', () => {
  formSection.classList.add("overlay");
  contactForm.style.display = "block";
});
closeFormbtn.addEventListener('click', () => {
  formSection.classList.remove("overlay");
  contactForm.style.display = "none";
});

// btn save
let counter = 1;
let saveBtn = document.querySelector(".save");
saveBtn.addEventListener('click', () => {
  let name = document.querySelector("#contact_form_name").value;
  let phone = document.querySelector("#contact_form_phone").value;
  let email = document.querySelector("#contact_form_email").value;
  let address = document.querySelector("#contact_form_address").value;

  // creat a new table
  let newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${counter}</td>
    <td>${name}</td>
    <td>${phone}</td>
    <td>${email}</td>
    <td>${address}</td>
    <td><a class="edit">Edit</a></td>
    <td><a class="delete">Delete</a></td>
  `;
  newRow.classList.add("contact_row");
  document.querySelector(".tbody").appendChild(newRow);


  counter++;

  // edit with model
  document.querySelector("#contact_form_name").value = "";
  document.querySelector("#contact_form_phone").value = "";
  document.querySelector("#contact_form_email").value = "";
  document.querySelector("#contact_form_address").value = "";

  // close model
  formSection.classList.remove("overlay");
  contactForm.style.display = "none";
});

// delet btn
document.querySelector(".tbody").addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.closest(".contact_row").remove();
  }
});

// edit btn
document.querySelector(".tbody").addEventListener("click", (event) => {
  if (event.target.classList.contains("edit")) {
    let row = event.target.closest(".contact_row");
    let cells = row.querySelectorAll("td");

    document.querySelector("#contact_form_name").value = cells[1].textContent;
    document.querySelector("#contact_form_phone").value = cells[2].textContent;
    document.querySelector("#contact_form_email").value = cells[3].textContent;
    document.querySelector("#contact_form_address").value = cells[4].textContent;

    formSection.classList.add("overlay");
    contactForm.style.display = "block";

    row.remove();
  }
});

// search
document.querySelector("#search").addEventListener("keyup", (event) => {
  let searchTerm = event.target.value.toLowerCase();
  let rows = document.querySelectorAll(".contact_row");

  rows.forEach((row) => {
    let name = row.querySelector("td:nth-child(2)").textContent.toLowerCase();

    if (name.includes(searchTerm)) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});