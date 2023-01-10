function add_nums() {
    var num1 = Number(document.getElementById("num1").value); 
    var num2 = Number(document.getElementById("num2").value); 
    var sum = num1+num2;

    document.getElementById("sum").value = sum;
}