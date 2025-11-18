'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "299a858f66a8d408d39f0df251bb1584",
"version.json": "689fb5ad1f8eefb3df083beee5d21d51",
"index.html": "8fc4e602c97b800cc36f0f404a512ced",
"/": "8fc4e602c97b800cc36f0f404a512ced",
"CNAME": "71d47542a30337384fbe6d65ecd9fd1a",
"main.dart.js": "f96ec5394041d46d3e7d4d3a7ce2dbf6",
"404.html": "0bf286348ba94feac6102a718b800b9e",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "1f7a74f93a53295d2961faee9ad074b5",
"icons/icon-192.png": "062b03e35e5cc9a0671544b650a37ecc",
"icons/icon-maskable-192.png": "062b03e35e5cc9a0671544b650a37ecc",
"icons/Icon-maskable-512.png": "407ad2e6703ab77428b16a50068ff69c",
"icons/icon-512.png": "407ad2e6703ab77428b16a50068ff69c",
"manifest.json": "5b63ea8814b94217df91179df48415aa",
"test_locale.html": "8410f4415cf9042445e796e336cf5ca1",
"assets/NOTICES": "eda9984658f8595529d0bc6fefc47199",
"assets/FontManifest.json": "33c7a19ffec9fb5627d6d719ad7e6d6e",
"assets/AssetManifest.bin.json": "5bac893e7d2ca131f1b8852c018dad79",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "8d0acfbf774979914d3c0d736f4be13e",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "aa170ac713aeb15cb558bd9a84fb1fdb",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "6d9809e3ad576188f89e71cadb570955",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "bd9e4bd02e48180ec2dbc95692f01e6d",
"assets/fonts/MaterialIcons-Regular.otf": "fd2df28beb54064222eadcfc056ab5b8",
"assets/assets/images/guide/cp_menu_ru.png": "9487dcd2da3c82734fce72ceb8f58f18",
"assets/assets/images/guide/cp_menu_en.png": "335e72b974d7209859d524cb4bca7e14",
"assets/assets/images/guide/cp_down_en.png": "19397e7b84e3e3baa02031d4ad2bf5e9",
"assets/assets/images/guide/cp_upleft_ru.png": "0eac5d5505fb24728c427adeda5c6c36",
"assets/assets/images/guide/cp_down_ru.png": "9e68d89eee14e3c3863dc2963f56bae1",
"assets/assets/images/guide/cp_upleft_en.png": "bdeb0b78228aeee079e8795e209e1264",
"assets/assets/images/archetypes/synastry/synastry_highS_lowR.jpg": "30a6690184bd7277e086c47f7bf3ac15",
"assets/assets/images/archetypes/synastry/synastry_highS_avgR.jpg": "870a0b60315db09c35d31dd0c57490e0",
"assets/assets/images/archetypes/synastry/synastry_lowS_veryHighR.jpg": "b6e28d5ce5d33e30aa1ba7f89ba12d00",
"assets/assets/images/archetypes/synastry/synastry_highS_highR.jpg": "ca4ff5d3e7b34f4c4ca31556703dfae2",
"assets/assets/images/archetypes/synastry/synastry_highS_veryHighR.jpg": "015b706800caf2448279a9197087bb00",
"assets/assets/images/archetypes/synastry/synastry_lowS_highR.jpg": "eef57ca9f5d8064784363a397f24d03c",
"assets/assets/images/archetypes/synastry/synastry_veryHighS_veryHighR.jpg": "5d13baf1658c81feec2d6dc04be06335",
"assets/assets/images/archetypes/synastry/synastry_avgS_highR.jpg": "ee67861aa9a6272c4774609dae114c53",
"assets/assets/images/archetypes/synastry/synastry_lowS_avgR.jpg": "7fdac77e20d4a53cc8e930ef060ef39f",
"assets/assets/images/archetypes/synastry/synastry_avgS_avgR.jpg": "20b5453337f32c28977a8258062a5cb8",
"assets/assets/images/archetypes/synastry/synastry_veryHighS_lowR.jpg": "016dede6029d4fd7e300753d0dae3ab8",
"assets/assets/images/archetypes/synastry/synastry_avgS_veryHighR.jpg": "36e5a08ba23bcb8275007956e8b90718",
"assets/assets/images/archetypes/synastry/synastry_veryHighS_avgR.jpg": "9032905d49b94d4801e89bbbb689b298",
"assets/assets/images/archetypes/synastry/synastry_veryHighS_highR.jpg": "34bc8e499db6ed0ad9794f838a777d2c",
"assets/assets/images/archetypes/synastry/synastry_avgS_lowR.jpg": "9c1d6fb8354c76d877355502434338f5",
"assets/assets/images/archetypes/synastry/synastry_lowS_lowR.jpg": "6cb99c86d2d832ab88724139b6b6703a",
"assets/assets/images/archetypes/transit_day/transitDay_lowS_highR.jpg": "0f0c7751725f3de5346c3c1c73513074",
"assets/assets/images/archetypes/transit_day/transitDay_highS_veryHighR.jpg": "44a5258e6c3ade13851957381812eb4a",
"assets/assets/images/archetypes/transit_day/transitDay_lowS_avgR.jpg": "1e06f81d810ab4fd5dbaab083fd8e69f",
"assets/assets/images/archetypes/transit_day/transitDay_avgS_avgR.jpg": "a96d8eb0ef1fa2e3ad2220e96712a6b7",
"assets/assets/images/archetypes/transit_day/transitDay_highS_avgR.jpg": "a5e2eb066ba8f52fe040232bf18dfa14",
"assets/assets/images/archetypes/transit_day/transitDay_veryHighS_lowR.jpg": "91a7e8b2c3e538f26c28a76448b38028",
"assets/assets/images/archetypes/transit_day/transitDay_avgS_lowR.jpg": "0032351147e0ada18d0905e8c793870e",
"assets/assets/images/archetypes/transit_day/transitDay_lowS_lowR.jpg": "2f4189b59530eb0aba5653651ac37e27",
"assets/assets/images/archetypes/transit_day/transitDay_avgS_veryHighR.jpg": "baca653d9b957c773634c697ffada5cf",
"assets/assets/images/archetypes/transit_day/transitDay_veryHighS_avgR.jpg": "1f906365e2e5a0e613b4d39fc0b8fe12",
"assets/assets/images/archetypes/transit_day/transitDay_highS_lowR.jpg": "c8e8b9073a78af1a0a37d773e61a16a3",
"assets/assets/images/archetypes/transit_day/transitDay_veryHighS_highR.jpg": "919a326698a8b99da5d2374760444ad8",
"assets/assets/images/archetypes/transit_day/transitDay_veryHighS_veryHighR.jpg": "ce11ef4ba24343f778cd456b185ca2d8",
"assets/assets/images/archetypes/transit_day/transitDay_lowS_veryHighR.jpg": "b12ca2e5294e7f26b943c728a46369df",
"assets/assets/images/archetypes/transit_day/transitDay_avgS_highR.jpg": "8a463ce08581a11e691de89df8695ba6",
"assets/assets/images/archetypes/transit_day/transitDay_highS_highR.jpg": "1d45b2f3bff16c0e251628d476814ead",
"assets/assets/images/archetypes/transit_couple/transitCouple_veryHighS_highR.jpg": "71b0615c1b89910755b99630bef446d8",
"assets/assets/images/archetypes/transit_couple/transitCouple_lowS_veryHighR.jpg": "62ecfff68d07b394cb73c064ec21ee56",
"assets/assets/images/archetypes/transit_couple/transitCouple_avgS_highR.jpg": "3dced4cecf5a4d3110729595b953d515",
"assets/assets/images/archetypes/transit_couple/transitCouple_veryHighS_veryHighR.jpg": "12b50d9d728d13183686c67e1eb1e8b2",
"assets/assets/images/archetypes/transit_couple/transitCouple_highS_veryHighR.jpg": "d6a7465f568435a7d181bb6f029ca272",
"assets/assets/images/archetypes/transit_couple/transitCouple_lowS_highR.jpg": "aaec71ba06c5822b56a115d59383b2a3",
"assets/assets/images/archetypes/transit_couple/transitCouple_highS_lowR.jpg": "9ad041ab4cc9846512f2fccc8f8c8531",
"assets/assets/images/archetypes/transit_couple/transitCouple_avgS_avgR.jpg": "68120f8cef9519cd4d3199350fabfc8a",
"assets/assets/images/archetypes/transit_couple/transitCouple_veryHighS_avgR.jpg": "d38da203e7febebbc4be7758f2dbb78a",
"assets/assets/images/archetypes/transit_couple/transitCouple_lowS_avgR.jpg": "b52b91e72d5d899c5679f56827143e93",
"assets/assets/images/archetypes/transit_couple/transitCouple_highS_highR.jpg": "b619acad8e20adff056c6b6ebc61d734",
"assets/assets/images/archetypes/transit_couple/transitCouple_avgS_veryHighR.jpg": "a7c69ae760b1df44e56633523af17f25",
"assets/assets/images/archetypes/transit_couple/transitCouple_lowS_lowR.jpg": "1cef7e9d1db403ba78700f198233ac39",
"assets/assets/images/archetypes/transit_couple/transitCouple_veryHighS_lowR.jpg": "42dbb2e733bffb1fc1cd01e0ad150f91",
"assets/assets/images/archetypes/transit_couple/transitCouple_avgS_lowR.jpg": "bb009dff40b2f1d874999e1f16d72d7d",
"assets/assets/images/archetypes/transit_couple/transitCouple_highS_avgR.jpg": "e6ecc43e860c003bb03599dd47227092",
"assets/assets/images/archetypes/base/archPioneerM.jpg": "70f92818f845ff75eaf268639e60f5d7",
"assets/assets/images/archetypes/base/archProvidezW.jpg": "f615a2f3ac4db152bf311a5b6da1ca66",
"assets/assets/images/archetypes/base/archNovatorW.jpg": "8fe8111db9dce2d5ff2e28d5b6879a4e",
"assets/assets/images/archetypes/base/archStrategW.jpg": "8f2885e4c0475d8616a58e86094556da",
"assets/assets/images/archetypes/base/archEstetW.jpg": "86cb9fbf5857d021482ada1a851c8d11",
"assets/assets/images/archetypes/base/archArchitectorM.jpg": "c79347ded510be107366295a14323d7f",
"assets/assets/images/archetypes/base/archAlchemistW.jpg": "0cc5434b7149ac2fe4f67ddeba55c0a8",
"assets/assets/images/archetypes/base/archTacticM.jpg": "b8cc049fe1b327341026be7d71a4ca90",
"assets/assets/images/archetypes/base/archTacticW.jpg": "dd455037df8723a75733a57295422a59",
"assets/assets/images/archetypes/base/archAlchemistM.jpg": "ad3544b2d63c7eefdc92bbd86ea7b37b",
"assets/assets/images/archetypes/base/archArchitectorW.jpg": "5768e220486ab5da7643482ad892fb00",
"assets/assets/images/archetypes/base/archEstetM.jpg": "68c87ab2234e8cd33f84e1af88ff077e",
"assets/assets/images/archetypes/base/archStrategM.jpg": "3250bc30bf938df238fd916dd757fcfc",
"assets/assets/images/archetypes/base/archNovatorM.jpg": "55410c165c1f7389641ace09183f0028",
"assets/assets/images/archetypes/base/archProvidezM.jpg": "db457cec807e25ed34c976f9b0eb2a55",
"assets/assets/images/archetypes/base/archPioneerW.jpg": "412cbf04616d17ffe35852e35a5441d3",
"assets/assets/images/archetypes/hybrid/mercury/mercury_mars_w.jpg": "3c6933f50908d78f81c15b29b9352161",
"assets/assets/images/archetypes/hybrid/mercury/mercury_uranus_w.jpg": "d11a45188b32b6597b32eb82b00b3506",
"assets/assets/images/archetypes/hybrid/mercury/mercury_mars.jpg": "3f7738110d846951c6c9dd38b388fdf4",
"assets/assets/images/archetypes/hybrid/mercury/mercury_jupiter.jpg": "6eb640e6965283c7e81239d3a6357be1",
"assets/assets/images/archetypes/hybrid/mercury/mercury_venus_w.jpg": "a72ae30428fe52521032530c0b8b84f6",
"assets/assets/images/archetypes/hybrid/mercury/mercury_saturn.jpg": "384036b007a25b5920ba7b4af5b2046b",
"assets/assets/images/archetypes/hybrid/mercury/mercury_pluto.jpg": "bd090671dda87ea979d4ca3daa46d070",
"assets/assets/images/archetypes/hybrid/mercury/mercury_neptune_w.jpg": "de8633ec8d5a5a52b20433fa302a2d21",
"assets/assets/images/archetypes/hybrid/mercury/mercury_jupiter_w.jpg": "91eec39c619658d6793258a3e78813ae",
"assets/assets/images/archetypes/hybrid/mercury/mercury_uranus.jpg": "53be5d055bbbd1860f61d659fe7a4fdf",
"assets/assets/images/archetypes/hybrid/mercury/mercury_saturn_w.jpg": "6be9dc46bb253213b9ed910fa75fd54d",
"assets/assets/images/archetypes/hybrid/mercury/mercury_pluto_w.jpg": "134aa54191c1e5ec60df297d91aff8b9",
"assets/assets/images/archetypes/hybrid/mercury/mercury_neptune.jpg": "fa053d9ad36c4e6bbbb7da13c8afc931",
"assets/assets/images/archetypes/hybrid/mercury/mercury_venus.jpg": "ca0eb1778f5337ae7b2eead2c6c784a2",
"assets/assets/images/archetypes/hybrid/venus/venus_mars_w.jpg": "8737376b2b470982547d8c1d0f21b587",
"assets/assets/images/archetypes/hybrid/venus/venus_saturn_w.jpg": "7e17b382e477a5a04eea22e0ab33123f",
"assets/assets/images/archetypes/hybrid/venus/venus_jupiter_w.jpg": "d8ac1383a4af38b69ec311eb2ac2a3d1",
"assets/assets/images/archetypes/hybrid/venus/venus_pluto.jpg": "60386a7fa54daa5a4bc6ac38bddbe600",
"assets/assets/images/archetypes/hybrid/venus/venus_saturn.jpg": "63bed11102b50abce485ff958874b280",
"assets/assets/images/archetypes/hybrid/venus/venus_jupiter.jpg": "07c4d1a454431d24289f1bd1d6620cdc",
"assets/assets/images/archetypes/hybrid/venus/venus_mercury.jpg": "f01e8a08017e4e5bb849b2264581560b",
"assets/assets/images/archetypes/hybrid/venus/venus_uranus.jpg": "97b39b7cfc220df7b18ab14e2b7ffb2b",
"assets/assets/images/archetypes/hybrid/venus/venus_pluto_w.jpg": "b4d9540b851dc2d30a139d32312aab80",
"assets/assets/images/archetypes/hybrid/venus/venus_uranus_w.jpg": "a946fc2a5bfdf464e89bf5d485b573a8",
"assets/assets/images/archetypes/hybrid/venus/venus_mars.jpg": "23d474f865039e1d75ccf1ceadc500e8",
"assets/assets/images/archetypes/hybrid/venus/venus_neptune_w.jpg": "b71562a99b106ec13e93ac14bd12a637",
"assets/assets/images/archetypes/hybrid/venus/venus_mercury_w.jpg": "52c914a582c3de83fc93735857660a8e",
"assets/assets/images/archetypes/hybrid/venus/venus_neptune.jpg": "06de697fec478cb8c1198469408a84d9",
"assets/assets/images/archetypes/hybrid/pluto/pluto_saturn_w.jpg": "c5e757aaf0be56b77c8f4662fb44aa62",
"assets/assets/images/archetypes/hybrid/pluto/pluto_venus.jpg": "3b7565f33bf96029d3d64c6ea7b0ce9d",
"assets/assets/images/archetypes/hybrid/pluto/pluto_mercury_w.jpg": "31b8e5a6e91228156c8d3d9f6dba6787",
"assets/assets/images/archetypes/hybrid/pluto/pluto_venus_w.jpg": "e8aa916c7311959d29d578bfb38ec4c0",
"assets/assets/images/archetypes/hybrid/pluto/pluto_saturn.jpg": "2b88aa95244c6042c11adfa2213cb407",
"assets/assets/images/archetypes/hybrid/pluto/pluto_jupiter.jpg": "b4ec11b2ef9b412b44d07d761313ab9c",
"assets/assets/images/archetypes/hybrid/pluto/pluto_mars_w.jpg": "cf0a21b097d5226531937fd6184e90ad",
"assets/assets/images/archetypes/hybrid/pluto/pluto_neptune_w.jpg": "0bf806356a45b7cb20a0f48c9bdf970e",
"assets/assets/images/archetypes/hybrid/pluto/pluto_mars.jpg": "91ff612ed6af9705c385c6832c1c4f0e",
"assets/assets/images/archetypes/hybrid/pluto/pluto_jupiter_w.jpg": "4ce6d419c228a14ce58d518bb7052972",
"assets/assets/images/archetypes/hybrid/pluto/pluto_uranus_w.jpg": "7d1cb5f667a8263f1b69c2c90984e41a",
"assets/assets/images/archetypes/hybrid/pluto/pluto_neptune.jpg": "29bd59ecbd5815a4b6e78f360543f70d",
"assets/assets/images/archetypes/hybrid/pluto/pluto_uranus.jpg": "4f4e3ad489c13b5c64f4f4a41ed5c64c",
"assets/assets/images/archetypes/hybrid/pluto/pluto_mercury.jpg": "3ecfc97317d01e5d4f08049ff7c90b10",
"assets/assets/images/archetypes/hybrid/neptune/neptune_pluto_w.jpg": "2440768b12c9423a1b6c89daeebe77ba",
"assets/assets/images/archetypes/hybrid/neptune/neptune_mars.jpg": "e5aaa41a0b159873c2da54b69dd2341c",
"assets/assets/images/archetypes/hybrid/neptune/neptune_mercury.jpg": "c18605a6a53f40a8f816c0d1908c2162",
"assets/assets/images/archetypes/hybrid/neptune/neptune_mercury_w.jpg": "ebeebae48707a056d67d3bcf0d7a96db",
"assets/assets/images/archetypes/hybrid/neptune/neptune_saturn.jpg": "731156328574f328dc7eb7743adba556",
"assets/assets/images/archetypes/hybrid/neptune/neptune_mars_w.jpg": "cd436544ccb8a6691e47f433c02e1c19",
"assets/assets/images/archetypes/hybrid/neptune/neptune_saturn_w.jpg": "c5e3386ec5ef787c75790f633d9d45ac",
"assets/assets/images/archetypes/hybrid/neptune/neptune_pluto.jpg": "96ccf2b8b70c82583b89ff36d358451d",
"assets/assets/images/archetypes/hybrid/neptune/neptune_jupiter_w.jpg": "9a708c7820c2bdba1745d64408e5c0b6",
"assets/assets/images/archetypes/hybrid/neptune/neptune_venus.jpg": "ee215dfd52af4fe7d864658509b5aeca",
"assets/assets/images/archetypes/hybrid/neptune/neptune_uranus.jpg": "2a927cd0fd055778a9253617489f0bf8",
"assets/assets/images/archetypes/hybrid/neptune/neptune_uranus_w.jpg": "e7f15de33fdddec876e49288abb7f1a1",
"assets/assets/images/archetypes/hybrid/neptune/neptune_venus_w.jpg": "c43598d6357f9b0b41d5377e6b0dd27d",
"assets/assets/images/archetypes/hybrid/neptune/neptune_jupiter.jpg": "10c41373a578b4642b614482da9ae5ed",
"assets/assets/images/archetypes/hybrid/saturn/saturn_neptune.jpg": "34aa4cd715e2f4fcf56b4f04eaef79ef",
"assets/assets/images/archetypes/hybrid/saturn/saturn_jupiter_w.jpg": "3c89f7cecd8606de44983bbe871d8de0",
"assets/assets/images/archetypes/hybrid/saturn/saturn_venus.jpg": "b22e476d9740a17549176863f37cc217",
"assets/assets/images/archetypes/hybrid/saturn/saturn_mars_w.jpg": "55bb6a7a450b26a68d542e876f2dd7b2",
"assets/assets/images/archetypes/hybrid/saturn/saturn_mars.jpg": "a5905a4b0dbd4c8d808ee0935416164b",
"assets/assets/images/archetypes/hybrid/saturn/saturn_pluto_w.jpg": "fe02e078d15deeee8e70b2bc4983e956",
"assets/assets/images/archetypes/hybrid/saturn/saturn_mercury.jpg": "262f4269de7d3b655185050ccdd1f84e",
"assets/assets/images/archetypes/hybrid/saturn/saturn_pluto.jpg": "5085042ca5a4c3fd7cf88435302dd212",
"assets/assets/images/archetypes/hybrid/saturn/saturn_venus_w.jpg": "0d6c294f3653c0eb7fca09f08f7ee43e",
"assets/assets/images/archetypes/hybrid/saturn/saturn_jupiter.jpg": "0ac1e9016288c32f6e3163fa74a84d46",
"assets/assets/images/archetypes/hybrid/saturn/saturn_mercury_w.jpg": "ec99e3eb7fbc7aa6ef01657d58732524",
"assets/assets/images/archetypes/hybrid/saturn/saturn_neptune_w.jpg": "68e011a01681fa866af27b8eba6a6942",
"assets/assets/images/archetypes/hybrid/saturn/saturn_uranus.jpg": "a1d3c6195e61e9baffb2b9cab737472c",
"assets/assets/images/archetypes/hybrid/saturn/saturn_uranus_w.jpg": "c4a13f0ab6003a87cde36e798044daab",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_saturn.jpg": "1ef451af826a2ab39b75545bb39eb9e7",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_venus_w.jpg": "be3c43d892bca284ec3b8f2fa5beebee",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_pluto.jpg": "ebd046f95cb584295df574189bbbc423",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_mars_w.jpg": "aa65e28ee73370639578a6ff4946ebd3",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_saturn_w.jpg": "27ea7bccaddd64edf56fd18228facc8a",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_mars.jpg": "d24069cc985a8c7d608c43987a8a2fd2",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_neptune_w.jpg": "03e73f0312f102c3a4a6b69e7f7f3db6",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_neptune.jpg": "130fcf6b82b70702a850443ad5ebe539",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_mercury.jpg": "a679501dc56f30b1362ef9e3d6f76ef6",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_uranus.jpg": "5ccc805ae1b1cecd1e6e6396743afd44",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_pluto_w.jpg": "1f5c6d23e5b0717e7d45b7de05c881e6",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_uranus_w.jpg": "e8f0301ece9e2ad2ce50b1289a6c138e",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_venus.jpg": "d2ca3296af249cd774bf344bef1d14c6",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_mercury_w.jpg": "e21d0654f360a63a538f15ce82dc5e5d",
"assets/assets/images/archetypes/hybrid/uranus/uranus_jupiter.jpg": "59f84c520bf7a2dc9f8ffce1a751b5fd",
"assets/assets/images/archetypes/hybrid/uranus/uranus_pluto.jpg": "81294ce001229b192b6b3bbb90eb2570",
"assets/assets/images/archetypes/hybrid/uranus/uranus_venus_w.jpg": "0b55e85d63db5a89f75cd7d4cf05feda",
"assets/assets/images/archetypes/hybrid/uranus/uranus_jupiter_w.jpg": "2098dbd290279fa27df254a19e0d7ee4",
"assets/assets/images/archetypes/hybrid/uranus/uranus_mars_w.jpg": "ce7430ef1be118c1912e2040c52058b6",
"assets/assets/images/archetypes/hybrid/uranus/uranus_saturn.jpg": "6316aa71c5a47ec5dfad1ab8bb5beeef",
"assets/assets/images/archetypes/hybrid/uranus/uranus_mars.jpg": "77b4bcc1b414ca8ff03322bef362d924",
"assets/assets/images/archetypes/hybrid/uranus/uranus_neptune.jpg": "0a7c983edcb50e3e602fb9b6be10fa04",
"assets/assets/images/archetypes/hybrid/uranus/uranus_mercury_w.jpg": "c3a257dbc1876d10a44f7e5016e47768",
"assets/assets/images/archetypes/hybrid/uranus/uranus_venus.jpg": "f0d66eecc5e9bcfdb42bc912e67e8bfa",
"assets/assets/images/archetypes/hybrid/uranus/uranus_neptune_w.jpg": "44872ec9a8c92800ab7eca1a38e459e5",
"assets/assets/images/archetypes/hybrid/uranus/uranus_mercury.jpg": "8eef2a77ac8e8e40df7ad96a6bf29e57",
"assets/assets/images/archetypes/hybrid/uranus/uranus_pluto_w.jpg": "c8193150107f3ef7185c87e476c0798b",
"assets/assets/images/archetypes/hybrid/uranus/uranus_saturn_w.jpg": "bca10c8ba34e109648a5baa166f96b1e",
"assets/assets/images/archetypes/hybrid/mars/mars_mercury_w.jpg": "74e3e9afebc582126f8bb249e71557a5",
"assets/assets/images/archetypes/hybrid/mars/mars_venus_w.jpg": "f247fe43e691799e482f9a2d176db124",
"assets/assets/images/archetypes/hybrid/mars/mars_jupiter.jpg": "bdb1afba04c0aaeb43c32d20fb5e931c",
"assets/assets/images/archetypes/hybrid/mars/mars_pluto.jpg": "8bfd27b9eb3749a76ea8b4c13738a997",
"assets/assets/images/archetypes/hybrid/mars/mars_saturn_w.jpg": "a9c62a3ed17986006c1e05161755a6fb",
"assets/assets/images/archetypes/hybrid/mars/mars_neptune_w.jpg": "0556603b01a6363e912a5186b7a3f9b5",
"assets/assets/images/archetypes/hybrid/mars/mars_saturn.jpg": "05c2ee112676451a8a912d83f17da59d",
"assets/assets/images/archetypes/hybrid/mars/mars_uranus.jpg": "e99ae7dbf9b47a7cd20adb7fc6a5a6bc",
"assets/assets/images/archetypes/hybrid/mars/mars_jupiter_w.jpg": "7f33734e307d68002428cbb03c07011f",
"assets/assets/images/archetypes/hybrid/mars/mars_neptune.jpg": "0135f8da04f188315ac70095025bc2fd",
"assets/assets/images/archetypes/hybrid/mars/mars_pluto_w.jpg": "07c4ae6149df0cc252e8102186927ff8",
"assets/assets/images/archetypes/hybrid/mars/mars_mercury.jpg": "1845c99efb0d20fe78ee6e810041ea71",
"assets/assets/images/archetypes/hybrid/mars/mars_uranus_w.jpg": "7139772f613fe701798f1a2e98db1d65",
"assets/assets/images/archetypes/hybrid/mars/mars_venus.jpg": "615ee82560427ed5d65ca4f35c2875af",
"assets/assets/images/articles/astroplay/act2_1.jpg": "07945485e501c3a43f1f82e6bbb34de2",
"assets/assets/images/articles/astroplay/act2_2.jpg": "142d292fb618e9e0aa864a49e8fb468c",
"assets/assets/images/articles/astroplay/act2_3.jpg": "716f716b1ee232cd59c55f07bd961f9a",
"assets/assets/images/articles/astroplay/act3_2.jpg": "378dda4d179e4388ee3a7d5b79e2b20b",
"assets/assets/images/articles/astroplay/act3_3.jpg": "32c778964e2da5a618c5a238a3d3615f",
"assets/assets/images/articles/astroplay/act1_1.jpg": "e3e07cacabceb6b153b3b772f94cd668",
"assets/assets/images/articles/astroplay/act1_3.jpg": "81c2d070c2e8ceda4922aa2cf58ee10b",
"assets/assets/images/articles/astroplay/act3_1.jpg": "ba93d871721d24eb3e081e98d17b03d6",
"assets/assets/images/articles/astroplay/act1_2.jpg": "dfb430e9dce41c11c6b5f6f8681aef30",
"assets/assets/images/articles/astroplay/act3_4.jpg": "579d02d670edac8f7dda438d1cc019f3",
"assets/assets/images/articles/arch_intro/arch_intro_2.jpg": "b32ad3d68b1047971172c7fd03aa7c12",
"assets/assets/images/articles/arch_intro/arch_intro_3.jpg": "3c1e66dad3f7a49b298dc56833ef7958",
"assets/assets/images/articles/arch_intro/arch_intro_1.jpg": "fd032bb7ccacc9aae5e6ac18e136f8ea",
"assets/assets/images/articles/syn_intro/syn_intro_1.jpg": "7fa93432deaef2a8340a443e399372c5",
"assets/assets/images/articles/syn_intro/syn_intro_2.jpg": "49a9dc328732154e41e6e846e44effe6",
"assets/assets/images/articles/syn_intro/syn_intro_3.jpg": "edc7b60a1d04b473d96a280f26171794",
"assets/assets/images/scenario.jpg": "f450baf6fb121698f2ccd73d94b482b4",
"assets/assets/images/books/Trump-13072024.png": "bd507fe137390da5b7a619c5030a4291",
"assets/assets/images/books/8starSpeak.jpg": "c9db046652d29fb1163e1b3065452bfe",
"assets/assets/images/books/9endBegin.jpg": "993b4298280213dce9f4326b774fc75d",
"assets/assets/images/books/chart_example.jpg": "e07a47d8878e19ed860e8de0d475ca11",
"assets/assets/images/books/strelok-13072024.png": "e2ac585dec28e410d9628483dbd1c752",
"assets/assets/images/books/strelok.png": "2586a2e62ab3e8992af2fd634c24241b",
"assets/assets/images/books/Trump.png": "0c6b24777c38f7d742714f20fdea2846",
"assets/assets/images/books/7sintez.jpg": "1f09704be29b872e0d96c49cf889dbd7",
"assets/assets/images/synastry.jpg": "0ea440bdae843b939abda2bb329694eb",
"assets/assets/images/msa_theory/3_astro_objects.jpg": "a7b3035743da5e93880d504fb78281c0",
"assets/assets/images/msa_theory/7_synastry.jpg": "0b50d809d69853b05640bf096a9b026b",
"assets/assets/images/msa_theory/2_astro_mechanics.jpg": "983827763ee0abd9a1e5158f382faae6",
"assets/assets/images/msa_theory/10_faq.jpg": "07cd23f9b842bb64b7acada304c78d5b",
"assets/assets/images/msa_theory/8_forecast.jpg": "752c5353de9033c79085ac230fbf198c",
"assets/assets/images/msa_theory/6_aspectology.jpg": "c084687a05c1df448166ed91bed9c080",
"assets/assets/images/msa_theory/4_astro_fields.jpg": "6991a8bdfe0040df2ce6870a20d526d8",
"assets/assets/images/msa_theory/11_glossary.jpg": "96b7d6ecfc598c1fd9201febf69b37fa",
"assets/assets/images/msa_theory/1_worldview.jpg": "eb3bc46467c09d7d5b50ac6b07f54101",
"assets/assets/images/msa_theory/5_natal.jpg": "dc31fafc67b18fa3b5c52ead48c8fb29",
"assets/assets/images/msa_theory/9_conclusion.jpg": "7d680755a63a8a67408db8580982eb71",
"assets/assets/en.png": "e667999048e9c8c5c5610d1d33908e52",
"assets/assets/ru.png": "96baaae92b38a76278c6cb85b1d81c5a",
"assets/assets/rive/model.riv": "87417b237c2a7ac24a6544c45f307105",
"assets/assets/rive/intro.riv": "92be291f07686acb610b4c1ccb2340b9",
"assets/assets/rive/cosmos.riv": "29c893a8ce9849a4927be02fc14b29f0",
"assets/assets/rive/planets_pic_1.riv": "7893734acd50d0aef2e76560c8305515",
"assets/assets/rive/domes.riv": "daf0f11c24e956815372caebd5475ea4",
"assets/assets/rive/main.riv": "1b898fe55be1e8622ca7b3c5cb9f6214",
"assets/assets/rive/mission.riv": "a5965d6572d0409f1c797bc78e32d4b2",
"assets/assets/rive/aspects_pic_1.riv": "d9f87714f6cdf593cbbcd562bad39a5d",
"assets/assets/rive/final.riv": "e5c988e9e8205135462856d72192eeed",
"assets/assets/rive/aspects.riv": "0f22a9506351a1f91160be81601f818e",
"assets/assets/rive/404.riv": "0fec7c958efa09f49bdfd8c4d1da93ad",
"assets/assets/rive/pathfinder.riv": "29ef05218d77053d8986f6d77fef35a5",
"assets/assets/rive/changelog.riv": "bbd152c9d1f0b58e3bf18be60e70d10a",
"assets/assets/rive/blog.riv": "5482f811c0b53963b550df318eb49fd1",
"assets/assets/rive/planets.riv": "cd4cd0552ae5a8338b286064cf8ecfff",
"assets/assets/rive/model_pic_1_ru.riv": "b030428abbb66028d22aff80d60229c2",
"assets/assets/rive/zodiak.riv": "2f71b794a34708659dbddcfee92ff5d4",
"assets/assets/rive/model_pic_1_en.riv": "fe44c63772e087761fc047f976078fc9",
"assets/assets/rive/solar.riv": "3efb777fe37c53017c4b3ee5dffbad03",
"assets/assets/banner_intro.jpg": "1e3789d32952a2844b8e402878eb9839",
"assets/assets/fonts/NotoSans-Regular.ttf": "2c157a50aeb376ee5a69032d7813ffb2",
"assets/assets/fonts/NotoSans-Medium.ttf": "e1ae7343c37621d9c51023b006846579",
"assets/assets/fonts/NotoSans-Bold.ttf": "8bedd188f4c137b79409d437de74f91f",
"assets/assets/fonts/NotoSansSymbols-Regular.ttf": "9cf26c11c495f60600bcb334ad41beb9",
"assets/assets/fonts/NotoSansSymbols2-Regular.ttf": "182e7dff8b41844c60b1672e2cdb7e63",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
