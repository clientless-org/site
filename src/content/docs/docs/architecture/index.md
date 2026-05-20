---
title: Architecture
description: The Clientless stack from capabilities to personal interfaces.
---

Clientless has one architectural boundary: capabilities describe what can be done, and hosts assemble those capabilities into personal interfaces.

```text
developer capabilities
        ↓
action, data, permission, and view contracts
        ↓
json-render spec or stream
        ↓
MCP Apps resource + host bridge
        ↓
registry-backed renderer
        ↓
personal interface in chat, web, mobile, desktop, widget, or static output
```

## Capabilities

A capability is a useful part of a product exposed as something a host can call and render.

It can include:

- actions,
- data queries,
- generated views,
- decision support,
- approval flows,
- validation rules,
- long-running tasks,
- saved interface state.

Capabilities can be implemented with any service architecture. That implementation detail stays behind the contract.

## Interface contract

The interface contract is json-render.

A spec describes components, props, state bindings, visibility, and actions. A stream progressively patches that spec so a personal interface can appear while data, tools, and model output resolve.

## MCP Apps boundary

MCP Apps provides the standardized application resource model. A capability can return interactive UI, and a host can render it in a controlled environment while mediating calls safely.

## Hosts

Hosts assemble and render capabilities. They provide:

- transport,
- resource loading,
- sandboxing and security policy,
- platform context,
- action forwarding,
- a component registry for the target surface,
- save and recall behavior for personal interfaces.

The more a host can assemble safely, the less users need fixed applications as destinations.

