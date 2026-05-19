---
title: The Clientless Thesis
description: Why backend-composed, host-rendered applications are the next software platform shift.
---

Most application stacks still assume the frontend is the app. The backend stores data and exposes APIs. The client owns routing, UI composition, interaction state, and a large share of product behavior.

Clientless reverses that assumption.

The backend becomes the product composer. It can use databases, files, models, tools, workflows, and services in whatever architecture makes sense. It emits a json-render stream that describes the interface the user should see now.

The host renders that stream.

## Why this matters

This changes the portability boundary. Instead of porting an app by rewriting the frontend for every surface, developers can port a host adapter and registry once. The product surface remains upstream.

That makes it possible to target:

- native MCP App hosts,
- ordinary web pages through WebHost,
- iOS apps and widgets,
- macOS and Windows shells,
- static sites,
- future endpoint-packaged native deployments.

## What does not change

Clientless does not mean no frontend code exists.

Frontend code still matters in renderers, component registries, accessibility, animation, platform capabilities, and host shells. The difference is that the root product interface is no longer a hand-built DOM tree. It is a validated stream of UI data.

React can still power a web registry. Swift can power an iOS registry. Native desktop code can power a desktop shell. The product contract stays the same.

## The promise

The promise is not simply "write once, run anywhere." That promise has been overused.

The Clientless promise is stricter: compose once on the backend, render through many hosts, and keep the platform-specific shell as small as possible.

