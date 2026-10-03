---
layout: ../../layouts/ProjectLayout.astro
title: 'Kingdom Hearts II Crowd Control'
endDate: June 2025
startDate: November 2023
sortDate: 06-13-2025
description: 'A crowd control pack to support live viewer interactions with Kingdom Hearts II'
author: 'Nicklas Mooers'
tags: ["Twitch", "LowLevel", "Modding"]
youtubeSrc: https://www.youtube.com/embed/58Sejj-6JCY?si=-oY6jR8qNUBHzK7U
quickLink:
    href: https://crowdcontrol.live/games/kh2fm
    label: View Pack
public: true
---

# Background
Crowd Control is a service that connects live viewers to the game you are playing and gives them *control* over things like health, magic, spawning enemies, or taking away equipment. The service provides monetization opportunities for streamers and unique and chaotic moments that aren't possible in a regular playthrough.

# The Story

## Beginning
Back in September of 2025, after playing Ocarian of Time Crowd Control, I had the thought that there really should be a crowd control pack for the Kingdom Hearts community. I wanted creators in the space to have another way to monetize their streams, and more ways to engage viewers while playing through the game. I started off by researching whether or not anyone else had already done this or was working on anything similar. That's when I found that WaterKH, a Kingdom Hearts mod developer that had made some big mods like Kingdom Hearts 3 Randomizer, had been working on a standalone version of crowd control for Kingdom Hearts 2 (KH2). I reached out to them to see if they would be interested in working with me on porting their project to work with the Crowd Control service, since it had built in support for monetization, charity fundraising, and viewer interaction. We could focus on making the pack, and let Crowd Control handle the things it already does well. WaterKH agreed to working together, and we went on a roughly year and a half journey of working on this in our free time.

## Development

Working on Crowd Control involved a lot of memory scanning and slowly building up an understanding of how this game from 2001 was put together at a low level. I also got lucky that WaterKH had already found a lot of values. I loved the process of sitting there scanning memory for values and changes in order to find the values I needed and it was a very different experience from the higher level programming and architecture work I typically do.

We also worked with the Crowd Control team to better understand how to develop a Crowd Control pack and make sure that effects would be blocked or refunded if they weren't possible, that way viewers had the best experience and didn't end up wasting the Crowd Control coins. It was great getting to work with a team of people making a great product from the perspective of a community developer.

## Release

The pack was released on June 13th, 2026. Nicole and I hosted a launch party with a bunch of streamers that all did races with Crowd Control on to see how far they could get in an hour while their communities messed with them. We leveraged Crowd Control's connectivity to Tiltify, and the event raised $1,079 for the National Brain Tumor Society.