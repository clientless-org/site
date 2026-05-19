---
title: Host Model
description: Native MCP hosts, WebHost, and future Clientless platform shells.
---

A Clientless host renders the app contract. It should not contain the product.

## Native MCP App hosts

Native MCP App hosts can load and render MCP Apps directly. Current public MCP Apps documentation lists support across clients including Claude, Claude Desktop, VS Code GitHub Copilot, Goose, Postman, and MCPJam, with the extension matrix tracking client-by-client support.

OpenAI is a primary Clientless target through the ChatGPT Apps SDK, which is built on MCP and runs apps inside ChatGPT.

Support should always be checked against the official host documentation and the [MCP extension support matrix](https://modelcontextprotocol.io/extensions/client-matrix) before making compatibility claims.

## WebHost

WebHost is the bridge for the ordinary web.

It gives a browser page the host behavior that native MCP App clients already provide:

- connect to the server,
- load the app resource,
- render the iframe or app surface,
- forward actions,
- provide the web registry,
- support SSR or static first paint where useful.

## iOS and widgets

An iOS Clientless shell should be a native host adapter plus a native registry. Widgets can render constrained summaries or action surfaces from the same backend-composed spec, using a smaller catalog when needed.

## macOS and Windows

Desktop shells should behave like Tauri or Electron in distribution shape, but not in product ownership. The shell can own native windows, menus, notifications, storage permissions, and system integrations. The backend still owns the app composition.

## Endpoint binaries

Compiling or packaging endpoints into native binaries is an implementation option, not a required part of the model. If tools such as Perryjs can package backend endpoints cleanly, they can become a deployment lane for local-first or desktop-hosted Clientless apps.

