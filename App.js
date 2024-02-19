import React from "react";
import "./App.css"






const App = ()=> {
  return <React.Fragment>
    <html>
    <head>
       <title>Welcome To The Nature</title>
       </head>
    <body>
    <div class="align-center p-3 mb-2 bg-primary text-dark"> 
      <h2 align="center"> The Nature Conservancy</h2> 
      </div>
    
  
<div>
<nav class="navbar navbar-dark bg-dark">
<div class="container-fluid" >
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
<div class="p-3 mb-2 bg-secondary text-dark">
  <br/>
  <br/>
<div className="container">
  <div className="row">
    <div className="col">
      <div className="card">
  <img src="n1.jpg" className="card-img-top" alt="..." height="300px"/>
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">Go green and save the nature. Worship the nature not curse. Save plants, save the nature. Change yourself, not the nature!
</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div className="col">
      <div className="card">
  <img src="n5.jpg" className="card-img-top" alt="..." height="325px"/>
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">"Nature is not a place to visit, it is home." –Gary Snyder.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div className="col"> 
    <div className="card">
  <img src="n7.jpg" className="card-img-top" alt="..." height="300px"/>
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">What is the good of your stars and trees, your sunrise and the wind, if they do not enter into our daily lives?</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
  </div>
</div>
<br/>
<br/>
</div>

<div>
<br/>

<div class="container">
  <div class="row">
    <div class="col">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="n8.jpg" class="d-block w-100" alt="..." height="500px"/>
    </div>
    <div class="carousel-item">
      <img src="n9.jpg" class="d-block w-100" alt="..." height="500px"/>
    </div>
    <div class="carousel-item">
      <img src="n11.jpg" class="d-block w-100" alt="..." height="500px"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
</div>

    </div>
    
  </div>
  </div>
  
</div>
<br/>

<div class="p-3 mb-2 bg-dark text-white" >
<div class="container">
  <div class="row">
    <div class="col">
    
<p>
  <h3>Our Mission</h3>
   The goal of the future for nature foundation is the protection of species of wild animals and plants and the conservation of nature in general. Our hopes for the future lie with young conservationists. Future For Nature aims to stimulate a new generation of nature conservation leaders by providing support to new generations of wildlife heroes.
   <br/>
   <br/>
   <h3>Vision</h3>
   Future for nature is about conserving species of wild animals and plants because of their importance and beauty, and because their survival is at stake. 
   The conservation effort urgently needs a new, worldwide impetus. We need leaders that inspire and mobilize others.
   There is considerable potential among young people, but they often work in isolated areas. They therefore need a platform to highlight their work, help them to find sponsors and support their joint learning with others. Future For Nature provides just such a community for young, talented and committed conservationists.
</p>
    </div>
    
  </div>
</div>

  
</div>
<div align="center">
<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
</body>
</html>




  
  </React.Fragment>;
  
   
};


export default App;

