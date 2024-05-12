import deletedata from "../api/delete.js";
import getdata from "../api/get.js";
import updatedata from "../api/patch.js";
import creareTage from "../comoponet/create.js";
import navbar from "../comoponet/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

const handleqty=(opr,data)=>{
    // console.log(opr,qty)

    if(opr=="+"){
        data.qty+=1
        updatedata(data)
    }
    else{
        if(data.qty>=2){
            data.qty-=1
            updatedata(data)
        }
        else{
            deletedata(data.id)
        }
    }
}


let total=0
const uimaker =(data,id)=>{
    document.getElementById(id).innerHTML=""
    data.map((ele)=>{
        total=ele.price*ele.qty
        let img=creareTage("img")
        img.src=ele.img

         let title=creareTage("td")
         title.innerHTML=ele.title

        let  td1=creareTage("td")
         td1.append(img)
         td1.setAttribute("class","d-flex justify-content-center")

         let btn1 = creareTage("button")
         btn1.innerHTML = "+"
         btn1.setAttribute("class", "btn m-2")
 
         btn1.addEventListener("click", () => handleqty("+", ele))
 
         let qty = creareTage("button")
         qty.innerHTML = ele.qty
         qty.setAttribute("class", "btn")
 
         let btn2 = creareTage("button")

         btn2.innerHTML = "-"
         btn2.setAttribute("class", "btn m-2")
         btn2.addEventListener("click", () => handleqty("-", ele))
 
         let td2 = creareTage("td")
         td2.append(btn1, qty, btn2)
      
        let td3=creareTage("td")
        td3.innerHTML=ele.price*ele.qty

        let btn3=creareTage("td")
        btn3.innerHTML="<i class=ri-delete-bin-6-line></i>"

        btn3.setAttribute("class","d-flex justify-content-center")
        btn3.addEventListener("click",()=>{
            deletedata(ele.id)
        })
        let td4=creareTage("td")
        td4.append(btn3)

        let tr=creareTage("tr")
        tr.append(title,td1,td2,td3,td4)
        img.setAttribute("class","images ")
        // console.log(tr);
         document.getElementById(id).append(tr)   
    })
    let btn1=creareTage("btn")
    btn1.innerHTML="Proceed to Checkout"
    let p=creareTage("p")
    p.innerHTML=total
    document.getElementById("checkout").append(p,btn1)
}
let get=async()=>{
    let data=await getdata("http://localhost:3000/cart")
    // console.log(data);
    uimaker(data,"tbody")
}
get()