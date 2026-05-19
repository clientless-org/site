---
title: Architecture
description: The Clientless stack from backend composition to host-rendered UI.
---

Clientless has one architectural boundary: the backend emits a UI stream, and hosts render it.

```text
data + tools + AI + workflow state
        ↓
backend composer
        ↓
json-render spec or stream
        ↓
MCP Apps resource + host bridge
        ↓
registry-backed renderer
        ↓
web, chat, IDE, mobile, desktop, widget, static site
```

## Backend composer

The backend composer is intentionally flexible. It can be:

- a monolith,
- a set of microservices,
- a workflow engine,
- an agent runtime,
- a serverless endpoint,
- a compiled endpoint binary if that packaging model becomes useful.

The architecture choice stays behind the contract. The host does not need to know whether the spec came from TypeScript, Python, Go, Rust, a queue, a model call, or a workflow.

## UI contract

The UI contract is json-render.

A spec describes components, props, state bindings, visibility, and actions. A stream progressively patches that spec so the interface can appear while the backend is still composing it.

## MCP Apps boundary

MCP Apps provides the standardized application resource model. An MCP server can return interactive UI, and a host can render it in a controlled environment while mediating calls back to the server.

## Host adapters

Host adapters are deliberately small. They provide:

- transport,
- resource loading,
- sandboxing and security policy,
- platform context,
- action forwarding,
- a component registry for the target surface.

The more logic that moves into the host, the less Clientless the system becomes.

