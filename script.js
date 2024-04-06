var istatus = document.querySelector("h5")
var btn1 = document.getElementById("btn1")

var flag = 0
btn1.addEventListener("click", function(){
    if (flag == 0) {
        istatus.innerHTML = "Friend"
        istatus.style.color = "green"
        btn1.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        btn1.innerHTML = "Unfollow"
        flag = 1
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn1.style.backgroundColor = "cadetblue"
        btn1.innerHTML = "Follow"
        flag = 0
    }
})