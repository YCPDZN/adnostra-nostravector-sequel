# AD-NOSTRA
### Anno Domini 2137 · After the Catharsis

An MMO RPG set in 2137, ten years after the Catharsis was defeated at Carax. You're a new **Ascendant**, sworn to **Croxian Mascar, Governor of Ad-Nostra**, a city on the African savannah, and your job is to clear out the Remnants the war left behind.

## Timeline
| Year | Event |
|---|---|
| 2000 | Nico is born |
| 2030s | Nico is frozen cryogenically |
| 2069 | Orion Mascar is born |
| 2080–2095 | The Third World War. Thomas Hawthorne is Orion's apprentice and fights alongside him, then makes his own path after the Siege of Harbin, China |
| 2094 | Croxian Mascar is born in the winter of Kaliningrad, to Orion and Talina Mascar (née Alvarez) |
| 2123 | Nico wakes. Afterwards she meets Croxian Mascar, long before he meets Malia de Toro (now Malia Mascar); one night together, and she conceives his son. She marries Daniel Brown |
| 2125 | Orion Brown is born. While Nico is in labour, Orion Mascar and the Wanderer kill a lion; she names her son after Orion and after Orion's Belt |
| 2125 | Croxian serves in Terra Imperia, Hawthorne's far-right faction, then breaks away with the help of a wanderer |
| 2127 | The Catharsis under Lord Zark invades the Milky Way. On the planet Carax, in Sagittarius A*, Croxian and the Wanderer defeat Lord Zark and the Catharsis-turned Thomas Hawthorne |
| 2137 | The game. Croxian Mascar is Governor of Ad-Nostra |

The Salt Lantern is the cantina in Ad-Nostra where Orion Mascar fought Daniel Brown. Daniel's wife, Nico Brown, still comes to stand by the plaque.

## Play
Double-click **`index.html`**. It runs in Chrome, Edge or Firefox with no install and no server. Your progress saves in the browser by itself.

You can keep as many Ascendants as you like. **NEW ASCENDANT** adds one to the registry instead of replacing the last, **CONTINUE** picks up the one you played last, and **ASCENDANTS** lists them all: play any of them, make one a Resident, recall a Resident, or delete one. A save from an earlier version moves into the registry the first time you open the menu.

It also plays on phones and tablets: host the folder anywhere static (or open it from a local server) and visit it in the mobile browser. Landscape is best; portrait works too. On touch devices the game switches to on-screen controls and a lighter render load.

## Controls
| Key | Action |
|---|---|
| W A S D | Move (Shift to sprint) |
| Space | Jump; again in the air for a flip; hold on the way down to aim-glide |
| Q | Slide when moving fast (hold), dodge roll when slow |
| Q + Space | Bullet jump (slide, then jump) |
| Mouse drag / wheel | Turn the camera / zoom (right-drag also turns your character). The camera sits close, framed on your character over the right shoulder; scroll out for a wider view |
| Click, Tab | Pick a target / cycle targets |
| 1–4 | Class abilities |
| 5 | Concord Medkit |
| E | Talk / interact / pick up shards |
| Enter | Chat (`/help`, `/who`, `/party`, `/dismiss`, `/dance`, `/salute`, `/played`, `/loc`) |
| C | Character sheet |
| M | Map of Ad-Nostra |
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
| ✉ ☰ ⌖ ⚒ ❚❚ | Chat / character sheet / map / satchel, skills and crafting / menu |
| Gold prompt at a rock, tree or wreck | Gather |
| Tap an item in the satchel | Read what it is |
| While building: tap / press and hold | Place a block / take a block back |
| While building: block bar, REMOVE, DONE | Pick a block, switch to removing, stop building |

