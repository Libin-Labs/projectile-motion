function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function state(vy: number, height: number, g: number): void {
  finite(vy, -1e6, 1e6);
  finite(height, 0, 1e6);
  finite(g, 1e-6, 1e6);
}
export function positionAt(
  vx: number,
  vy: number,
  height: number,
  time: number,
  g = 9.80665,
): { x: number; y: number } {
  state(vy, height, g);
  finite(vx, -1e6, 1e6);
  finite(time, 0, 1e6);
  return { x: vx * time, y: height + vy * time - (g * time * time) / 2 };
}
export function flightTime(vy: number, height: number, g = 9.80665): number {
  state(vy, height, g);
  const root = Math.hypot(vy, Math.sqrt(2 * g * height));
  return vy >= 0 ? (vy + root) / g : height === 0 ? 0 : (2 * height) / (root - vy);
}
