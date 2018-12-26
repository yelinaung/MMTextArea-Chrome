

function convert(input, output, from_to) {
  var func;
  if (from_to == "uni_to_zg") {
    func = uni2zg;
  } else {
    func = zg2uni;
  }
  if (input.addEventListener) {
    input.addEventListener('input', function () {
      var outputValue = func(input.value);
      output.innerHTML = outputValue;
    }, false);
  } else if (input.attachEvent) {
    input.attachEvent('onpropertychange', function () {
      var outputValue = func(input.value);
      output.innerHTML = outputValue;
    });
  }
}

var zgInput = document.getElementById('zg');
var uniInput = document.getElementById('uni');

convert(uniInput, zgInput, "uni_to_zg");
convert(zgInput, uniInput, "zg_to_uni");

var clipboard1 = new ClipboardJS(".copy-zg-btn");
var clipboard2 = new ClipboardJS(".copy-uni-btn");