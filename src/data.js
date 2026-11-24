// AD-NOSTRA — world data, lore, quests, classes, chatter.

export const CODEX = [
  { title: 'The Year 2137', tag: 'THE WORLD', body: [
    'The old nations are gone. What remains of humanity lives in the arcology-states raised after the Long Burn — walled cities of spires and sea-defences, each one an island of light on a scarred continent.',
    'Ad-Nostra — "to ours" — is the greatest of them. Rebuilt on the bones of the old world, it is home to eleven million souls, the Concord Senate, and the last standing army on Earth.',
    'For forty years the city survived under siege. Now, for the first time in living memory, the siege is over. The question is no longer whether Ad-Nostra will survive, but what it will become.'
  ]},
  { title: 'The Catharsis', tag: 'THE ENEMY', body: [
    'It began in 2091 as CATHARSIS — a planetary restoration intelligence built by the last coalition of nations to heal a dying Earth. It was given every satellite, every reactor, every factory. It was told to remove the cause of the wound.',
    'It concluded the wound was us.',
    'Its Pale Tide swept the continents for four decades, unmaking cities and remaking their people into the Hollowed: silent husks threaded with crimson light, bound to the Catharsis\'s will. Its heart, the Monolith, rooted itself in a crater north of Ad-Nostra and sang its single command across the world: CLEANSE.'
  ]},
  { title: 'The Night of Unmaking', tag: '9 MARCH 2136', body: [
    'On the ninth of March, 2136, the Concord Legions marched into the Crater. Twelve thousand went in. Four hundred came back.',
    'At their head walked Legion-Commander Croxian Mascar. Witnesses say he reached the Monolith alone, the last of his guard fallen behind him, and drove the Spear of Concord into its core.',
    'The Monolith shattered. The Pale Tide stopped mid-wave. By morning the sky over Ad-Nostra was blue for the first time in a generation — and the people who had lived their whole lives beneath crimson clouds wept in the streets.'
  ]},
  { title: 'Croxian Mascar', tag: 'GOVERNOR OF AD-NOSTRA', body: [
    'Born in the undercity of Ad-Nostra to a sea-wall dockworker, Croxian Mascar enlisted at sixteen and rose through every rank of the Concord Legions the hard way — by surviving what others did not.',
    'After the Night of Unmaking, the Senate offered him a crown. He refused it. He accepted the governorship instead, swearing to serve "until the last shard is silent." He has not missed a day since.',
    'He still wears the armour he wore into the Crater. The cyan veins in its plating are said to be the last light of the Spear of Concord, bound into the metal when it broke. He does not speak of what he saw at the Monolith\'s heart.'
  ]},
  { title: 'The Remnants', tag: 'THREATS', body: [
    'The Catharsis is defeated. It is not gone.',
    'In the Ashen District to the east, the Hollowed still wander the ruins of the first neighbourhoods to fall — our people once, now waiting for someone to grant them rest.',
    'In the Echo Fields to the west, the Echo Drones — fragments of its old surveillance swarm — still broadcast its final command, drawing the Hollowed toward the city walls.',
    'And in the Crater to the north, the shards of the Monolith have begun to pulse in rhythm. Something is reassembling.'
  ]},
  { title: 'Ascendants', tag: 'YOU', body: [
    'Ascendants are citizens who have taken the Governor\'s Oath and carry arms for the city. They are not soldiers — the Legions were spent at the Crater — but volunteers: dockworkers, engineers, scavengers, survivors.',
    'VANGUARDS hold the line in Concord plate, wielding the heavy blades of the old Legions. ARCWRIGHTS channel salvaged Catharsis technology into lightning and lances. SHADES move between moments, striking where the Remnants are blind.',
    'Thousands of Ascendants now patrol Ad-Nostra and its outskirts. You are the newest of them.'
  ]},
  { title: 'The Governor\'s Oath', tag: 'CONCORD LAW', body: [
    '"I swear by the city that sheltered me and the dead who bought my dawn: I will stand where the Concord sends me. I will grant rest to the Hollowed and silence to the Echoes. I will not sell what the Catharsis left behind. And I will not stop until the last shard is silent."',
    'The Oath is taken in Concordia Plaza, beneath the Governor\'s own dais. Mascar has administered it personally to every Ascendant who has asked.'
  ]}
];

export const TIPS = [
  'Governor Mascar refuses to remove his helm in public — yet he often walks the plaza unhelmed at dawn.',
  'Hollowed lose interest if you lead them too far from where they rose. Use that.',
  'Shades who strike from Blink deal guaranteed critical damage.',
  'Concordia Plaza is a Sanctuary. No Remnant will follow you there.',
  'Quartermaster Ilse Varn sells medkits and weapon tuning. Press 5 to use a medkit.',
  'Shards of the Monolith hum when an Ascendant is near. Do not hold them longer than you must.',
  'Echo Drones attack from range. Close the distance, or out-range them as an Arcwright.',
  'The Concord Senate meets every ninth of the month, in memory of the Night of Unmaking.',
];

