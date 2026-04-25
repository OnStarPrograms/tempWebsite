<!DOCTYPE html>
<html>

<head>
<link href="../css/98.css" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
<?php

$answer='anonymous';
$servername = "localhost";
$dbname = "chatroom";
$website='';

if(isset($_POST['submit']))
{
    $answer = $_POST['username'];
	$website = $_POST['website'];
	setcookie('username', $answer);
	setcookie('website', $website);
}
else {
	$answer = $_COOKIE['username'];
	$website = $_COOKIE['website'];
	setcookie('username', $answer);
	setcookie('website', $website);
}
$answer = filter_var($answer, FILTER_SANITIZE_SPECIAL_CHARS);
$website = filter_var($website, FILTER_SANITIZE_EMAIL);

if(isset($_POST['submit']))
{
	$username = "writer";
	$password = "DefaultPasswordWr1t3r!";
	$conn = new mysqli($servername, $username, $password, $dbname);

	$chat = $_POST['chat'];
	
	$chat = filter_var($chat, FILTER_SANITIZE_SPECIAL_CHARS);
	
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$insert_chat = "INSERT INTO chats (username, chat, website) VALUES ('{$answer}', '{$chat}', '{$website}');";
	$conn->query($insert_chat);
	$conn->close();
}

if(isset($_POST['new_message'])){
	$username = "writer";
	$password = "DefaultPasswordWr1t3r!";
	$conn = new mysqli($servername, $username, $password, $dbname);

	$chat = $_POST['chat'];
	
	$chat = filter_var($chat, FILTER_SANITIZE_SPECIAL_CHARS);
	
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$insert_chat = "INSERT INTO chats (username, chat, website) VALUES ('{$answer}', '{$chat}', '{$website}');";
	$conn->query($insert_chat);
	$conn->close();
}

$username = "reader";
$password = "DefaultPasswordR3@der";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}
echo "<div id=\"username\" class=\"system\">system</div>Guestbook connected successfully! <br/>";

$all_chats = "SELECT * FROM chats";
$result = $conn->query($all_chats);

if ($result->num_rows > 0){
	while($row = $result->fetch_assoc()) {
		if (strcmp($row["username"], $answer) == 0){
			echo "<div style=\"float:right;\"><a href=\"https://{$row["website"]}\" target=\"_blank\">". $row["website"] . "</a></div><div id=\"username\" class=\"user\">" . $row["username"]. "</div><div id=\"chat\">" . $row["chat"]."</div>";
		} else{
			echo "<div style=\"float:right;\"><a href=\"https://{$row["website"]}\" target=\"_blank\">". $row["website"] . "</a></div><div id=\"username\" class=\"other\">" . $row["username"]. "</div><div id=\"chat\">" . $row["chat"]."</div>";
		}
	}
}
$conn->close();
?> 
<div class="window lower">
	<form method="post" action="chatroom.php#scroll">
		<input class="no_border" type="string" name="chat">
		<button><input class="button" type="submit" name="new_message" value="msg"></button>
		<input class="invisible" type="none" name="new_message">
	</form>
</div>
<a href="./chatroom.txt" target="_blank">Powered by SQL and PHP</a>

</body>
</html>
