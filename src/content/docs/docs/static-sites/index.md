---
title: Static Sites
description: How Clientless applies to traditional static websites.
---

Clientless can also describe static sites.

A traditional static page is a precomputed interface. A Clientless static page is a precomputed json-render result, rendered at build time or served as a static app resource.

## Static does not mean handwritten

The same backend composition model can produce:

- a marketing page,
- documentation,
- an article,
- an app landing page,
- a report,
- a dashboard snapshot.

The output can be frozen into static HTML, streamed at request time, or opened inside a host.

## Why this matters

Static delivery gives Clientless a low-friction adoption path. Developers do not need to start with a fully dynamic app. They can begin by using the backend composer and json-render catalog to generate stable pages, then make selected surfaces interactive later.

## Relationship to the DOM

json-render does not literally delete the DOM on the web. The browser still renders DOM nodes. The change is that the DOM is no longer the primary application authoring boundary. The root interface is the spec; the DOM is one renderer output.

