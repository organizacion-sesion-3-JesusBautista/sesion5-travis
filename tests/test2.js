var assert = require('assert');
var operaciones = require('../operations.js');

it('comprobar función resta', () => {
	assert.equal(operaciones.resta(1,3), -2);
	assert.equal(operaciones.resta(-1,3), -4);
	assert.equal(operaciones.resta(8,-3), 11);
	
});



