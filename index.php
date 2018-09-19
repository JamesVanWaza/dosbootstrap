<?php
require 'html5req.php';
require 'navbar.php';
?>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active"><img class="d-block w-100 img-fluid" src="https://picsum.photos/2560/1280/?random" alt="First slide"></div>
    <div class="carousel-item"><img class="d-block w-100 img-fluid" src="https://picsum.photos/2560/1280/?random" alt="Second slide"></div>
    <div class="carousel-item"><img class="d-block w-100 img-fluid" src="https://picsum.photos/2560/1280/?random" alt="Third slide"></div>
    <div class="carousel-item"><img class="d-block w-100 img-fluid" src="https://picsum.photos/2560/1280/?random" alt="Fourth slide"></div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div>
<nav class="navbar fixed-bottom navbar-light text-sm-center" style="background-color: transparent;">
	<i class="far fa-copyright" aria-hidden="true"> 2016 - 2018 <a href="https://dosbranding.com" target="_blank">DOSBRANDING INC</a></i>
</nav>
<?php require 'footer.php';?>