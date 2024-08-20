document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认的提交行为

    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);

    var sum = number1 + number2;

    document.getElementById('result').innerHTML = '<p>两数之和: ' + sum + '</p>';
});