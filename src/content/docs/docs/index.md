---
title: Clientless Docs
description: The canonical source of truth for the Clientless application model.
---

Clientless is a way to build software after the fixed client stops being the center of the app.

Instead of shipping one completed destination for every job, developers publish capabilities: trusted actions, views, tools, rules, and interface parts that hosts can assemble. Users call those capabilities inside the surface they already use and turn them into personal interfaces when they need something reusable.

## Core definition

A Clientless system has four parts:

- Capabilities that expose what a product can do.
- A json-render contract that lets capabilities describe interactive interface pieces as specs and streams.
- An MCP Apps boundary that lets hosts render those pieces inline and mediate actions safely.
- Hosts that assemble, render, save, and recall personal interfaces across chat, web, mobile, desktop, widgets, and static surfaces.

The old app model asks users to find and operate a fixed application. Clientless lets the interface appear around the user's intent.

## Canonical pages

- [The Thesis](/docs/thesis/) explains the platform argument.
- [Architecture](/docs/architecture/) defines the capability-to-interface stack.
- [json-render Streams](/docs/architecture/json-render-streams/) explains the interface medium.
- [Host Model](/docs/hosts/) describes native and non-native host targets.
- [Static Sites](/docs/static-sites/) explains how this also applies to traditional web publishing.

## External standards

Clientless builds on existing work rather than replacing it wholesale:

- [MCP Apps](https://modelcontextprotocol.io/docs/extensions/apps) for interactive UI returned from MCP servers.
- [MCP extension support matrix](https://modelcontextprotocol.io/extensions/client-matrix) for current host support.
- [json-render specs](https://json-render.dev/docs/specs), [streaming](https://json-render.dev/docs/streaming), and [renderers](https://json-render.dev/docs/renderers).
- [OpenAI Apps SDK](https://help.openai.com/en/articles/12515353-build-with-the-apps-sdk), which is built on MCP and targets apps inside ChatGPT.

