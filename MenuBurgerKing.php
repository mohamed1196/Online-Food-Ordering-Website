
<?php 

include 'dbConnection.php';

//code for featching data

$query = "SELECT * FROM meal";

$stmt = $conn->query($query);

$data = $stmt->fetchAll();


?>

<!DOCTYPE html>
<html lang="en">

<?php include 'includes/header.php' ; ?> 

  <!--Meals-------------->
  <div>

    <div id="Meal-Header">
      <h1>Available Meals<h1>
    </div>

    <div class="meals-container">
      <?php foreach($data as $dt){
        if($dt['restaurant_id'] == 6 and $dt['m_stock'] > 0){
        ?>
          <div class="meals"><img class="meal" src="<?php  echo $dt['img'] ?>" alt="<?php echo $dt['m_name'] ?>">
            <div class="mealInfo">
              <p class="mealTitle"><?php echo $dt['m_name'] ?></p>
              <h5 class="mealPrice"><?php echo $dt['m_price'] ?> EGP</h5>
            </div>
            <a id="<?php echo $dt['m_id'] ?>" class="add-cart" href="#" onclick="mealClicked('<?php echo $dt['m_id'] ?>')"><img src="images/Add To Cart.png" alt="Add To Cart"></a>
          </div>
        <?php } } ?>
      
    </div>

  </div>
  <!--End-of-Meals-------------->

  <!--Cart------------------>
  <div class="cart-container">
    <h2 class="cart-H">CART</h2>
    <div class="cart-row">
      <span class="cart-item cart-header cart-column">ITEM</span>
      <span class="cart-price cart-header cart-column">PRICE</span>
      <span class="cart-quantity cart-header cart-column">QUANTITY</span>
    </div>

    <div class="cart-items">

    </div>

    <div class="cart-total">
      <strong class="cart-total-title">Total</strong>
      <span class="cart-total-price">00 </span>
    </div>
    <button class="btn-checkout" type="button">Order</button>

  </div>

  <!--End-of-Cart----------------->

<?php $conn = null;?>


</body>

</html>
