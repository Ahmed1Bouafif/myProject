var users = [];
$("#bob").onclick(function(){
    var user = {}
    user.firstname=$('fname').val()
    user.lastname=$('lname').val()
    user.age=$('age').val()
    user.email=$('email').val()
    user.password=$('password').val()
    users.push(user)
    localStorage.setItem("usersarray",JSON.stringify(users))
});

  