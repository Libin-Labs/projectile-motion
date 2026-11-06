# @lp-labs/projectile-motion

Educational constant-gravity two-dimensional motion.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/projectile-motion
```

## Working example

```js
import { flightTime, positionAt } from '@lp-labs/projectile-motion';
const t = flightTime(10, 0, 10);
if (Math.abs(positionAt(1, 10, 0, t, 10).y) > 1e-12) throw new Error('Motion');
```

CommonJS: `const api = require('@lp-labs/projectile-motion')`.

## Behavior, customization and limits

positionAt(vx,vy,height,time,g=9.80665) returns{x,y},flightTime(vy,height,g) returns nonnegative ground intersection. Velocity components in m/s[-1e6,1e6],initial height metres[0,1e6],time seconds[0,1e6],gravity[1e-6,1e6]. Stable quadratic root for downward velocity. No drag,terrain,weapon aiming or physical safety/engineering guidance. Position may be below ground after landing. Constant time.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function positionAt(
  vx: number,
  vy: number,
  height: number,
  time: number,
  g?: number,
): {
  x: number;
  y: number;
};
export declare function flightTime(vy: number, height: number, g?: number): number;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