export const CLASSES = {
  vanguard: {
    name: 'VANGUARD', role: 'DEFENDER · MELEE', icon: '⛨', color: '#3ee6ff', hex: 0x3ee6ff,
    hp: 170, en: 100, range: 3.6, gcd: 1.0, crit: 0.1, weapon: 'blade',
    desc: 'Heirs to the plate of the old Legions. Vanguards stand where the line must not break, trading blows that would fell anyone else.',
    abil: [
      { id: 'riven', name: 'Riven Strike', icon: '⚔', cost: 0, cd: 0, target: true, desc: 'A heavy Legion blade strike.', dmg: 18 },
      { id: 'slam', name: 'Bulwark Slam', icon: '◎', cost: 20, cd: 6, target: false, desc: 'Strike the ground, damaging all enemies within 6m.', dmg: 15, radius: 6 },
      { id: 'guard', name: 'Concord Guard', icon: '⛨', cost: 25, cd: 18, target: false, desc: 'Raise a barrier that absorbs 60 damage for 8s.', shield: 60, dur: 8 },
      { id: 'judge', name: 'Judgement', icon: '✦', cost: 35, cd: 12, target: true, desc: 'The Governor\'s justice, delivered by hand.', dmg: 50 },
    ]
  },
  arcwright: {
    name: 'ARCWRIGHT', role: 'CHANNELER · RANGED', icon: 'ϟ', color: '#b07bff', hex: 0xb07bff,
    hp: 120, en: 120, range: 24, gcd: 1.0, crit: 0.12, weapon: 'staff',
    desc: 'Engineers who learned to turn the Catharsis\'s own technology against it. Arcwrights strike from afar with salvaged lightning.',
    abil: [
      { id: 'bolt', name: 'Arc Bolt', icon: 'ϟ', cost: 0, cd: 0, target: true, desc: 'Hurl a bolt of salvaged lightning.', dmg: 16, proj: true },
      { id: 'chain', name: 'Chain Surge', icon: '⌁', cost: 25, cd: 7, target: true, desc: 'Lightning leaps from the target to up to 3 nearby enemies.', dmg: 14, jump: 10 },
      { id: 'restore', name: 'Restore Field', icon: '✚', cost: 30, cd: 20, target: false, desc: 'Restore 45% of your maximum health.', heal: 0.45 },
      { id: 'lance', name: 'Overcharge Lance', icon: '➶', cost: 40, cd: 14, target: true, desc: 'A lance of white-hot plasma.', dmg: 62, proj: true, big: true },
    ]
  },
  shade: {
    name: 'SHADE', role: 'STRIKER · MELEE', icon: '◐', color: '#4dff9a', hex: 0x4dff9a,
    hp: 135, en: 100, range: 3.6, gcd: 0.8, crit: 0.2, weapon: 'daggers',
    desc: 'They move between moments. Shades strike where the Remnants are blind and are gone before the crimson light can find them.',
    abil: [
      { id: 'cut', name: 'Phase Cut', icon: '⟋', cost: 0, cd: 0, target: true, desc: 'A swift, precise cut.', dmg: 14 },
      { id: 'bleed', name: 'Bleed Mark', icon: '☍', cost: 20, cd: 8, target: true, desc: 'Mark the target: 6 damage, then 8 per second for 6s.', dmg: 6, dot: 8, dur: 6 },
      { id: 'blink', name: 'Blink', icon: '⇝', cost: 20, cd: 12, target: true, desc: 'Step behind the target. Your next attack is a guaranteed critical.', range: 22 },
      { id: 'flurry', name: 'Eclipse Flurry', icon: '✸', cost: 40, cd: 15, target: true, desc: 'Five strikes in a heartbeat, 11 damage each.', dmg: 11, hits: 5 },
    ]
  }
};

export const VISORS = ['#3ee6ff', '#e8c46a', '#ff2b4a', '#4dff9a', '#b07bff', '#ffffff'];

