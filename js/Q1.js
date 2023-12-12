<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <label for="">Age</label>
    <input type="number" name="" id="a">
    <p id="a1"></p>
    <br>
    <label for="">Are you registered</label>
    <input type="radio" name="b" id="b1"> Yes
    <input type="radio" name="b" id="b2"> No
    <br>
    <label for="">Have you done voting before</label>
    <input type="radio" name="c" id="c1"> Yes
    <input type="radio" name="c" id="c2"> No
    <br>
    <button onclick="myfunc()">Submit</button>
    <script>
        function myfunc() {
            var a = document.getElementById("a").value;
            var b = document.getElementById("b1").value;
            var c = document.getElementById("c1").value;

            if (a >= 18 && document.getElementById('b1').checked) {
                document.write("You are eligible");
            }
            else {
                document.write("You are not eligible");
            }
           
        }
    </script>
</body>

</html>
