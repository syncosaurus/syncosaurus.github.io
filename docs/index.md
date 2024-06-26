---
slug: /
title: Introduction
sidebar_position: 1
---

# Introduction

Syncosaurus is a performant, collaborative, real-time Javascript framework that enables developers to focus on their application's features and business logic instead of the complexities of state synchronization and conflict resolution.

Built with Cloudflare's [Durable Objects](https://developers.cloudflare.com/durable-objects/).

## Features

- A synchronization engine based on [client-side prediction and server reconciliation](https://gabrielgambetta.com/client-side-prediction-server-reconciliation.html)
- The ability to automatically persist state on a per-room basis
- A convenient CLI tool to seamlessly create, configure, manage, and deploy your collaborative application
- An [analytics dashboard](guides/analytics.md) to monitor usage and error metrics
- [Authentication](guides/authentication.md) support to secure your [rooms](core-concepts/rooms.md)
- [Presence](core-concepts/presence.md) support to broadcast ephemeral data, including live cursors and live status updates