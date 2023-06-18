function appendValue(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    let result = document.getElementById('result').value;
    let calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;
}

function clearResult() {
    document.getElementById('result').value = '';
}
