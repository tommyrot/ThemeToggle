# Theme Toggle

Tiny **Firefox extension** that toggles the browser's color scheme between Light and Dark mode with a single click ***on the icon in the toolbar***. Any website that respects `prefers-color-scheme` or `light-dark()` will instantly switch its appearance.

## Why?

I ain't got no time to dig for a tucked away setting everytime my eyes hurt. Also, this extension is the clean approach. No style injecting or any of that nonsense.

## Permissions

Theme Toggle requires only two permissions:

- Read and modify browser settings -- this extension **only sets** the `overrideContentColorScheme` preference.
- Local storage -- save your last choice so it persists across browser restarts **nothing else**.

No access to your browsing data, no network requests, no background processes or any bullshit.

## Install

Easiest is to grab from xxx.

### Making the button visible on the toolbar

If your browser is set to "never remember history" (permanent private browsing), the extension won't appear in the toolbar by default. To fix this:

1. Go to `about:addons` and find the entry for this extension.
2. Set **Run in Private Windows** to **Allow**.

Then pin the button to your toolbar:

1. Click the **puzzle piece icon** (Extensions menu) in the toolbar.
2. Find this extension and click the **gear icon** next to it.
3. Select **Pin to Toolbar**.

## Toggling

The badge on the icon shows your current state:

- **L** -- Light mode.
- **D** -- Dark mode.
