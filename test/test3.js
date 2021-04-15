// Ejemplo de test utilizando la librería should

// Cargar la librería should
var should = require('should');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función es_par', function() {
  operaciones.es_par.should.be.a.Function();
  should.equal(operaciones.par(4), true);
  should.equal(operaciones.par(1), false);
	should.equal(operaciones.par(3), false);
});



