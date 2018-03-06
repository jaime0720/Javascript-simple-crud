var users = [];

$( document ).ready(function() {


    $('#btnAdd').click( function (){
      var inputIdValue = $('.input-id').val();
      var inputNameValue = $('#name').val();
      var newUser = {
        id: inputIdValue,
        name: inputNameValue
      };

      users.push(newUser);

      renderUsers();
    });

    $('#btnUpdate').click( function () {
      var userToEdit = users[0];
      userToEdit.id = 99;
      userToEdit.name = 'Luis';

      users[0] = userToEdit;

      renderUsers();
    });

});

function renderUsers(){
  var bodyTable = $('#body-table');
  bodyTable.empty();
  for(i=0; i<users.length; i++){
    var currentUser = users[i];
    var row = '<tr><td>' +
      currentUser.id + '</td> <td>' +
      currentUser.name +'</td>' +
      '<td> <button type="button" class="btn btn-info" onclick="deleteUser('+ i +');">Eliminar</button></td>'
      + '<td> <button type="button" class="btn btn-info" onclick="updateUser('+ i +');">Actualizar</button></td>'
      +'</tr>';

    bodyTable.append(row);
  }

}

function deleteUser(index){
  users.splice(index, 1);// splice(indice, cuantos elementos vas a borrar)
  renderUsers();
}

function updateUser(index){
  console.log('Estoy en update',index);
  var userToEdit = users[index];
  userToEdit.id = 99;
  userToEdit.name = 'Luis';

  users[index] = userToEdit;

  renderUsers();
}
