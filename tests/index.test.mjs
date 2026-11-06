import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('initial position', () => {
  assert.deepEqual(api.positionAt(2, 3, 4, 0), { x: 0, y: 4 });
});
test('simple trajectory', () => {
  assert.deepEqual(api.positionAt(2, 3, 4, 1, 2), { x: 2, y: 6 });
});
test('ground flight', () => {
  assert.equal(api.flightTime(10, 0, 10), 2);
});
test('fall from rest', () => {
  assert.equal(api.flightTime(0, 5, 10), 1);
});
test('downward stable intersection', () => {
  const t = api.flightTime(-1e6, 1e-8, 10);
  assert.ok(t > 0);
  assert.ok(Math.abs(api.positionAt(0, -1e6, 1e-8, t, 10).y) < 1e-20);
  assert.equal(api.flightTime(-1, 0), 0);
});
test('invalid states', () => {
  assert.throws(() => api.flightTime(1, -1));
  assert.throws(() => api.positionAt(1, 1, 0, -1));
  assert.throws(() => api.flightTime(1, 0, 0));
});
