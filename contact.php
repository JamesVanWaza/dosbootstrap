<?php
require 'html5req.php';
require 'navbar.php';
?>

<body>
  <div class="container-fluid">
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="fullname">Name</label>
          <input type="text" class="form-control" id="fullname" placeholder="Name">
        </div>
        <div class="form-group col-md-6">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Email">
        </div>
        <div class="form-group col-md-12">
          <label for="formtextarea">Message</label>
          <textarea class="form-control" id="formtextarea" rows="3"></textarea>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
    </form>
  </div>
<?php require 'footer.php';?>
