var assert = require('assert');
var operaciones = require('../operations.js');

it('comprobar función suma', () => {
	assert.equal(operaciones.suma(1,3), 4);
	assert.equal(operaciones.suma(-1,3), 2);
	assert.equal(operaciones.suma(8,-3), 5);
	
});



