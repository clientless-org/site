---
title: Hosts Everywhere
description: What WebHost, iOS widgets, macOS shells, and Windows shells should have in common.
pubDate: 2026-05-19
author: Clientless
tags:
  - hosts
  - platforms
  - webhost
---

The best Clientless host is a composition surface.

It should be secure, native-feeling, predictable, and small enough that capabilities remain portable. It should not become a hidden second app store.

## What a host owns

A host owns the platform boundary:

- loading app resources,
- enforcing sandbox and security policy,
- rendering through a registry,
- forwarding user actions,
- providing capability context,
- helping users save and recall personal interfaces,
- integrating with platform affordances.

That is real work. It is just not the whole product.

## What capabilities own

Capabilities own the useful product behavior: actions, views, data access, rules, validation, and interaction state.

That is what makes the same capability portable. The host can change without rewriting the useful unit of software.

## What comes next

WebHost proves the pattern for the browser. Native MCP hosts prove it in conversation and developer tools. The next step is applying the same boundary to iOS, widgets, macOS, Windows, and static delivery.

When hosts are good composition surfaces, the platform becomes a place where interfaces appear instead of a store where apps are installed.

