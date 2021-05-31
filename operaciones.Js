function LimpiarFormulario(){
	document.getElementById('cola').reset();
}

var suma=function (n1,n2){
	var num1= parseInt(document.getElementById("num1").value);
	var num2= parseInt(document.getElementById("num2").value);
	var r= num1 * num2;
	return	"Tu resultado es:" +r;
}
var calculo = function (n1){
   var num1=parseInt(document.getElementById("num1").value);
   var r= num1 * 9.81;
   return num1 + " El resultado es:" +r;
 }