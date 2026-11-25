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

It also plays on phones and tablets: host the folder anywhere static (or open it from a local server) and visit it in the mobile browser. Landscape is best; portrait works too. On touch devices the game switches to on-screen controls and a lighter render load.

## Controls
| Key | Action |
|---|---|
| W A S D | Move (Shift to sprint) |
| Space | Jump; again in the air for a flip; hold on the way down to aim-glide |
| Q | Slide when moving fast (hold), dodge roll when slow |
| Q + Space | Bullet jump (slide, then jump) |
| Mouse drag / wheel | Turn the camera / zoom (right-drag also turns your character) |
| Click, Tab | Pick a target / cycle targets |
| 1–4 | Class abilities |
| 5 | Concord Medkit |
| E | Talk / interact / pick up shards |
| Enter | Chat (`/help`, `/who`, `/dance`, `/salute`, `/played`, `/loc`) |
| C | Character sheet |
| Esc | Menu |

### Touch
| Gesture / button | Action |
|---|---|
| Left joystick | Move (push to the rim to sprint) |
| Drag the scene / pinch | Turn the camera / zoom |
| Tap a character | Target (tap an NPC up close to talk) |
| Hotbar | Abilities and medkit |
| Gold prompt | Talk / interact / pick up shards |
| ◎ / ⤵ / ▲ | Cycle target / slide or roll / jump (hold to glide) |
| ✉ ☰ ❚❚ | Chat / character sheet / menu |

## Movement
Every Ascendant, you and the simulated players alike, wears the same rigged soldier armour and moves like a Warframe:
- **Run** at 9 m/s, **sprint** at 14.5 m/s. Blade and dagger users sprint in the swept-back "ninja run"; Arcwrights carry the staff behind them.
- **Slide** (hold Q while moving fast) carries your momentum low along the ground. Jump out of it for a **bullet jump**: a corkscrewing, head-first launch at 21 m/s.
- **Double jump** with a front flip, then hold Space to **aim-glide** and drift down slowly.
- **Dodge roll** (Q when slow) passes through attacks untouched.
- Big drops end in a **hero landing**: one knee and one fist on the ground, with a dust ring.
- Attacks are weapon combos (forehand, backhand, overhead cleave for blades; reverse-grip stabs and a spin for daggers; staff casts), and abilities have their own moves: ground slam, guard, heal, lance.
- Your armour lights and visor glow in your chosen visor colour; each class's weapon glows in its own colour.
- The camera widens its field of view as you pick up speed.

The other Ascendants bullet-jump, flip and slide on their way out to the zones.

## Graphics and performance
The game runs at full quality on modest hardware, integrated graphics included:
- Static scenery is merged into a few dozen batches, and every distant character is drawn in a single shared batch, so the world costs roughly 250–500 draw calls instead of ~1,400.
- Grass is split into chunks that are skipped when off-screen or far away.
- Only the sun and sky light the world, because every extra light costs every pixel. Glows come from emissive materials and bloom.
- **Dynamic resolution** (on by default in Settings) renders fewer pixels when frames run long and steps back up when there is headroom. Effects, shadows and anti-aliasing stay on.
- **Show FPS** in Settings displays frame rate, current resolution and draw calls.

## The world
- **Concordia Plaza** is a sanctuary. Governor Mascar stands on his dais beneath the Statue of the Unmaking, and Quartermaster Ilse Varn sells medkits and upgrades.
- **Scorched Veld** (east, lv 1–3) holds the Hollowed.
- **Echo Plains** (west, lv 2–4) holds the Echo Drones.
- **The Catharsis Crater** (north, lv 4–7) holds a crashed Catharsis beacon-ship, its shards, and the **Remnant of the Catharsis**. Vultures circle overhead.
- **The Salt Lantern** (just south of the plaza) is a sanctuary cantina. Zuri Adeyemi keeps the bar and sells **Lantern Ale** (25 credits: +20% experience for 10 minutes). A bronze plaque in the floor marks where Orion Mascar fought Daniel Brown. Regulars drift in and out.
- **Wildlife** roams the Scorched Veld and the Echo Plains: giraffes, elephants, zebras and gazelles move as herds, grazing and drifting across the plains. Zebras and gazelles bolt if you get close, and spook the rest of the herd.

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
- `src/main.js` holds the engine, world, combat, AI, movement and UI. `src/soldier.js` is the Ascendant soldier: its rig, weapons and every animation, all procedural. `src/data.js` holds lore, quests and classes. `src/audio.js` makes all the music and sound in code.
- `assets/croxian_mascar.glb` is the Governor's model, optimised to 165k triangles. `assets/model.js` is the same model embedded so the game runs from a double-click.
- `assets/ascendant_soldier.glb` is the player and Ascendant model: cut from 1.9M to 16k triangles, with textures baked onto new UVs, a 19-bone skeleton, and a 2.4k-triangle copy for distant characters. `assets/soldier.js` is the same model embedded.
- `tools/soldier/` is the pipeline that turned the raw model export into that asset.

To rebuild after editing `src/`, run:
```
npm install
npm run build
```

## In progress
- [x] Lore retcon: new timeline, Codex, quests, Mascar's dialogue and chatter
- [x] Cantina and savannah music modes in `src/audio.js`
- [x] Rebuild the world as African savannah at golden hour: grass, acacias, baobabs, a sandstone city and a distant mountain (menu and world)
- [x] Mobile support: touch controls, responsive menus and HUD, lighter rendering on phones
- [x] Savannah polish: dusk menu, world exposure and sky, sandstone towers, low crater rocks
- [x] Performance for low-end PCs: merged static scenery, batched distant characters, chunked grass, no extra lights, dynamic resolution
- [x] Savannah wildlife: giraffes, elephants, zebras and gazelles in herds, vultures and small birds, and a procession on the menu horizon
- [x] The Salt Lantern: a walk-in cantina with keeper Zuri Adeyemi, Lantern Ale (bonus XP), and the memorial plaque marking where Orion Mascar fought Daniel Brown
- [x] Ascendant soldier model for the player and bots: rigged, with Warframe-style movement (sprint, slide, bullet jump, flip, glide, roll, hero landing) and animated combos
