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

Clientless uses json-render as the interface medium. A spec describes interface pieces, state bindings, and actions. A stream patches the spec over time. A registry maps each catalog entry to platform-native components.

That gives capabilities a way to express interface without choosing the final host.

## Streaming matches the shape of intent

Modern work rarely resolves all at once.

A user might ask for a comparison, then need source data, file previews, model output, payment state, permissions, and an approval control. Some data is instant. Some is slow. Some is generated. Some depends on the previous choice.

A UI stream lets a personal interface appear progressively while the job clarifies.

## Registries preserve platform quality

Portable does not have to mean generic.

The same catalog entry can render as a web component, a native mobile control, a desktop element, an email block, or a static image. The registry keeps the platform-specific craft in the right place.

Clientless is not against frontend engineering. It asks frontend engineering to build excellent renderers, registries, and hosts instead of rebuilding the same completed app for every surface.

