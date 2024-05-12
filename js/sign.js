
import postdata from "../api/post.js";
import navbar from "../comoponet/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

const isexit = (user) => {
    fetch(`http://localhost:3000/pass?email=${user.email}`)
        .then((res) => res.json())
        .then((res) => {
            if (res.length == 0) {
                postdata("http://localhost:3000/pass", user)
            }
            else {
                alert("already exits.......")
            }
        })
}
const handlesign = (e) => {
    e.preventDefault()

    let user = {
        user: document.getElementById("user").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value
    }
    console.log(user);
   isexit(user)
}
document.getElementById("form").addEventListener("submit", handlesign)