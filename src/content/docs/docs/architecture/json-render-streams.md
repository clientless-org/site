---
title: json-render Streams
description: Why json-render streams are the medium for Clientless interfaces.
---

In Clientless, json-render streams replace the client-owned component tree as the root interface boundary.

A capability does not have to return a full page, a React component, or a bespoke JSON response that one frontend must reinterpret. It can return a stream of UI patches constrained by a catalog.

## Stream as medium

json-render streaming uses a JSONL patch format to progressively build a spec. That matters because personal interfaces are often assembled incrementally:

- the user's intent clarifies over time,
- data arrives from multiple systems,
- model output is generated token by token,
- tools resolve at different times,
- workflows reveal the next control only after the current decision.

The UI stream lets the interface form at the same pace as the user's work.

## Catalog and registry

The catalog defines what can be rendered. The registry defines how each catalog entry is rendered on a specific platform.

That separation is the portability point:

- capabilities emit catalog-constrained specs,
- the web registry renders DOM-backed components,
- a mobile registry can render native views,
- a static renderer can produce stable HTML or image output,
- a terminal or document renderer can target another surface entirely.

## Actions

User interactions return to the capability as actions. The capability can update state, run tools, call models, and stream the next interface patch. The host does not need to own the workflow.

