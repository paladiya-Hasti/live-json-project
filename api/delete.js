 const deletedata=(id)=>{
    fetch(`http://localhost:3000/cart/${id}`,{
        method:"DELETE"
    })
 }
 export default deletedata