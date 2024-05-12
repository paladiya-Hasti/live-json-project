import patchdata from "../api/patch.js"
import postdata from "../api/post.js"

const isexitcart=(product)=>{
    fetch(`http://localhost:3000/cart/${product.id}`)
    .then((res)=>res.json())
    .then ((res)=>{
        // alert("already exits");
        res.qty+=1
        patchdata(res)
    })
    .catch((error)=>{
        console.log(error);
        postdata("http://localhost:3000/cart",product)
    })
    console.log(product);
    
}

const display = (product,id) => {
    document.getElementById(id).innerHTML=""
    product.map((ele) => {
        let title = document.createElement("h5")
        title.innerHTML = ele.title

        let img = document.createElement("img")
        img.src = ele.img
        img.setAttribute("class","img2")

        let price = document.createElement("p")
        price.innerHTML = "price : "+ele.price

        let cate = document.createElement("p")
        cate.innerHTML ="cate : "+ ele.cate

        let btn=document.createElement("button")
        btn.innerHTML="DELETE"   
        
        let btn1=document.createElement("button")
        btn1.innerHTML="BUY TO CART" 
        
        btn1.addEventListener("click",()=>{
            isexitcart({...ele,qty:1})
        })

        let div = document.createElement("div")
        div.append(title, img, cate, price,btn1)

        div.setAttribute("class", "box1")
        document.getElementById("box").append(div)
    })

}
export default display