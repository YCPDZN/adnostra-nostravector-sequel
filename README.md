# AD-NOSTRA
### Anno Domini 2137 · After the Catharsis

An MMO RPG set one year after the defeat of the Catharsis. You're a new **Ascendant**, sworn to **Croxian Mascar, Governor of Ad-Nostra**, and your job is to clear out the Remnants the war left behind.

## Play
Double-click **`index.html`**. It runs in Chrome, Edge or Firefox with no install and no server. Your progress saves in the browser by itself.

## Controls
| Key | Action |
|---|---|
| W A S D | Move (Shift to sprint, Space to jump) |
| Mouse drag / wheel | Turn the camera / zoom (right-drag also turns your character) |
| Click, Tab | Pick a target / cycle targets |
| 1–4 | Class abilities |
| 5 | Concord Medkit |
| E | Talk / interact / pick up shards |
| Enter | Chat (`/help`, `/who`, `/dance`, `/salute`, `/played`, `/loc`) |
| C | Character sheet |
| Esc | Menu |

## The world
- **Concordia Plaza** is a sanctuary. Governor Mascar stands on his dais beneath the Statue of the Unmaking, and Quartermaster Ilse Varn sells medkits and upgrades.
- **Ashen District** (east, lv 1–3) holds the Hollowed.
- **Echo Fields** (west, lv 2–4) holds the Echo Drones.
- **The Catharsis Crater** (north, lv 4–7) holds the shattered Monolith, the Monolith shards, and the **Remnant of the Catharsis**.

## Classes
- **Vanguard**: plate-armoured defender with heavy blade strikes, a ground slam and a barrier.
- **Arcwright**: ranged channeler with arc bolts, chain lightning, a self-heal and the Overcharge Lance.
- **Shade**: melee striker with bleeds, Blink (the next hit is always a critical) and Eclipse Flurry.

## Quest line, from the Governor
1. Ashes of the Old Order
2. Silence the Echoes
3. Shards of the Monolith
4. The Last Remnant (earns the title *Hero of Ad-Nostra*)
5. Watch of the Concord (repeatable)

## About the "MMO" part
The other Ascendants in the world are simulated. They have names, guilds and classes, they hunt Remnants, they die and respawn, and they chat and answer you. Real multiplayer would need a game server.

## Project files
- `index.html` is the game page and UI.
- `game.js` is the compiled game, built from `src/`.
- `src/main.js` holds the engine, world, combat, AI and UI. `src/data.js` holds lore, quests and classes. `src/audio.js` makes all the music and sound in code.
- `assets/croxian_mascar.glb` is the Governor's model, optimised to 165k triangles. `assets/model.js` is the same model embedded so the game runs from a double-click.

To rebuild after editing `src/`, run:
```
npm install
npm run build
```
