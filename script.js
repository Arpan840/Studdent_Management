const submitButton = document.querySelector(".btn");
const searchBar = document.querySelector(".searchBar");
let studentData = [];
let count = 0;
function getData(e) {
  e.preventDefault();

  const dataObject = {
    id: count=count+1,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    gpa: document.getElementById("gpa").value,
    age: document.getElementById("age").value,
    degree: document.getElementById("degree").value,
  };

  studentData.push(dataObject);
  console.log(studentData);
  
  let tableData = " ";
  studentData.map((i, index) => {
    tableData += `
    <tr>
          <th scope="row">${i.id}</th>
          <td>${i.name}</td>
          <td>${i.email}</td>
          <td>${i.age}</td>
          <td>${i.gpa}</td>
          <td >${i.degree} <i class="bi bi-pencil-square"></i><i class="bi bi-trash3"></i></td>
          </tr>
        `;
  });
  document.querySelector(".tableRows").innerHTML = tableData;
}
submitButton.addEventListener("click", getData);

searchBar.addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase();
  let filteredStudients = studentData.filter((i) => {
    return (
      i.name.toLowerCase().includes(value) ||
      i.email.toLowerCase().includes(value) ||
      i.degree.toLowerCase().includes(value)
    );
  });
  let filteredStudentList = "";
  filteredStudients.map((i) => {
    filteredStudentList += `
  <tr>
  <th scope="row">${i.id}</th>
  <td>${i.name}</td>
  <td>${i.email}</td>
  <td>${i.age}</td>
  <td>${i.gpa}</td>
  <td>${i.degree} <i class="bi bi-pencil-square"></i> <i class="bi bi-trash3"></i></td>
  </tr>
  `;
  });
  document.querySelector(".tableRows").innerHTML = filteredStudentList;
});
