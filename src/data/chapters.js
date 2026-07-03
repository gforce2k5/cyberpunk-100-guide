export const chapters = [
  {
    id: 'ch01',
    title: 'Chapter 1 — Prologue + The Rescue',
    zone: 'Watson / Little China',
    target: 'Reach Level 2, save money, learn combat, do not shop yet.',
    level: '1–2',
    build: ['Level 2: +1 Reflexes', 'Perk: Slippery'],
    route: [
      'Complete lifepath intro.',
      'Complete The Rescue slowly and loot every room.',
      'After waking up, do The Ripperdoc with Viktor.',
      'Do not continue deep into Watson cleanup yet.'
    ],
    checklist: [
      'Loot all bodies and containers during The Rescue',
      'Keep at least one katana or blade weapon',
      'Keep one pistol/SMG for backup',
      'Do not buy weapons or clothes',
      'Spend Level 2 point: Reflexes + Slippery'
    ],
    missables: ['None critical yet.'],
    dont: ['Do not waste eddies on weapons.', 'Do not start random cross-city exploration yet.']
  },
  {
    id: 'ch02',
    title: 'Chapter 2 — The Ride, The Information, The Pickup',
    zone: 'Watson lockdown',
    target: 'Prepare for Watson 100% cleanup before The Heist.',
    level: '2–6',
    build: ['+ Reflexes until Dash path opens', '+ Technical at Level 6', 'Perks: Muscle Memory, Multitasker, Dash, Glutton for War'],
    route: [
      'Complete The Ride.',
      'Complete The Information.',
      'Complete The Pickup.',
      'Inside All Foods, loot every room before leaving.'
    ],
    checklist: [
      'Finish The Information',
      'Finish The Pickup',
      'Loot All Foods thoroughly',
      'Save eddies for cyberware',
      'Unlock Dash as soon as available'
    ],
    missables: ['Chaos pistol may depend on your All Foods outcome.'],
    dont: ['Do not start The Heist yet.', 'Do not leave Watson content unfinished before Act 1 finale.']
  },
  {
    id: 'ch03',
    title: 'Chapter 3 — Watson Lockdown 100%',
    zone: 'Watson',
    target: 'Clear Watson before The Heist with minimal backtracking.',
    level: '6–15+',
    build: ['Push Reflexes to 15', 'Add Technical to 9', 'Core perks: First Aid, Transfusion, Lead and Steel, Bullet Deflect, Air Dash path'],
    route: [
      'Unlock nearby fast travel points naturally.',
      'Clear NCPD Scanner Hustles district-by-district.',
      'Clear Reported Crimes and Assaults.',
      'Complete Regina gigs in clusters.',
      'Complete available Cyberpsychos last after upgrading.'
    ],
    checklist: [
      'All visible Watson NCPD hustles cleared',
      'All available Regina gigs cleared',
      'Available Watson cyberpsychos cleared',
      'Buy Reinforced Tendons when affordable',
      'Buy Kerenzikov if affordable',
      'Reach roughly Level 15 before The Heist'
    ],
    missables: ['No Heist missables yet, but this is your prep window.'],
    dont: ['Do not start The Heist until Watson feels mostly empty.', 'Do not buy vehicles yet.']
  },
  {
    id: 'ch04',
    title: 'Chapter 4 — The Heist Missable Sweep',
    zone: 'Konpeki Plaza',
    target: 'Collect all major Act 1 missables before leaving.',
    level: '15–18',
    build: ['Reflexes 15 goal', 'Perks: Air Dash, Finisher: Bladerunner if available'],
    route: [
      'Start The Heist only after Watson cleanup.',
      'Loot Yorinobu’s suite before progressing.',
      'Go to the roof for Satori and related loot.',
      'Collect Kongou, Nehan, Iguana Egg, clothing, and dog tags before leaving.'
    ],
    checklist: [
      'Collected Satori',
      'Collected Nehan',
      'Collected Kongou',
      'Collected Iguana Egg',
      'Collected Yorinobu clothing pieces',
      'Created manual save after Act 1 transition'
    ],
    missables: ['Satori', 'Nehan', 'Kongou', 'Iguana Egg', 'Yorinobu clothing'],
    dont: ['Do not rush the escape without checking rooms.', 'Do not overwrite the post-Heist manual save immediately.']
  },
  {
    id: 'ch05',
    title: 'Chapter 5 — Act 2 Rebuild + Watson Finish',
    zone: 'Watson / Kabuki / Little China',
    target: 'Recover from Act 1, pay Viktor, finish Watson leftovers.',
    level: '18–22',
    build: ['Start Cool investment', 'Perks: Killer Instinct, Gag Order, Quick Getaway'],
    route: [
      'Meet required Act 2 contacts.',
      'Pay Viktor when possible.',
      'Finish any Watson gigs/NCPD that opened after Act 2.',
      'Only then leave Watson as complete.'
    ],
    checklist: [
      'Paid Viktor',
      'Watson fixer content complete',
      'Watson NCPD mostly complete',
      'Cyberware upgraded after Act 2 opens',
      'Cool tree started for knives/stealth'
    ],
    missables: ['Keep an eye on Chippin’ In later for Johnny rewards.'],
    dont: ['Do not scatter into every district yet.']
  },
  {
    id: 'ch06',
    title: 'Chapter 6 — Westbrook + Judy Timing',
    zone: 'Westbrook / Japantown / Charter Hill',
    target: 'Clear Westbrook while naturally advancing Judy-related content.',
    level: '22–30',
    build: ['Cool to 15', 'Perks: Focus, Deadeye, Juggler path'],
    route: [
      'Sweep Japantown gigs and NCPD.',
      'Advance Judy quests when they trigger nearby.',
      'Clear Charter Hill and North Oak clusters.',
      'Visit ripperdocs only when route passes them.'
    ],
    checklist: [
      'Westbrook gigs complete',
      'Westbrook NCPD complete',
      'Judy questline advanced when available',
      'Throwing knife build online',
      'Optical Camo purchased if affordable'
    ],
    missables: ['Some romance/dialogue outcomes depend on Judy choices.'],
    dont: ['Do not repeatedly cross to Badlands for Panam until the Badlands phase.']
  },
  {
    id: 'ch07',
    title: 'Chapter 7 — City Center + Johnny Setup',
    zone: 'City Center / Downtown / Corpo Plaza',
    target: 'High-value gigs, money, and Johnny quest preparation.',
    level: '30–36',
    build: ['Technical to 15', 'Perks: All Things Cyber, Renaissance Punk, Health Freak'],
    route: [
      'Clear Downtown gigs and NCPD.',
      'Clear Corpo Plaza gigs and NCPD.',
      'Advance Johnny-related quests when they unlock.',
      'Use money for cyberware, not cars yet.'
    ],
    checklist: [
      'City Center gigs complete',
      'City Center NCPD complete',
      'Major cyberware upgrades purchased',
      'Johnny quest chain ready or advanced'
    ],
    missables: ['Johnny relationship choices matter for some ending routes.'],
    dont: ['Do not ignore Chippin’ In when it becomes available.']
  },
  {
    id: 'ch08',
    title: 'Chapter 8 — Heywood Sweep',
    zone: 'Heywood',
    target: 'Clear Padre gigs and dense city content efficiently.',
    level: '36–42',
    build: ['Technical toward 20', 'Perks: License to Chrome, Ambidextrous, Extended Warranty'],
    route: [
      'Start north and sweep south to avoid loops.',
      'Complete Padre gigs in clusters.',
      'Clear NCPD and Cyberpsychos as you pass them.',
      'Buy apartment/vehicle only if on route and funds are comfortable.'
    ],
    checklist: [
      'Heywood gigs complete',
      'Heywood NCPD complete',
      'Cyberware capacity improved',
      'Build is Sandevistan-ready'
    ],
    missables: ['None major, but loot iconic rewards from gigs carefully.'],
    dont: ['Do not go car shopping until core cyberware is done.']
  },
  {
    id: 'ch09',
    title: 'Chapter 9 — Badlands + Panam Chain',
    zone: 'Badlands',
    target: 'Do Panam content where it naturally belongs.',
    level: '42–48',
    build: ['Technical 20', 'Perks: Edgerunner, Ticking Time Bomb'],
    route: [
      'Advance Panam story missions.',
      'Clear Badlands gigs and NCPD between Panam calls.',
      'Pick up nearby vehicles/rewards naturally.',
      'Finish Panam questline before leaving Badlands.'
    ],
    checklist: [
      'Panam questline complete',
      'Badlands gigs complete',
      'Badlands NCPD complete',
      'Sandevistan installed/upgraded',
      'Manual save after key Panam choices'
    ],
    missables: ['Panam ending path requires completing her questline.'],
    dont: ['Do not leave Panam chain half-finished.']
  },
  {
    id: 'ch10',
    title: 'Chapter 10 — Santo Domingo + Combat Cleanup',
    zone: 'Santo Domingo',
    target: 'Industrial district cleanup and Body investment begins.',
    level: '48–52',
    build: ['Start Body', 'Perks: Painkiller, Comeback Kid, Dorph-head, Army of One'],
    route: [
      'Clear Arroyo cluster.',
      'Clear Rancho Coronado cluster.',
      'Finish nearby Cyberpsychos after gigs.',
      'Upgrade survivability cyberware.'
    ],
    checklist: [
      'Santo Domingo gigs complete',
      'Santo Domingo NCPD complete',
      'Body survivability perks started',
      'Blood Pump + Biomonitor setup considered'
    ],
    missables: ['Check gig reward containers before leaving locations.'],
    dont: ['Do not delay survivability upgrades if playing on Hard.']
  },
  {
    id: 'ch11',
    title: 'Chapter 11 — Pacifica Before Dogtown',
    zone: 'Pacifica',
    target: 'Prepare clean entry into Phantom Liberty.',
    level: '52–55',
    build: ['More Body', 'Perks: Speed Junkie, Die! Die! Die!, Like a Feather'],
    route: [
      'Clear Pacifica base-game gigs/NCPD.',
      'Advance Voodoo Boys content as required.',
      'When Songbird contacts you, transition to Dogtown.',
      'Do not bounce back and forth once Dogtown starts.'
    ],
    checklist: [
      'Pacifica pre-Dogtown content complete',
      'Ready for Phantom Liberty opening',
      'Inventory cleaned',
      'Cyberware upgraded before Dogtown'
    ],
    missables: ['Phantom Liberty branches later; Firestarter save is critical.'],
    dont: ['Do not start Dogtown undergeared if playing Hard.']
  },
  {
    id: 'ch12',
    title: 'Chapter 12 — Dogtown 100% Setup',
    zone: 'Dogtown',
    target: 'Collect Relic points and open the DLC zone efficiently.',
    level: '55–57',
    build: ['Body toward 18', 'Perks: Don’t Stop Me Now, Adrenaline Rush'],
    route: [
      'Complete Phantom Liberty opening until Dogtown is free-roam.',
      'Collect Relic Points first.',
      'Clear Increased Criminal Activity events.',
      'Do vehicle contracts and air drops when nearby.'
    ],
    checklist: [
      'Dogtown free roam unlocked',
      'Relic Points collected as route allows',
      'First Dogtown gigs complete',
      'Air drops looted when nearby'
    ],
    missables: ['Do not pass Firestarter without a permanent save.'],
    dont: ['Do not finish Phantom Liberty finale before Dogtown cleanup.']
  },
  {
    id: 'ch13',
    title: 'Chapter 13 — Phantom Liberty Branch Save',
    zone: 'Dogtown',
    target: 'Create the save that preserves DLC ending routes.',
    level: '57–59',
    build: ['Perks: Juggernaut, Calm Mind'],
    route: [
      'Finish all Dogtown gigs.',
      'Complete remaining side jobs and activities.',
      'Before Firestarter choice, create a permanent manual save.',
      'Use this save for alternate DLC endings later.'
    ],
    checklist: [
      'All Dogtown gigs complete',
      'All Increased Criminal Activity complete',
      'Relic progression checked',
      'Permanent Firestarter save created'
    ],
    missables: ['Firestarter route split. Keep this save forever.'],
    dont: ['Do not overwrite the Firestarter save.']
  },
  {
    id: 'ch14',
    title: 'Chapter 14 — Final Night City Cleanup',
    zone: 'All districts',
    target: 'Clean anything left before Nocturne OP55N1.',
    level: '59–60',
    build: ['Level 60: Body final point', 'Perks: Bloodlust, Pain to Gain'],
    route: [
      'Use map filters to identify remaining gigs/NCPD.',
      'Finish all Cyberpsychos.',
      'Finish companion questlines.',
      'Buy apartments/vehicles after cyberware is complete.'
    ],
    checklist: [
      'Level 60 reached',
      'Street Cred maxed',
      'All fixer gigs complete',
      'All Cyberpsychos complete',
      'All companion questlines complete',
      'All Tarot cards collected'
    ],
    missables: ['Johnny outfit and Chippin’ In rewards if not already done.'],
    dont: ['Do not trigger final ending runs before cleanup.']
  },
  {
    id: 'ch15',
    title: 'Chapter 15 — Nocturne Save + Endings',
    zone: 'Point of no return',
    target: 'Experience endings without replaying the full game.',
    level: '60',
    build: ['Final build complete: Reflexes 20 / Tech 20 / Cool 20 / Body 18 / Int 3'],
    route: [
      'When Nocturne OP55N1 appears, stop.',
      'Create a permanent manual save.',
      'Run each base-game ending from this save.',
      'Return to Firestarter save for DLC alternate endings.'
    ],
    checklist: [
      'Permanent Nocturne save created',
      'Permanent Firestarter save preserved',
      'All endings planned',
      'Achievement/trophy cleanup done'
    ],
    missables: ['Ending access depends on completed companion questlines and earlier choices.'],
    dont: ['Do not overwrite your two permanent saves.']
  }
];
