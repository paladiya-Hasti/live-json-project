import navbar from "../comoponet/navbar.js";
document.getElementById("navbar").innerHTML=navbar()

const isexit=(user)=>{
    fetch(`http://localhost:3000/pass?email=${user.email}`)  
     .then((res)=>res.json())
     .then((res)=>{
        if(res.length==0){
            alert("user not found")
        }
        else{
            alert("user and password wrong")
        }
     })
}

const vaild=(user)=>{
    fetch(`http://localhost:3000/pass?email=${user.email}&password=${user.password}`)
    .then((res)=>res.json())
    .then((res)=>{
        if(res.length==1){
            alert("login succefully")
            // window.location.href="/index.html"
        }
        else{
            isexit(user)
        }
    })
}
const handlelogin=(e)=>{
    e.preventDefault()

    let user={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,   
    }
    console.log(user);
    vaild(user)
}
document.getElementById("form").addEventListener("submit",handlelogin)