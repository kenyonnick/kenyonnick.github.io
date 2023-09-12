---
layout: ../../layouts/ProjectLayout.astro
title: 'Galactic Wing'
endDate: Spring 2014
sortDate: 05-01-2014
description: 'Top-down 2D space arcade game'
author: 'Nicklas Kenyon'
image: '/imgs/thumbnails/galactic_wing.png' 
tags: ["Games", "Art", "Java"]
public: true
---



## The Game

Galactic Wing has two game modes: Campaign Mode and Chaos Mode. Campaign Mode features four maps of slowly moving asteroids in a designated position. 
This mode is designed to test your finesse as a pilot. Chaos Mode is a survival style mode, where the players must attempt to survive waves of asteroids, 
with each wave adding more and more asteroids to the asteroid field. 
In the hangar, players can purchase and select new ships with gold acquired from gold asteroid lodes in both Campaign and Chaos Modes (NOTE: Only the purchasing of ships was ever implemented).

### Campaign Mode

Along with the hangar, Campaign Mode was created towards the end of Galactic Wing's development and was intended as a proof-of-concept. 
As a result of its short development, only four maps were designed and implemented. The player starts at the left side of the screen and tries to make it to the right side, 
where they will then go to the next level. The player also gets five laser ammunition at every level to help blast a path through the asteroids. Maps are loaded from smaller images,
with the placement of asteroids and golden asteroids based on the location and color of each pixel in the image. Red pixels denote regular, static asteroids. Green pixels denote moving golden asteroids.

### Chaos Mode

Chaos mode was originally the only mode in the game and was inspired by Orson Scott Card's Ender's Game. 
Chaos mode places the player in a sector of space that they cannot leave and requires them to evade increasing numbers of asteroids and survive as long as possible. 
After one thousand time units, an additional wave of asteroids spawn. Chaos mode starts with five asteroids in the field and an incoming wave of seven asteroids. With each wave, 
one more asteroid joins the wave. For example, Wave 1 would add seven asteroids then Wave 2 would add eight asteroids, and then Wave 3 would add nine asteroids. 
Along with more asteroids, the player receives five laser ammunition with each wave.

### Advancement System

Players gain experience through the destruction of asteroids with their laser gun and for each level they survive in Chaos Mode. 
The levels, their associated ranks, experience amount, and the number of ships you can command are as follows:

| Level | Rank | Experience | Ships |
| :---- | :--: | ---------: | ----: |
| 1 | Pilot | 0 | 1 |
| 2 | Lead Pilot | 0 | 1 |
| 3 | Sergeant | 5,000 | 3 |
| 4 | Lieutenant | 17,000 | 4 |
| 5 | Captain | 25,000 | 5 |
| 6 | Colonel | 40,000 | 6 |
| 7 | Admiral | 65,000 | 7 |
| 8 | Commander | 100,000 | 8 |
| 9 | High Commander | 150,000 | 9 |
| 10 | Supreme Commander | 200,000 | 10 |
