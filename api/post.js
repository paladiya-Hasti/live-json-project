

const postdata=(url,user)=>{
    fetch(url,{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(user)
    })
}
export default postdata