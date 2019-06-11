---
title: Utils
---

## `getContrastColor({ options })`

Returns correct light/dark foreground color based on the background color.

**Options**

`backgroundColor`*: _string_. Background color. Required.

`theme`*: _object_. Theme object (must have `colorText` and `colorTextDark` defined). Required.

`threshold`: _number_. Number between 0-100. Luminance threshold determining where to switch between the light and dark colors.

**Returns**

_string_ Color.
