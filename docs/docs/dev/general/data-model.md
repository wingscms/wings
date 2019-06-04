---
title: Data Model
---

Here's a quick rundown of the different types of resources available in the Wings API. You can also poke around in the GraphQL playground in your project dashboard if you tap the menu icon.

## Node

`Node`s are generally represented by single views in an application. For example, a `Petition` is a `Node`, and can be represented by a single petition webpage. However, how you structure your application is entirely up to you.


# Publishing

## Entry

All `Entry` is a type of `Node`, and `Entry` instances have a `type` of either `article` or `page`. (custom types will be available in a future release) Entries have a mobiledoc editor for rich content. (see [Editor](../publishing/editor.md) for more information)

# Campaigns

Your Wings project has a constituent database that you can fill up using different types of campaigns.

## Petition

A `Petition` is a type of `Node` that allows you to gather signatures.

## Event

An `Event` is a type of `Node` that allows you to let your constitents sign up for an event.

## Fundraiser

A `Fundraiser` is a type of `Node` that allows you to do fundraising. All submissions end up in your contituent database, and payment is handled by Wings commerce.

