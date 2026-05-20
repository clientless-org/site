---
title: The Clientless Thesis
description: Why capabilities and personal interfaces are the next software platform shift.
---

Most application stacks assume the app is a destination. A user installs it, opens it, navigates it, and learns the workflow the developer chose.

Clientless starts from a different assumption: the client is no longer the app.

The useful parts of software can be decomposed into capabilities. A host can call those capabilities when the user asks for something, render the right interface inline, and save that interface when it becomes useful enough to reuse.

## Why this matters

This changes the unit of software. The unit is no longer a completed app in a store. The unit is a capability that can participate in many personal interfaces.

That makes it possible to target:

- native MCP App hosts,
- ordinary web pages through WebHost,
- iOS apps and widgets,
- macOS and Windows surfaces,
- static sites,
- future endpoint-packaged local deployments.

## What developers build

Developers still build real software. They define capabilities, action contracts, validation, permissions, data access, renderable views, and the rules that make those pieces safe and useful.

What changes is the packaging. Instead of forcing every capability into a single fixed destination, developers make capabilities available to hosts. The host and user decide how those pieces should become an interface for the current job.

## What users get

Users get personal interfaces: assembled surfaces that match intent, context, and timing.

Some appear once inside a chat. Some get saved and recalled like widgets. Some become shared team workflows. The important point is that users do not need to wait for developers to manually compose every final screen in advance.

## The promise

The Clientless promise is not simply "write once, run anywhere." That promise has been overused.

The Clientless promise is: publish capabilities once, let many hosts assemble them, and let users create the interfaces they actually need.

