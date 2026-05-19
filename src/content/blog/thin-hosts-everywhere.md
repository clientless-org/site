---
title: Thin Hosts Everywhere
description: What WebHost, iOS widgets, macOS shells, and Windows shells should have in common.
pubDate: 2026-05-19
author: Clientless
tags:
  - hosts
  - platforms
  - webhost
---

The best Clientless host is boring.

It should be secure, native-feeling, predictable, and small. It should not become a hidden second product implementation.

## What a host owns

A host owns the platform boundary:

- loading the app resource,
- enforcing sandbox and security policy,
- rendering through a registry,
- forwarding user actions,
- providing capability context,
- integrating with platform affordances.

That is real work. It is just not the product.

## What the backend owns

The backend owns the app composition. It decides which workflow appears, which actions are available, what data is visible, and what happens next.

This is what makes the same product portable. The shell can change without rewriting the app.

## What comes next

WebHost proves the pattern for the browser. Native MCP hosts prove it in conversation and developer tools. The next step is applying the same boundary to iOS, widgets, macOS, Windows, and static delivery.

When the host is thin enough, the platform surface becomes a deployment choice instead of a product rewrite.

