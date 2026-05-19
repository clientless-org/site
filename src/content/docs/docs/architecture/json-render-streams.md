---
title: json-render Streams
description: Why json-render streams are the medium between backend composition and host rendering.
---

In Clientless, json-render streams replace the hand-built frontend tree as the root application interface.

The backend does not return HTML, a React component, or a bespoke JSON response that the frontend must reinterpret. It returns a stream of UI patches constrained by a catalog.

## Stream as medium

json-render streaming uses a JSONL patch format to progressively build a spec. That matters because modern app surfaces are often composed incrementally:

- data arrives from multiple systems,
- model output is generated token by token,
- tools resolve at different times,
- workflows reveal the next step only after the current one completes.

The UI stream lets the interface form at the same pace as the backend result.

## Catalog and registry

The catalog defines what can be rendered. The registry defines how each catalog entry is rendered on a specific platform.

That separation is the portability point:

- the backend emits catalog-constrained specs,
- the web registry renders DOM-backed components,
- a mobile registry can render native views,
- a static renderer can produce stable HTML or image output,
- a terminal or document renderer can target another surface entirely.

## Actions

User interactions return to the backend as actions. The backend can update state, run tools, call models, and stream the next spec. The frontend does not need to own the workflow.

