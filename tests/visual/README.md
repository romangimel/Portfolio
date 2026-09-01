# Focused Header and Hero browser tests

The Playwright harness protects the currently approved homepage surfaces:

- desktop: the Header and Hero composition together at 1440 x 900
- mobile: the Hero body only at 430 x 932 and 375 x 812
- mobile Header behavior: closed state, toggle, outside click, Escape/focus
  restoration, real-destination close, responsive stale-state reset, and
  horizontal-overflow/menu-fit checks

The desktop screenshot calculates one tightly bounded, full-width region from the separate `.site-header` and `.hero` visual bounds. It therefore protects their combined composition without requiring the Header to remain nested inside the Hero.

The mobile screenshots deliberately target `.hero__layout`, which starts after the mobile Header. Header interaction is covered with behavior assertions instead of adding the open popover to the approved Hero-body image baselines.

Run the normal comparison without changing approved screenshots:

```powershell
npm.cmd run test:visual
```

Only after human review of an intentional visual change, update the baselines explicitly:

```powershell
npm.cmd run test:visual:update
```

Never use the update command merely to make a visual failure pass. Review every changed baseline image before accepting it.
