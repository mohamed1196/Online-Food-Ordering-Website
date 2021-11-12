<?php
    include 'dbConnection.php';

    function update_meal_stock($meal_Name ,$meal_Quantity ){
        $stmt = $conn->exec("UPDATE meal SET m_stock= m_stock-$meal_Quantity WHERE m_name=$meal_Name ");
        return "true";

    }
?>