 const navbar=()=>{
    return`         <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a href="/index.html"><img src="https://images.meesho.com/images/products/237744529/dhmup_512.webp" class="logo" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/admin.html">admin</a>
        </li>
      <li class="nav-item">
        <a class="nav-link" href="/pages/cart.html">cart</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/pages/product.html">product</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/pages/sign.html">sign</a>
    </li>
    </ul>
    <div class="user-item ">
      <ul class=" navbar-nav  ">
        <li class="nav-item d-flex" id=" form-search">
          <input class="form-control m-2" type="search" placeholder="Search" aria-label="Search" id="search">
          <a class="nav-link pt-3 m-auto " aria-current="page" href="#"><i class="ri-search-fill"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link pt-3 m-auto " aria-current="page" href="/pages/login.html"><i class="ri-user-fill"></i></a>
        </li>
      </ul>
    </div>
  </div>
</div>
</nav>`
 }
 export default  navbar