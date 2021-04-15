/* Función suma */
var suma = function suma (a, b) {
	return a + b;	
};

/* Función resta */
var resta = function resta (a, b) {
	return a - b;	
};

var par = function par (a) {
	
		if(a % 2 == 0) {
		  return true;
		}else{
			return false;
		}
};

/* Exportación de funciones */

module.exports = {
	suma,
	resta,
	par
}