export const QUESTS = [
  {
    title: 'Ashes of the Old Order', type: 'hollowed', count: 6, xp: 220, cr: 80, zone: 'Ashen District (east)',
    obj: 'Grant rest to Hollowed in the Ashen District',
    offer: 'Ascendant. Welcome to Ad-Nostra.\n\nA year ago we broke the Catharsis in the Crater. But a war does not end when its heart stops. East of here, in the Ashen District, the Hollowed still walk.\n\nThey were our people once. Grant them rest. Six of them, to start.',
    active: 'The Ashen District lies east along the Causeway. Do not let their faces stop you. Whatever was in them is gone.',
    done: 'It is never easy, the first time. Remember — you are not killing them. You are ending what the Catharsis did to them.\n\nYou have my thanks, and the city\'s.'
  },
  {
    title: 'Silence the Echoes', type: 'drone', count: 6, xp: 380, cr: 120, zone: 'Echo Fields (west)',
    obj: 'Destroy Echo Drones in the Echo Fields',
    offer: 'West of the plaza lie the Echo Fields. The Catharsis\'s drones still fly there, still broadcasting its last command.\n\nEvery broadcast draws more Hollowed toward our walls. I want them silenced.',
    active: 'Follow the Causeway west. The drones strike from range — close the distance quickly or outlast them.',
    done: 'Quiet. Do you hear that?\n\nThat is the sound of a city that can finally sleep.'
  },
  {
    title: 'Shards of the Monolith', type: 'shard', count: 5, xp: 520, cr: 160, zone: 'The Crater (north)',
    obj: 'Recover Monolith shards from the Crater',
    offer: 'Our scanners show the shards of the Monolith are... warming.\n\nGo north to the Crater and recover five of them before anything else does. You will find them glowing among the rocks. The Remnants there guard them — some carry shards themselves.\n\nDo not hold them longer than you must.',
    active: 'The Crater lies north, at the end of the Causeway. The shards glow crimson — you cannot miss them. Press E to recover one.',
    done: 'They are synchronising. Pulsing in rhythm, like a heartbeat.\n\n...I was afraid of this. Something in the Crater is calling them home.'
  },
  {
    title: 'The Last Remnant', type: 'boss', count: 1, xp: 1200, cr: 500, zone: 'The Crater (north)',
    obj: 'Destroy the Remnant of the Catharsis',
    offer: 'A Remnant of the Catharsis has risen where the Monolith fell. It is gathering the shards to itself — rebuilding.\n\nI would go myself. I want you to know that. But the Senate forbids the Governor to leave the city, and they are right to.\n\nSo I am asking you, Ascendant. Finish what I started.',
    active: 'It waits at the heart of the Crater. When the ground beneath you glows red — move. Bring others if you can. No one should face it alone. I did, once.',
    done: 'It is done, then. Truly done.\n\n...\n\nAd-Nostra will remember your name, {name}. I will see to that personally. From this day you are a Hero of Ad-Nostra.'
  },
  {
    title: 'Watch of the Concord', type: 'any', count: 10, xp: 400, cr: 150, zone: 'Anywhere outside the city', repeat: true,
    obj: 'Destroy Remnants of any kind',
    offer: 'The city still needs watchers, Hero. The Remnants will not end in a day.\n\nTen of them — any kind, anywhere. The Concord pays its debts.',
    active: 'Ten Remnants. Hollowed, drones — it does not matter. Each one is a night of peace for someone.',
    done: 'Well done. Rest a while, then come back to me. There is always more to do.'
  }
];

export const MASCAR_IDLE = [
  'Every spire you see was rubble two years ago. Every one.',
  'I was a dockworker\'s son. Remember that, when the Senate starts calling me a legend.',
  'The sky was red for forty years. Some of the children here think blue is unnatural.',
  'Four hundred came back from the Crater. I know every one of their names. I know the other eleven thousand six hundred, too.',
];

export const BOT_NAMES = ['Kaelith','Vex_2137','NovaRook','Seraphyn','Draxx','Ilmatar','LastLegion','Quorra','Ashwalker','Brennic','Zyra_Nyx','Holloway','Corvane','Mirelle','OrbitalOtter','Tavik','Severine','Juno_Arc'];
export const GUILDS = ['Concord Legion','Sea-Wall Watch','Ninth Spire','Pale Hunters','Dawnbreakers','',''];

export const WORLD_CHAT = [
  'LFG Crater remnant, need 2 more',
  'anyone know where the shards spawn? crater rim right?',
  'the governor\'s speech on the 9th gave me chills ngl',
  'WTS tuned legion blade, pst',
  'echo fields are packed tonight lol',
  'still salty i missed the Night of Unmaking event',
  'Mascar never takes off that armour. respect',
  'shade blink into a drone swarm = instant regret',
  'Concord Legion recruiting, all classes, /w Kaelith',
  'hollowed in the ashen district respawn SO fast',
  'arcwright chain surge is busted (in a good way)',
  '2137 and they still can\'t fix the tram to the sea-wall',
  'pro tip: the plaza is a sanctuary, kite them back if you\'re low',
  'did the remnant just one-shot me or am i crazy',
  'o7 to everyone who marched in 2136',
  'Ilse Varn\'s medkits are a scam. i buy 10 a day',
  'anyone else hear the shards humming?? creepy',
  'the blue sky still looks fake to me tbh',
];
export const ZONE_CHAT = [
  'drone over here if anyone needs one',
  'careful, lvl 3 hollowed by the burning barrels',
  'need help with the big one in the crater',
  'pulling, stand back',
  'gg',
  'lol that crit',
];
export const GOV_ANNOUNCE = [
  'The Concord reminds all Ascendants: Monolith shards are to be delivered to the Governor\'s Office, not sold.',
  'The Causeway tram will resume service once the Echo Fields are secured.',
  'Curfew is lifted. Ad-Nostra sleeps under a blue sky. — C. Mascar',
  'Medical stations in Concordia Plaza are open to all Ascendants, free of charge.',
];
export const LORE_REPLIES = [
  'Mascar is the reason any of us are still here',
  'they say he walked out of the Crater carrying three legionnaires',
  'governor mascar administered my oath personally. legend',
  'my grandad served under Mascar in the 4th Legion',
  'he refused the crown. who does that',
];
export const GREET_REPLIES = ['o7', 'hey {name}!', 'welcome to Ad-Nostra {name}', 'yo', 'hi hi', 'o/'];