The game fits phones in either orientation. While you build, the block bar takes the hotbar's place; on short landscape screens the satchel shows ten slots per row and the map puts its legend beside the chart.

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
- In the bigger city, static batches out in the fog (beyond about 365 m) are hidden, and walls are kept in a spatial grid so collision checks stay cheap however large the city gets. The camera and the minimap look up walls through the same grid.
- The street grid (thousands of buildings, lamps, palms, awnings and stalls) is written straight into one buffer per material per 300 m cell as it is generated, with untextured pieces sharing a few vertex-coloured materials, so the whole city adds only a few dozen draw calls on screen. Once the GPU has those buffers, the copies in memory are freed.
- The crowds are three instanced draw calls for every townsperson together, and the sky traffic is two.
- Only the sun and sky light the world, because every extra light costs every pixel. Glows come from emissive materials and bloom.
- **Dynamic resolution** (on by default in Settings) renders fewer pixels when frames run long and steps back up when there is headroom. Effects, shadows and anti-aliasing stay on.
- **Show FPS** in Settings displays frame rate, current resolution and draw calls.
- Dynamic resolution only resizes the off-screen render targets, never the canvas, so a step doesn't flash the screen. Resize events (a phone's address bar, rotation) are applied at most once a frame, and skipped when nothing changed.
- The sun's shadow follows you in whole shadow-map texels, so shadow edges don't crawl or shimmer as you move.
- **On phones and tablets:** 2x MSAA instead of 4x, cheaper shadow filtering, bloom computed at half size, a deeper camera near plane (more depth precision, so roads and pavements don't z-fight and flicker), no backdrop blur behind panels, and frames capped at 60 fps on 90/120 Hz screens so the phone runs cooler and doesn't throttle.

## The world
Ad-Nostra is a proper city now, and four times the size it was: the rampart stands about 940 m from the plaza, twice as far out as before. Where the old wall stood (470 m) there is now the **Rampart Ring**, a palm boulevard. Inside it are the old districts and the **Outer Wards**; outside it the street grid runs all the way to the new wall, and in the south the city meets the sea at the **Harbour**. Press **M** for the map (click it to switch between the whole city and the old city).

### The streets
- A street every 64 m and an avenue every 256 m, with pavements, kerbs, zebra crossings, street lamps, and palms in planters along the avenues.
- City blocks are cut into lots, and every lot has a building that comes right up to the pavement: a ground floor of shopfronts with signs and lit windows, striped awnings over the pavement, neon blade signs, and on the roofs water tanks, solar panels, aerials and domes. Here and there a block is a park (acacias, a baobab or a fountain, benches, grass) or a tiled square with a fountain and palms.
- The city is generated from a fixed seed, so it is the same city every time you log in, and you start where you logged out.
- Each part of the new city has its own look: **Northgate** (north) has the glass towers, **Sunrise Ward** (east) and **Kopje Heights** (west) are sandstone and terracotta blocks, and the **Dhow Quarter** (south, by the sea) is low whitewashed and coral-stone buildings with domes.
- **Townsfolk** in robes and headwraps walk the pavements and cross at the zebra crossings, browse the market, wander the quays and the promenade, and ride the ferry. **Hover-cars** run the sky lanes over the avenues.
- The **seafront promenade** runs along the shore either side of the Harbour, with palms, benches and a railing over the water.

### Power levels (0–9)
Like RuneScape: Dragonwilds, every Ascendant, district and Remnant has a **power level** from 0 to 9.
- **Yours comes from your armour.** New Ascendants start in Recruit Weave (power level 1). Quartermaster **Ilse Varn** sells the next tier each time, up to **Carax Plate** (power level 9); each tier needs a minimum character level and gives +20 health. Older saves start at power level 1–3 depending on their level.
- **Fighting above your power level is brutal.** For each level a Remnant is above you, it hits you about 55% harder and your hits on it land at 60% strength. Two or more levels above means it kills you in a few hits. Being above a Remnant helps, but not as dramatically.
- **The colour of the ◆ tells you where you stand**: green below you, yellow at your level, orange one above, red with a ☠ two or more above. You see it on Remnant nameplates, the target frame, the zone banner, the minimap and the map. Entering a district far above you posts a warning in chat.
- Orion is power level 4: he clears the Dry Reservoir, the Tenements and the Rail Yards, and is an even match in the Crater, as far as he goes. Malia is power level 3: the Rail Yards are as far as she hunts, and she has to work for it there. Nico Brown is power level 3 too, and hunts the same ground. Their power level shows next to their names, on the minimap and on the map, along with your Residents'.
- **Croxian Mascar** (power level 7, above everything in the city) almost never leaves his dais. But very rarely, when Malia is close to falling with Remnants on her, he appears beside her in a flash of Carax light, draws them onto himself and cuts them down with sweeps of his scythe, then goes straight back to the plaza before the Concord notices. It is a one-in-five chance each time she is in real trouble, and once he has done it he will not slip away again for at least fifteen minutes. He only comes for her, never for you. If you aren't close enough to see it, someone in world chat will tell you about it.
- **He can fall out there.** If the Governor is cut down defending Malia and Malia falls too, **Orion Mascar** loses his temper: for a little while he is **power level 9**. He arrives in a burst of gold light beside the Remnant that put his son on the ground, hits twice as hard and twice as fast, and does not stop until it, and anything else still standing where Croxian fell, is gone (or 40 seconds pass). Then he is an old man again, back at the power level he was before, and goes back to what he was doing (or to your side, if he was with you). Croxian gets back up and returns to his dais.
- **Balance: the Mascars are friends, not a crutch.** Only one of them will fight at your side at a time (the other keeps watch over the city), though Nico Brown or a Resident can make up the rest of your company. They hit about as hard as a strong Ascendant of their level, not much harder, and they grow by 4% a level. A kill a Mascar (or Nico) lands on a Remnant you never struck yourself is worth half the experience and credits. Their help is rationed (see the cooldowns above), and when they fall they are out for 45 seconds.
- **Orion, Malia, Nico and your Residents level up** from the Remnants they kill, the way you do (to level 30), getting tougher and hitting harder as they go. Every five levels past 15, Orion, Malia and Nico also gain a power level, and start hunting the districts it opens up. Their progress is kept for the realm; a Resident's is kept in their own record, so a recalled Resident comes back at the level they reached. Simulated Ascendants hunt in districts that suit their own power level, and Residents use the armour they retired in.

| District | Where | Power level |
|---|---|---|
| Concordia Plaza, and the whole city | the plaza is on the harbour, in the south | sanctuary (you start and respawn here) |
| Ad Nostra: Frontier (the old plaza) | centre | not a sanctuary: the edge of the wilds |
| The Dry Reservoir | just north of Concordia Plaza | 1 |
| The Ashfall Tenements | west, Outer Wards | 2 |
| The Sunken Rail Yards | east, Outer Wards | 3 |
| The Catharsis Crater (boss: 5) | far north | 4 |
| Echo Plains | west of the Frontier | 5 |
| Scorched Veld | east of the Frontier | 6 |
| Tuldran's Roost (dragon: Tuldran) | far west, beyond Kopje Heights | 8 |
| Taiman's Dune (dragon: Taiman) | far east, beyond Sunrise Ward | 8 |

Power levels run outward from Concordia Plaza: the Dry Reservoir beside it is where new Ascendants cut their teeth, and the Scorched Veld, deepest in the old city, is the deadliest. Remnant levels follow (◆1 levels 1–3 up to ◆6 levels 17–21). The outer-ward Remnants keep their looks everywhere, but a Reservoir Brute in the gentlest district is only as tough as an ordinary Hollowed of its level; the variants grow into their extra toughness as the power level rises.

### Getting around
- **Avenues** cross the whole city every 256 m; the central one runs south through the Lantern Market, past the Dry Reservoir, down to the Harbour.
- **Concord tram stops** stand in the plaza, at each district, in Northgate, Sunrise Ward and Kopje Heights, and at both piers of the Harbour. Walk past a stop to add it to your network, then press E at any stop to ride to any stop you've found. Your companions ride with you. You can't board in combat.
- **The ferry Talina** crosses the harbour basin between the West Pier and the East Pier, all day and for free. She waits alongside for 18 seconds with her ramp down, then crosses in 40. Walk aboard and stand anywhere on deck: she carries you across, and her rails keep you aboard until she is alongside at the other pier. Your companions come aboard with you. The timetable at each pier (E) tells you where she is and when she'll be back.
- **M** (or ⌖ on touch) opens the map of Ad Nostra: an adventurer's map as the Concord would draw it in 2137. The ground is painted like an old map (every building outlined in stone, the glass towers rimmed in cyan, the streets, the districts in their own ground, the sea with lit waves, the rampart with its gold light strip), laid on a holographic survey slate with a lettered grid, lit corner brackets, a compass ring, hexagonal beacons for the trams, the ferry, the Salt Lantern, the market and the lighthouse, and the title on a lit plate. It also shows the streets, the sea, districts coloured by danger for your power level, tram stops, the ferry, the Mascars, your companions, your objective and you. Click (or tap) the map to zoom in on the old city.

### Places
- **Concordia Plaza** stands on the waterfront at the head of the harbour, between the two ferry piers. It is where you start and where you come back to when you fall. Governor Mascar stands on his dais beneath the Statue of the Unmaking, looking out over the water, and Quartermaster Ilse Varn sells medkits and armour beside him. Everyone lives here now: Orion and Malia, your Residents and the other Ascendants stroll the plaza between hunts, walk out along the streets to the districts they hunt, come back here, and get back up here when they fall. The whole city is a sanctuary now; on the map it is washed in blue.
- **Ad Nostra: Frontier** is the old plaza in the middle of the city, marked by a lit sign. It is not a sanctuary: it is the way out to the Scorched Veld, the Echo Plains and the Crater, the deadliest ground in the city. Its tram stop is on your network from the start.
- **Scorched Veld** (east of the Frontier, power level 6, lv 17–21) holds the Hollowed.
- **Tuldran's Roost** (far west, power level 8) and **Taiman's Dune** (far east, power level 8) are the lairs of two dragons sworn to the Catharsis Remnants, out past the new wards near the rampart. Each lair's door is beside a ward tram stop (Kopje Heights for the Roost, Sunrise Ward for the Dune), with a Concord warning pylon at the edge.
  - **Tuldran, the Crimson Wing** crouches on scorched, cracked rock among burnt acacias and old bones, facing east toward the city. **Taiman, the Dune Sleeper** lies half under the sand among broken columns, facing west, his long tail curled round to his right. Both are level 30, power level 8, with a ring of Catharsis spires round them.
  - **They're alive.** Both are rigged: they breathe, their tails stir, and while they fight their heads follow you as far as their necks reach. Taiman lifts himself off the sand when he wakes; Tuldran lowers his head at you with his wings flared and his jaws working. Every attack has its move (a raised foreleg brought down, Taiman's snapping jaws, rearing back before the breath, wings thrown up before the sweep, a snap of the head for a bolt), they roar when they wake and when they call up their Sworn, and when slain they collapse, then rise again.
  - **They never move.** A dragon claws whatever stands at its head, breathes down a telegraphed line of ground in front of it (get out of the red circles), sweeps the ground all round it with wing and tail, and spits bolts at anyone out of reach. It doesn't turn, so behind it only the sweep and the bolts can reach you. At 60% and 30% health it calls up three of its Sworn.
  - **Loyal to the Remnants:** the Sworn (Roost-Sworn Hollowed and Emberwing Drones in the west, Dune-Sworn Hollowed and Sandstorm Drones in the east, lv 26–30) keep each lair, and when one of them is fighting, its dragon joins in from where it lies.
  - A dragon has its own health bar at the top of the screen while it fights you. Slay one for 1,500 credits and its experience (the whole realm hears about it); it rises again five minutes later. Leave its lair and it settles and heals.
