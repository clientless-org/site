---
title: Clientless Docs
description: The canonical source of truth for the Clientless application model.
---

Clientless is an application architecture where the backend composes the product surface and streams UI as data.

The client is no longer the place where the whole app is implemented. The client becomes a host: it renders a validated interface stream, provides platform capabilities, and sends actions back to the backend.

## Core definition

A Clientless app has four parts:

- A backend composer that owns product logic, data access, tools, AI calls, and workflow state.
- A json-render contract that describes UI as specs and progressive streams.
- An MCP Apps boundary that lets hosts load interactive app resources and mediate tool calls.
- Host adapters that render the same app in native MCP hosts, web pages, mobile shells, desktop shells, widgets, and static surfaces.

## Canonical pages

- [The Thesis](/docs/thesis/) explains the platform argument.
- [Architecture](/docs/architecture/) defines the stack.
- [json-render Streams](/docs/architecture/json-render-streams/) explains the new medium.
- [Host Model](/docs/hosts/) describes native and non-native host targets.
- [Static Sites](/docs/static-sites/) explains how this also applies to traditional web publishing.

## External standards

Clientless builds on existing work rather than replacing it wholesale:

- [MCP Apps](https://modelcontextprotocol.io/docs/extensions/apps) for interactive UI returned from MCP servers.
- [MCP extension support matrix](https://modelcontextprotocol.io/extensions/client-matrix) for current host support.
- [json-render specs](https://json-render.dev/docs/specs), [streaming](https://json-render.dev/docs/streaming), and [renderers](https://json-render.dev/docs/renderers).
- [OpenAI Apps SDK](https://help.openai.com/en/articles/12515353-build-with-the-apps-sdk), which is built on MCP and targets apps inside ChatGPT.

