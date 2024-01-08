import test from "node:test";
import assert from "node:assert/strict";


test('igual', () => {
	assert.equal(1, 1)
});

test('Objectos iguales', () => {
	const obj = { name: 'jose' };
	assert.deepEqual(obj, {name: 'jose'})
});

test('async', async() => {
	const promise = await Promise.resolve(5);
	assert.equal(promise, 5)
});

test('api', async() => {
	const star_war = await fetch('https://swapi.dev/api/people/1/')
		.then(resp => resp.json());

	assert.equal( star_war.name, 'Luke Skywalker' )
});