- **Echo Plains** (west of the Frontier, power level 5, lv 13–16) holds the Echo Drones.
- **The Catharsis Crater** (far north, power level 4, lv 9–12) holds a crashed Catharsis beacon-ship, its shards, and the **Remnant of the Catharsis**. Vultures circle overhead.
- **The Salt Lantern** (just south of the plaza) is a sanctuary cantina. Zuri Adeyemi keeps the bar and sells **Lantern Ale** (25 credits: +20% experience for 10 minutes). A bronze plaque in the floor marks where Orion Mascar fought Daniel Brown. Regulars drift in and out. Market stalls stand either side of its door, with lanterns strung between them.
- **The Lantern Market** (behind the Salt Lantern) is a sanctuary bazaar: rows of stalls under striped awnings selling fruit, spices, cloth, pottery, salvaged tech and lanterns, with a merchant at every stall, lantern strings over the central aisle, a gate at each end and a crowd browsing the aisles.
- **The Harbour** (south, on the sea) is the port: a stone basin with paved quays, bollards and fenders, two moles with a beacon and a turning lighthouse, cargo ships alongside the north and east quays, the fish market, the Port Authority and its clock tower, a bronze anchor where the Harbour Road meets the water, jib cranes and a gantry crane over the container yard, warehouses, dhows moored on the west quay and more under sail in the bay, gulls overhead, and the **Concord Ferry** terminals on the West and East Piers.
- **Orion Mascar** (level 15, power level 4), the Governor's father, walks the whole map with his greatsword. He strolls the plaza, heads out to the Scorched Veld, the Echo Plains, the Crater and the Sunken Rail Yards to cut down Remnants, and stops in at the Salt Lantern to stand over his plaque. Every fifth swing is a wide sweep that hits everything around him, and when you drop below 30% health with Remnants on you, he shouts them onto himself (once every 30 seconds).
- **Malia Mascar** (level 15, power level 3), the Governor's wife, hunts the Veld, the Plains and the Crater with a short energy blade, and stops in at the Salt Lantern to stand by her husband's corner table. She strikes fast, often twice, and when you fall below 40% health she heals you for 22%, once every 24 seconds (it also works on hurt companions).
- **Nico Brown**, born in 2000, frozen in the 2030s and awake since 2123, is Daniel Brown's wife and the mother of Orion Brown (born 2125; Croxian's son, from one night together long before he met Malia de Toro). She is level 15, power level 3 like Malia, and lives the way the Mascars do: she walks the city and hunts the Dry Reservoir, the Ashfall Tenements and the Sunken Rail Yards with a pair of daggers, comes to your aid when Remnants go for you, and stops in at the Salt Lantern to stand by the plaque where Orion fought her husband. Talk to her (E) to ask about the year 2000, Daniel or her son, or choose **FIGHT AT MY SIDE**: she isn't a Mascar, so she can come along with Orion or Malia. When she falls she gets back up in Concordia Plaza.
- If either of them is nearby when a Remnant goes for you, they come over and help, then go back to what they were doing. Walk up and press E to talk to them, and choose **FIGHT AT MY SIDE** to keep them with you: they follow you everywhere, attack whatever is attacking you or what you are fighting, and their kills count as yours (experience, credits, loot and quest progress). Up to three companions at once. They show under your own health frame with their health and where they are, and your companions are saved with your character. `/party` lists them and `/dismiss` (or `/dismiss malia`) sends them off.
- They can be defeated. When they are, they get back up in **Concordia Plaza** after 45 seconds, and if they were with you, they walk back out to find you.
- **Residents**: from the **ASCENDANTS** menu you can retire a character you no longer play as a **Resident of Ad-Nostra**. Residents live in the world as allies, at their own level and class and in their own visor colour: they walk the plaza, drink at the Salt Lantern, hunt the plains, come to your aid in a fight and respawn in Concordia Plaza when defeated. Talk to one to see their record, or ask them to fight at your side. **RECALL** a Resident to play them again.
- **The Sunken Rail Yards** (power level 3): a rusting freight terminus of tracks, toppled freight cars, gantry cranes and signals still blinking red. Rail-Yard Hollowed and Scrap Drones.
- **The Ashfall Tenements** (power level 2): burnt-out housing blocks you can walk into, with fires still burning. Ashfall Stalkers, fast and aggressive, and Cinder Drones.
- **The Dry Reservoir** (power level 1, just north of Concordia Plaza; its broken wall opens to the south): the city's drained basin, with a broken retaining wall, a crimson-ringed intake tower, outfall pipes and Catharsis growths in the silt. Reservoir Brutes, huge and slow, and Catharsis Sentinels.
- **Wildlife** roams the Scorched Veld and the Echo Plains: giraffes, elephants, zebras and gazelles move as herds, grazing and drifting across the plains. Zebras and gazelles bolt if you get close, and spook the rest of the herd.

