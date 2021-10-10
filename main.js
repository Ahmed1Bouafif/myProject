var users = []
$("#bob").on("click",function(){
    localStorage.setItem("firstname",$('#fname').val())
    localStorage.setItem("lastname",$('#lname').val())
    localStorage.setItem("age",$('#age').val())
    localStorage.setItem("email",$('#email').val())
    localStorage.setItem("password",$('#password').val())

    var user = {}
    user.firstname=localStorage.getItem("firstname")
    user.lastname=localStorage.getItem("lastname")
    user.age=localStorage.getItem("age")
    user.email=localStorage.getItem("email")
    user.password=localStorage.getItem("password")
    var userAccount={}
    userAccount[localStorage.getItem("firstname")]=user
    localStorage.setItem(localStorage.getItem("firstname"),JSON.stringify(userAccount))
});
var nameArray=["ahmed","sakr","sarra","walid"]
function createUsers(nameArray) {
    var res=[]
    for (let i = 0; i < nameArray.length; i++) {
        res.push(JSON.parse(localStorage.getItem(nameArray[i])))
    }
    return res
}


  