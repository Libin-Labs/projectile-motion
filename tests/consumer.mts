import { flightTime, positionAt } from '@lp-labs/projectile-motion';
const t = flightTime(10, 0, 10);
if (Math.abs(positionAt(1, 10, 0, t, 10).y) > 1e-12) throw new Error('Motion');
// @ts-expect-error invalid argument must be rejected by declarations
flightTime('10', 0);
