var nameArray=["ahmed","sakr","sarra","walid","bob","halim","foued"]
$("#bob").on("click",function(){


    var user = {}
    user.firstname=$('#fname').val()
    user.lastname=$('#lname').val()
    user.age=$('#age').val()
    user.email=$('#email').val()
    user.password=$('#password').val()
    var usersArray = JSON.parse(localStorage.getItem("users"))|| []
    usersArray.push(user)
    localStorage.setItem("users" , JSON.stringify(usersArray))
 });
function createUsers(nameArray) {
    nameArray.push(localStorage.getItem("firstname"))
    var res=[]
    for (let i = 0; i < nameArray.length; i++) {
        res.push(JSON.parse(localStorage.getItem(nameArray[i])))
    }
    return res
}
function checkuser(){ 
    var bob = JSON.parse(localStorage.getItem("users"))
    console.log(bob)
    for(i=0;i<bob.length;i++){
        if($('#ffname').val()===bob[i].firstname && $('#ppassword').val()===bob[i].password){
            window.location.replace("./home.html"); 
        }
    }
    window.location.replace("./register.html");
}

  