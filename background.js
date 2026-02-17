let currentMode = "light";

function updateBadge(mode) {
  const dark = mode === "dark";
  browser.browserAction.setBadgeText({ text: dark ? "D" : "L" });
  browser.browserAction.setBadgeBackgroundColor({
    color: dark ? "#1a1a2e" : "#f0f0f0",
  });
  browser.browserAction.setBadgeTextColor({ color: dark ? "#fff" : "#000" });
  browser.browserAction.setTitle({ title: `Toggle Theme (${mode})` });
}

function applyMode(mode) {
  browser.browserSettings.overrideContentColorScheme.set({ value: mode });
  browser.storage.local.set({ themeMode: mode });
  updateBadge(mode);
}

browser.storage.local
  .get("themeMode")
  .then(({ themeMode }) => {
    currentMode = themeMode ?? "light";
    applyMode(currentMode);
  })
  .catch(() => applyMode(currentMode));

browser.browserAction.onClicked.addListener(() => {
  currentMode = currentMode === "light" ? "dark" : "light";
  applyMode(currentMode);
});
