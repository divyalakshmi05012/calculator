function Solve(val) {
    var v = document.getElementById('input-box');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('input-box').value;
    var num2 = eval(num1);
    document.getElementById('input-box').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('input-box');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('input-box');
    ev.value = ev.value.slice(0,-1);
 }