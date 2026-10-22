# Motion mini 14.6.0

Locally bundled, pinned open-source animation dependency for Hnmh. No CDN,
network imports, React runtime, or runtime package loader is required.

- Upstream: https://github.com/motiondivision/motion
- Tagged source: https://github.com/motiondivision/motion/tree/v14.6.0
- Official API documentation: https://motion.dev/docs/animate
- Entry point: `motion/mini` (only `animate` is exported)
- Browser interface: `window.Motion.animate`
- License: MIT; see `LICENSE.md`, which retains both Motion B.V. and Framer B.V.
  copyright notices from the bundled packages.
- Pinned version, constituent packages, upstream commit and SHA-256 are recorded
  in `provenance.json`.
- Reviewed for this integration on 2026-10-22.

## Usage

```html
<script src="vendor/motion/motion-mini.js"></script>
```

```js
const animation = Motion.animate([element], {
  opacity: [0, 1],
  transform: ['translateX(12px) scale(.99)', 'translateX(0) scale(1)']
}, {
  duration: 0.32, // seconds
  ease: [0.22, 1, 0.36, 1]
});
await animation.finished;
```

Use full CSS `transform` strings, not the hybrid-only independent `x`, `y`, or
`scale` properties. This small build does not include a spring generator; use
cubic-bezier arrays or supported named easing curves. Do not pass
`type: 'spring'` to the mini build.

Wrap individual DOM elements in an array, as above. This also supports elements
in Hnmh's same-origin viewer iframe: upstream element resolution uses a
realm-specific `instanceof EventTarget` check for individual arguments, whereas
arrays bypass that check. CSS selectors resolve in the document that loaded the
library, not automatically in the iframe.

`animation.stop()` preserves the current visual style; `animation.cancel()`
removes the animation and restores the underlying style. In version 14.6.0,
neither interruption method settles `animation.finished`. Callers that cancel
an awaited transition must settle their own wrapper promise or race it against
their cancellation signal. Ordinary completion commits final values to inline
styles. Clear those inline values explicitly if CSS should resume control.

Respect `prefers-reduced-motion` at the calling UI layer.

## Rebuilding

The reproducible build is outside the public site in
`github-pages/qa/motion-vendor-build/`. From that folder, run `npm ci
--ignore-scripts`, then `node build.mjs`. `package-lock.json` pins all packages.
The build uses esbuild 0.27.4, tree shaking, production mode, an ES2019 target,
and IIFE output. It emits only this directory's script, license and provenance.
