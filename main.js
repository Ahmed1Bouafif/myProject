var nameArray=[]
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
 var nameArray = JSON.parse(localStorage.getItem("users"))
$("#bob1").on("click",function(){ 
    for(i=0;i<nameArray.length;i++){
        if($("#ffname").val()===nameArray[i].firstname){
            if($("#ppassword").val()===nameArray[i].password){
                window.location.replace("file:///C:/Users/Lenovo/Desktop/myProject/home.html")
            }else{
            alert("your password is wrong")
            } 
            break;
        }else if(($("#ffname").val()==="")&&($("#ppassword").val()==="")){
            alert("please put you name and password")
            break;
        }else{ 
            window.location.replace("file:///C:/Users/Lenovo/Desktop/myProject/register.html")
        alert("you have to creat an account please")
        break;
    }
}
})

$("#bob").on("click",function(){
    if(($("#fname").val()==="")||
    ($("#lname").val()==="")||
    ($("#age").val()==="")||
    ($("#email").val()==="")||
    ($("#password").val()==="")){
        alert("please fill all of you informations")
    }else{
        window.location.replace("file:///C:/Users/Lenovo/Desktop/myProject/home.html")
    }
})

$("#account").on("click",function(){
    window.location.replace("file:///C:/Users/Lenovo/Desktop/myProject/login.html")
})
  