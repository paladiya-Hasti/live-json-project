import postdata from "../api/post.js";
import navbar from "../comoponet/navbar.js";
document.getElementById("navbar").innerHTML=navbar()


const handleadd=(e)=>{
    e.preventDefault()

    let product={
        title:document.getElementById("title").value,
        img:document.getElementById("img").value,
        price:document.getElementById("price").value,
        cate:document.getElementById("cate").value
    }
    postdata("http://localhost:3000/product",product)
    console.log(product);
    
}
document.getElementById("form").addEventListener("submit",handleadd)