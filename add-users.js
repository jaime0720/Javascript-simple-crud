var users = [];
var rowToEdit;

$( document ).ready(function() {


    $('#btnAdd').click( function (){
      var inputIdValue = $('.input-id').val();
      var inputNameValue = $('#name').val();
      var inputAddressValue = $('#address').val();
      var inputPhoneValue = $('#phone').val();
      var newUser = {
        id: inputIdValue,
        name: inputNameValue,
        address: inputAddressValue,
        phone: inputPhoneValue
      };

      users.push(newUser);

      renderUsers();
    });

    $('#btnUpdate').click( function () {
      var userToEdit = users[rowToEdit];
      userToEdit.id = $('.input-id').val();
      userToEdit.name = $('#name').val();
      userToEdit.address = $('#address').val();
      userToEdit.phone = $('#phone').val();
      users[rowToEdit] = userToEdit;
      renderUsers();
      $('#btnUpdate').toggleClass('enabled disabled');
      $('#btnAdd').toggleClass('disabled enabled');
    });

    $('#btnSearch').click(function search() {
      var foundTable = $('#foundTable');
      foundTable.empty();
      var id = $('#searchByID').val();
      var name = $('#searchByName').val();
      var address = $('#searchByAdress').val();
      var phone = $('#searchByPhone').val();
      for (var i = 0; i < users.length; i++) {
        if (users[i].id == id || users[i].name == name || users[i].address == address || users[i].phone == phone) {
          var foundUser = users[i];
          var row = '<tr><td>' +
            foundUser.id + '</td><td>' +
            foundUser.name +'</td><td>' +
            foundUser.address + '</td><td>' +
            foundUser.phone + '</td></tr>';
            foundTable.append(row);
        } else {
            $('#NoRecord').toggleClass('invisible visible');
        }
      }
    });
});

function renderUsers(){
  var bodyTable = $('#body-table');
  bodyTable.empty();
  for(i=0; i<users.length; i++){
    var currentUser = users[i];
    var row = '<tr><td>' +
      currentUser.id + '</td><td>' +
      currentUser.name +'</td><td>' +
      currentUser.address + '</td><td>' +
      currentUser.phone + '</td>' +
      '<td> <button type="button" class="btn btn-danger btn-xs" onclick="deleteUser('+ i +');">Eliminar</button></td>'
      + '<td> <button type="button" class="btn btn-warning btn-xs" onclick="updateUser('+ i +');">Actualizar</button></td>'
      +'</tr>';

    bodyTable.append(row);
  }

}

function deleteUser(index){
  users.splice(index, 1);// splice(indice, cuantos elementos vas a borrar)
  renderUsers();
}

function updateUser(index){
  var userToEdit = users[index];
  rowToEdit = index;
  $('#ID').val(tableData.rows[index + 1].cells[0].innerHTML);
  $('#name').val(tableData.rows[index + 1].cells[1].innerHTML);
  $('#address').val(tableData.rows[index + 1].cells[2].innerHTML);
  $('#phone').val(tableData.rows[index + 1].cells[3].innerHTML);
  $('#btnUpdate').toggleClass('disabled enabled');
  $('#btnAdd').toggleClass('enabled disabled');
  users[index] = userToEdit;

  renderUsers();
}
