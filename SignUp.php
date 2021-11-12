<html>

<head>
	<title>Aklny - Sign Up</title>
	<link rel="stylesheet" href="includes/signUp.css">
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
	<link rel="icon" href="images/icon.png">
	<script src="includes/scripts.js"></script>
</head>

<body id="sbody">
	<h1>Sign Up</h1>

	<form id="signUp" name="signUp">

		<p>Name</p>
		<input id="name" class="textbox" type="text">

		<p>Email</p>
		<input id="email" class="textbox" type="text">

		<p>Address</p>
		<input id="address" class="textbox" type="text">

		<p>Password</p>
		<input id="password" class="textbox" type="password">

		<p>Confirm Password</p>
		<input id="confirm" class="textbox" type="password">

		<input id="Sbutton" type="button" value="Sign Up" onclick="check();">

	</form>

	<p id="loginLink">Already a member? <a id="l" href="Login.php">Login Now!</a></p>
</body>
</html>
