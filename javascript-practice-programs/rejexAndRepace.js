<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Regular Expressions</h2>

<p>Replace "microsoft" with "W3Schools" in the paragraph below:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo">Please visit Microsoft and Microsoft!</p>

<script>
function myFunction() {
  var str = document.getElementById("demo").innerHTML; 
  var txt = str.replace(/microsoft/i,"W3Schools");
  document.getElementById("demo").innerHTML = txt;
}
</script>

</body>
</html>