## Skills, crafting and your Homestead
Alongside combat, every Ascendant has five skills that level from **1 to 99 on RuneScape's experience curve** (83 xp for level 2, 13,034,431 for 99). Your skills, satchel and home are saved with your character.

| Key | |
|---|---|
| **I** | Satchel: 28 slots, stacks of up to 999 |
| **O** | Skills: each one's level out of 99, its experience, and your total level |
| **K** | Crafting and Construction recipes |
| **H** | Build mode, at your Homestead |
| **E** | Gather at a rock, tree or wreck |

On touch, the ⚒ button opens the satchel.

**Gathering.** Walk up to a node and press E: you keep working it until it is spent (it comes back after a while), your satchel is full, or you move. Higher levels hit more often; better tools work faster. You start with a Concord pickaxe, hatchet and salvage cutter.

| Skill | Resource | Level | Where |
|---|---|---|---|
| Mining | Sandstone | 1 | Dry Reservoir |
| Mining | Iron ore | 20 | Ashfall Tenements, Sunken Rail Yards |
| Mining | Carax ore | 45 | the Crater |
| Mining | Crimson crystal | 75 | Scorched Veld |
| Woodcutting | Acacia logs | 1 | the city's parks, the Dry Reservoir |
| Woodcutting | Baobab logs | 30 | Echo Plains, Ashfall Tenements |
| Woodcutting | Ironwood logs | 60 | Scorched Veld |
| Salvage | Scrap metal | 1 | Dry Reservoir, Ashfall Tenements (Remnants drop it too) |
| Salvage | Circuitry | 25 | Sunken Rail Yards (and from tougher Remnants) |
| Salvage | Catharsis alloy | 50 | the Crater |

