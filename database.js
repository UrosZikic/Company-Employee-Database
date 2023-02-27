var fullName = document.querySelector(".name");
var email = document.querySelector(".email");
var position = document.querySelector(".position");
var submit = document.querySelector(".submit");
var tablebody = document.querySelector(".tableBody");
// // // // //
submit.onclick = () => {
  var newRow = document.createElement("tr");
  tablebody.appendChild(newRow);

  var nameFilled = document.createElement("td");
  nameFilled.innerHTML = fullName.value;
  newRow.appendChild(nameFilled);

  var emailFilled = document.createElement("td");
  emailFilled.innerHTML = email.value;
  newRow.appendChild(emailFilled);

  var positionFilled = document.createElement("td");
  positionFilled.innerHTML = position.value;
  newRow.appendChild(positionFilled);

  fullName.value = "";
  email.value = "";
  position.value = "";
  // // // // //
  var sortEdit = 0;
  nameFilled.onclick = () => {
    sortEdit = 1;
    editData();
  };
  emailFilled.onclick = () => {
    sortEdit = 2;
    editData();
  };
  positionFilled.onclick = () => {
    sortEdit = 3;
    editData();
  };
  function editData() {
    var promptEdit = prompt("edit data");
    if (sortEdit == 1 && promptEdit != "") {
      nameFilled.innerHTML = promptEdit;
    } else if (sortEdit == 2 && promptEdit != "") {
      emailFilled.innerHTML = promptEdit;
    } else if (sortEdit == 3 && promptEdit != "") {
      positionFilled.innerHTML = promptEdit;
    }
    if (promptEdit == "delete") {
      removeData();
    }
  }

  function removeData() {
    tablebody.removeChild(newRow);
  }
};
