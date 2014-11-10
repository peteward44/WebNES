this.NesDb = this.NesDb || {};

NesDb[ '3065EF157AB5F34FA05022261D7BF6EF79DAD5C9' ] = {
	"$": {
		"name": "Heavy Barrel",
		"class": "Licensed",
		"catalog": "NES-HV-USA",
		"publisher": "Data East",
		"developer": "Data East",
		"portdeveloper": "Sakata SAS",
		"region": "USA",
		"players": "2",
		"date": "1990-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "34EAB034",
				"sha1": "3065EF157AB5F34FA05022261D7BF6EF79DAD5C9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-26"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-HV-0 PRG",
								"size": "128k",
								"crc": "B4D554D6",
								"sha1": "183E2FAA96FED23A684E1C7A0CC7F4E0DA7FA0AB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-HV-0 CHR",
								"size": "128k",
								"crc": "D070AEFC",
								"sha1": "94899FEABB3612316689AD96791635922D9503D2"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Autofire for player 1",
			"codes": [
				[
					"ENSTPVSN"
				]
			]
		},
		{
			"name": "Autofire for player 2",
			"codes": [
				[
					"EYNVINSN"
				]
			]
		},
		{
			"name": "Hand weapons last 4 times longer",
			"codes": [
				[
					"AEKVXLII"
				]
			]
		},
		{
			"name": "Only 1 hand weapon",
			"codes": [
				[
					"ZAOVEPAA"
				]
			]
		},
		{
			"name": "Infinite hand weapons on pick-up for p1-2",
			"codes": [
				[
					"ENVVKLEI"
				]
			]
		},
		{
			"name": "Infinite hand weapons and firearms on pick-up for p1-2",
			"codes": [
				[
					"OXVVVLVS"
				]
			]
		},
		{
			"name": "Enemies don't fire handguns",
			"codes": [
				[
					"XVKZVEXK"
				]
			]
		},
		{
			"name": "Become invisible and invincible!",
			"codes": [
				[
					"XTOVVEXK"
				]
			]
		}
	]
};
