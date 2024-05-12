import getdata from "../api/get.js";
import display from "../comoponet/uimaker.js";
import navbar from "../comoponet/navbar.js";
document.getElementById("navbar").innerHTML=navbar()

let get=async()=>{
    let product=await getdata("http://localhost:3000/product")
    display(product,"box")
}
get()