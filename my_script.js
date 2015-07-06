var zgInput = document.getElementById('zg');
if (zgInput.addEventListener) {
  zgInput.addEventListener('input', function() {
    var uniOutput = zg2uni(zgInput.value);
    document.getElementById('uni').innerHTML = uniOutput;
  }, false);
}

var uniInput = document.getElementById('uni');
if (uniInput.addEventListener) {
  uniInput.addEventListener('input', function() {
    var zgOutput = uni2zg(uniInput.value);
    document.getElementById('zg').innerHTML = zgOutput;
  }, false);
}
