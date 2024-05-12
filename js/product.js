import getdata from "../api/get.js";
import navbar from "../comoponet/navbar.js";
import display from "../comoponet/uimaker.js";
document.getElementById("navbar").innerHTML = navbar()

let get = async () => {
    let product = await getdata("http://localhost:3000/product")
    display(product, "box")
}
get()


// sorting code


const handledata = async(val) => {
    let product = await getdata("http://localhost:3000/product")

    if (val == "htl") {
        let temp = product.sort((a, b) => b.price - a.price)
        display(temp,"box")
        console.log(temp);
    }
    else{
        let temp = product.sort((a, b) => a.price - b.price)
        display(temp,"box")
        console.log(temp);
    }

}

const search =async (val) => {
    let product = await getdata("http://localhost:3000/product")
    let temp = product.filter((ele) => ele.title.toLowerCase().includes(val.toLowerCase()))
    display(temp)
}

const handlesearch = (e) => {
    e.preventDefault()
    
    let val = document.getElementById("search").value
    search(val)
}
const handleFilter = (val) => {
    let temp = product.filter((ele) => ele.cate == val)
    console.log(temp);
    dis(temp)
}
document.getElementById("htl").addEventListener("click", () => handledata("htl"))
document.getElementById("lth").addEventListener("click", () => handledata("lth"))
document.getElementById("sliver").addEventListener("click", () => handleFilter("sliver"))
document.getElementById("golden").addEventListener("click", () => handleFilter("golden"))
document.getElementById("smartwatch").addEventListener("click", () => handleFilter("smartwatch"))
document.getElementById("rosegold").addEventListener("click", () => handleFilter("rosegold"))
document.getElementById("form-search").addEventListener("submit", handlesearch)
