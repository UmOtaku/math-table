function check(num) {
  obj = document.getElementsByClassName("num");
  for (let i = 0; i <= obj.length; i++) {
    obj[i].innerHTML = num + " * " + i + " = " + num * i;
    console.log(i + " funcionou");
  }
}
