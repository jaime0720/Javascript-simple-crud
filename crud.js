var lista = [];
//var id, name, adress, phone;
var btnAdd = document.getElementById('btnAdd');
//var btnEdit = document.getElementsByClassName('btnEdit');
//var btnDelete = document.getElementsByClassName('btnDelete');
var btnUpdate = document.getElementById('btnUpdate');
var tableData = document.getElementById('tableData');
var index;

btnAdd.addEventListener("click", addReg);



function addReg() {
  id = document.getElementById('ID').value;
  name = document.getElementById('name').value;
  adress = document.getElementById('adress').value;
  phone = document.getElementById('phone').value;
  var empData = [];
  empData.push(id, name, adress, phone);
  lista.push(empData);
  tableBuilder();

}

function editReg() {
  getIndex();
  //console.log(index);
  btnUpdate.className = "btn btn-success enabled";
  btnAdd.className = "btn btn-primary disabled";
  btnUpdate.addEventListener("click", update);
}

function update() {
  tableData.rows[index].cells[0].innerHTML = document.getElementById('ID').value;
  tableData.rows[index].cells[1].innerHTML = document.getElementById('name').value;
  tableData.rows[index].cells[2].innerHTML = document.getElementById('adress').value;
  tableData.rows[index].cells[3].innerHTML = document.getElementById('phone').value;
  btnUpdate.className = "btn btn-success disabled";
  btnAdd.className = "btn btn-primary enabled";
  updateLista();

}

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
    tableData.deleteRow(i);
  //for (var i = 1; i < tableData.rows.length; i++) {
    //tableData.rows[i].addEventListener("click", function(){
      //index = this.rowIndex;
      //tableData.deleteRow(index);
    //});
  //}
}

function getIndex() {
  for (var i = 1; i < tableData.rows.length; i++) {
    tableData.rows[i].addEventListener("click", function(){
      index = this.rowIndex;
      document.getElementById('ID').value = tableData.rows[index].cells[0].innerHTML;
      document.getElementById('name').value = tableData.rows[index].cells[1].innerHTML;
      document.getElementById('adress').value = tableData.rows[index].cells[2].innerHTML;
      document.getElementById('phone').value = tableData.rows[index].cells[3].innerHTML;
    });
  }

  /*for (var i = 1; i < edit.length + 1 ; i++) {
    edit[i-1].addEventListener("click", function(){
      index = tableData.rows[i].rowIndex;
      console.log(index);
    });

  };*/
}

function tableBuilder() {
  for (var i = lista.length-1; i < lista.length; i++) {
    row = tableData.insertRow(-1);
    var idCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var adressCell = row.insertCell(2);
    var phoneCell = row.insertCell(3);
    var editCell = row.insertCell(4);
    var deleteCell = row.insertCell(5);
    idCell.innerHTML = lista[i][0];
    nameCell.innerHTML = lista[i][1];
    adressCell.innerHTML = lista[i][2]
    phoneCell.innerHTML = lista[i][3];
    editCell.innerHTML = '<button type="button" class="btn btn-warning btn-xs btnEdit" onclick="editReg()">Editar</button>'
    deleteCell.innerHTML = '<button type="button" class="btn btn-danger btn-xs btnDelete" onclick="deleteRow(this)">Borrar</button>'
  }
  //for (var i = 0; i < edit.length; i++) {
    //edit[i].addEventListener("click", editReg)
  //}
  //for (var i = 0; i < del.length; i++) {
    //del[i].addEventListener("click", deleteRow) {
  //}
}

/*function updateLista() {
  var table = document.querySelector("table thead");
  var rows = table.children;
  for (var i = 1; i < rows.length; i++) {
    var fields = rows[i].children;
    var rowArray = [];
    for (var j = 0; j < fields.length - 2; i++) {
      rowArray.push(fields[j].innerHTML);
    }
    console.log(rowArray);
    //lista.push(rowArray);
  }
}*/
function search() {
  window.open("search.html", "", "width=400, height=200, top=250, left=500");
  var id = window.getElementById('ID').value,
  name = document.getElementById('name').value,
  adress = document.getElementById('adress').value,
  phone = document.getElementById('phone').value;
  console.log(id);
}