**Crafting** turns them into planks, glass, steel bars, lamp cores and Carax plate, and into steel (level 20+) and Carax (level 60+) tools that gather a third faster and nearly twice as fast. **Construction** turns materials into building blocks: sandstone (1), timber (5), whitewash (12), glass (20), steel (35), glowing lamp (45), Carax (65) and crimson crystal (85).

**Your Homestead** is a 32 × 32 m plot in the Dhow Quarter, by the sea, with its own tram stop (and a ⌂ on the map). Press **H** there to build, Minecraft-style: click to place the block you have selected (1–8 or the build bar), right-click to take one back into your satchel; on touch, tap to place and switch the bar to REMOVE to take blocks back. You can build 16 blocks high, walk on what you build, climb it by jumping, and walls stop you. Your house is saved with your character.

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
- `src/main.js` holds the engine, world, combat, AI, movement and UI. The city is built by `buildCity()` (street grid, blocks, buildings, the Rampart Ring and the promenade), `buildMarket()`, `buildHarbour()` and `buildFerry()`; the townsfolk and the sky traffic live under CITY LIFE. `src/soldier.js` is the Ascendant soldier: its rig, weapons and every animation, all procedural. Orion and Malia Mascar use the same skeleton, so the same animations drive them. `src/data.js` holds lore, quests and classes. `src/audio.js` makes the sound effects and in-game music in code, and plays the main menu theme.
- `assets/croxian_mascar.glb` is the Governor's model, optimised to 165k triangles. His scythe isn't part of the file: `makeScythe()` in `src/main.js` builds it in code and fixes it in his right hand, so it appears on the menu, on his dais and on the statue. `assets/model.js` is the same model embedded so the game runs from a double-click.
- `assets/ascendant_soldier.glb` is the player and Ascendant model: cut from 1.9M to 16k triangles, with textures baked onto new UVs, a 19-bone skeleton, and a 2.4k-triangle copy for distant characters. `assets/soldier.js` is the same model embedded.
- `assets/main_menu_theme.mp3` is the main menu theme. It loops on the title and character-creation screens and fades out when you enter the world.
- `tools/soldier/` is the pipeline that turned the raw model export into that asset.
- `assets/orion_mascar.glb` is Orion Mascar: cut from 2M to 110k triangles with his original textures kept, rigged with the soldier's 19-bone skeleton, with a 2.6k-triangle copy for distant rendering. `assets/orion.js` is the same model embedded. `tools/orion/` is the pipeline.
- `assets/tuldran.glb` and `assets/taiman.glb` are the dragons: each cut from 4.8M to 80k triangles with its original textures kept, and rigged (Tuldran 43 bones with a jaw, Taiman 32). Taiman's tail, which stopped short in the export, is regrown with its own baked texture. `src/dragons.js` animates them. `assets/tuldran.js` and `assets/taiman.js` are the same models embedded. `tools/dragons/` is the pipeline.
- `src/dragons.js` holds the dragons and their lairs: where the lairs are, the scenery, the Sworn, and the dragons' attacks. `main.js` hands it what it needs through `initDragons()`.
- `assets/nico.glb` is Nico Brown: cut from 4.8M to 110k triangles with her original textures kept, rigged with the soldier's 19-bone skeleton (her hair stays with her head and shoulders), with a 5.7k-triangle copy for distant rendering. `assets/nico.js` is the same model embedded. `src/nico.js` spawns her into the ally system and holds her dialogue; `tools/nico/` is the pipeline.
- `assets/malia_mascar.glb` is Malia Mascar: cut from 4.9M to 110k triangles with her original textures kept, rigged the same way, with her left hand held on her hip. `assets/malia.js` is the same model embedded. `tools/malia/` has her rig script.

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
- [x] Sound: removed the background hum and the drone shot beep; added the recorded main menu theme
- [x] Croxian's scythe: four curved blades with cyan edges on a tall pole, held in his right hand
- [x] Orion Mascar: rigged, wandering the whole map with his greatsword, and talkable
- [x] Malia Mascar: rigged, strolling the plaza and the Salt Lantern with her energy blade, and talkable
- [x] Orion and Malia at level 15: they hunt every zone, help you when Remnants go for you, can fight at your side (Orion taunts, Malia heals), and respawn in Concordia Plaza when defeated
- [x] Bigger city, phase 1: rampart moved out to 470 m, Outer Wards with three new districts (power levels 4–6), Concord trams, world map
- [x] Power levels 0–9 from armour, Dragonwilds-style: zone and enemy power levels, damage scaling, coloured diamonds and skulls, armour tiers from Ilse Varn
- [x] A city that looks like a city, four times the size: rampart at 940 m, a street grid with shopfronts, awnings, lamps and palms, the Rampart Ring, four new wards, the Harbour with the ferry Talina, the Lantern Market, townsfolk and sky traffic
- [x] Skills 1–99 on RuneScape's curve (Mining, Woodcutting, Salvage, Crafting, Construction), a satchel, crafting, and a Homestead to build on block by block
- [x] Dragons: Tuldran (west) and Taiman (east), stationary world bosses sworn to the Catharsis Remnants, in two power level 8 lairs
- [x] Dragons rigged and animated; Taiman's tail regrown
- [x] Nico Brown: rigged, power level 3 like Malia, roaming, hunting and able to fight at your side
- [ ] Bigger city, phase 2: the Frontier beyond the rampart, with power level 7–9 districts and bosses
- [x] Character registry with multiple Ascendants, and Residents: retired characters who live in the city as allies
