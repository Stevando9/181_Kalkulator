function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }
 function hasil() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
 }
 function hapusBersih() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
 function hapus() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
 }