---
title: json-render Is the New App Medium
description: Why a UI stream is a better boundary than a client-owned component tree.
pubDate: 2026-05-19
author: Clientless
tags:
  - json-render
  - streams
  - frontend
---

The DOM is an output target. React is a renderer strategy. Neither has to be the root boundary of the application.

Clientless uses json-render as the app medium. A spec describes the interface, state bindings, and actions. A stream patches the spec over time. A registry maps each catalog entry to platform-native components.

That gives the backend a way to express product surface without choosing the final platform.

## Streaming matches the shape of modern work

Modern software rarely resolves all at once.

A page might need database records, file previews, search results, model output, payment state, and permission checks. Some data is instant. Some is slow. Some is generated. Some depends on the user's previous action.

A UI stream lets the app surface appear progressively while the backend is still composing the result.

## Registries preserve platform quality

Portable does not have to mean generic.

The same catalog entry can render as a web component, a native mobile control, a desktop element, an email block, or a static image. The registry keeps the platform-specific craft in the right place.

Clientless is not against frontend engineering. It asks frontend engineering to build excellent renderers and host shells instead of rebuilding the same product logic for every surface.

