<!DOCTYPE html>
<script src=""></script>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
 <h1 style="text-align: center;">hello</h1> <hr>
 <input type="number" id="num1" name="num1">
 <label>enter 1st number</label> <br>
 <input type="number" id="num2" name="num2">
 <label>enter 2nd number</label> <br>
<hr>
<button onclick="myfunc()">Submit</button> <br>
<script>
    function myfunc(){
        var a= document.getElementById("num1").value;
        var b=document.getElementById("num2").value;
        if (a>b)
        {
            document.write("num1 is greater than num2");
        }
        else {
            document.write("num2 is greater than num1");
        }
        if
    }
</script>
</body>

</html>
