# AD-NOSTRA
### Anno Domini 2137 · After the Catharsis

An MMO RPG set in 2137, ten years after the Catharsis was defeated at Carax. You're a new **Ascendant**, sworn to **Croxian Mascar, Governor of Ad-Nostra**, a city on the African savannah, and your job is to clear out the Remnants the war left behind.

## Timeline
| Year | Event |
|---|---|
| 2069 | Orion Mascar is born |
| 2080–2095 | The Third World War. Thomas Hawthorne is Orion's apprentice and fights alongside him, then makes his own path after the Siege of Harbin, China |
| 2094 | Croxian Mascar is born in the winter of Kaliningrad, to Orion and Talina Mascar (née Alvarez) |
| 2125 | Croxian serves in Terra Imperia, Hawthorne's far-right faction, then breaks away with the help of a wanderer |
| 2127 | The Catharsis under Lord Zark invades the Milky Way. On the planet Carax, in Sagittarius A*, Croxian and the Wanderer defeat Lord Zark and the Catharsis-turned Thomas Hawthorne |
| 2137 | The game. Croxian Mascar is Governor of Ad-Nostra |

The Salt Lantern is the cantina in Ad-Nostra where Orion Mascar fought Daniel Brown.

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
- **Scorched Veld** (east, lv 1–3) holds the Hollowed.
- **Echo Plains** (west, lv 2–4) holds the Echo Drones.
- **The Catharsis Crater** (north, lv 4–7) holds a crashed Catharsis beacon-ship, its shards, and the **Remnant of the Catharsis**.

## Classes
- **Vanguard**: plate-armoured defender with heavy blade strikes, a ground slam and a barrier.
- **Arcwright**: ranged channeler with arc bolts, chain lightning, a self-heal and the Overcharge Lance.
- **Shade**: melee striker with bleeds, Blink (the next hit is always a critical) and Eclipse Flurry.

## Quest line, from the Governor
1. The Turned
2. Silence the Echoes
3. Shards of the Beacon
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

## In progress
- [x] Lore retcon: new timeline, Codex, quests, Mascar's dialogue and chatter
- [x] Cantina and savannah music modes in `src/audio.js`
- [ ] Rebuild the world as African savannah at golden hour: grass, acacias, baobabs, wildlife, a sandstone city and a distant mountain. The menu scene and shared builders are drafted in `src/wip/savannah_menu_and_builders.js` but not wired in yet
- [ ] The Salt Lantern: a walk-in cantina with keeper Zuri Adeyemi, Lantern Ale (bonus XP), and the memorial plaque marking where Orion Mascar fought Daniel Brown. Its dialogue is already in `src/data.js` (`ZURI_LINES`, `CANTINA_CHAT`)
