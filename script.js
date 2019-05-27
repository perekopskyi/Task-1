let input = document.querySelectorAll('input'),
    a, b, result;

function sum(a, b) {
  a = +input[0].value; 
  b = +input[1].value;
  result = (a * 1000000000 + b * 1000000000) / 1000000000;
  return result;
}

input[2].addEventListener('click', () => {
  alert(sum());
});

