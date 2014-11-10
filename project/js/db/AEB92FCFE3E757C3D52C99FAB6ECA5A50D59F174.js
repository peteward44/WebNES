this.NesDb = this.NesDb || {};

NesDb[ 'AEB92FCFE3E757C3D52C99FAB6ECA5A50D59F174' ] = {
	"$": {
		"name": "Lethal Weapon",
		"class": "Licensed",
		"catalog": "NES-LY-USA",
		"publisher": "Ocean",
		"developer": "Eurocom",
		"region": "USA",
		"players": "1",
		"date": "1993-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "7077B075",
				"sha1": "AEB92FCFE3E757C3D52C99FAB6ECA5A50D59F174",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-LY-0 PRG",
								"size": "128k",
								"crc": "EE693008",
								"sha1": "90EE6709F0872DCAF5207E2F6C8004210D88096C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-LY-0 CHR",
								"size": "128k",
								"crc": "2E46EBEE",
								"sha1": "BC0C04AB4AEF510231CE1D6C4763CC4B4793E867"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
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
			"name": "Infinite ammo when shooting on the ground",
			"codes": [
				[
					"OLSSGSOO"
				]
			]
		},
		{
			"name": "E restores energy fully",
			"codes": [
				[
					"AKVIXAAP"
				]
			]
		},
		{
			"name": "E worth nothing",
			"codes": [
				[
					"AEVIXAAP"
				]
			]
		},
		{
			"name": "Extra ammo restores energy fully",
			"codes": [
				[
					"AKKSEAAP"
				]
			]
		},
		{
			"name": "Extra ammo worth nothing",
			"codes": [
				[
					"AEKSEAAP"
				]
			]
		},
		{
			"name": "No energy lost when falling off screen",
			"codes": [
				[
					"AEUYXAAZ"
				]
			]
		},
		{
			"name": "Falling off screen is fatal",
			"codes": [
				[
					"AKUYXAAZ"
				]
			]
		},
		{
			"name": "Bullet proof vest lasts longer",
			"codes": [
				[
					"NNNISAAU"
				]
			]
		},
		{
			"name": "Bullet proof vest lasts until end of stage",
			"codes": [
				[
					"XVUKOOXK"
				]
			]
		},
		{
			"name": "Start on Level 2",
			"codes": [
				[
					"XTUGTXXK"
				]
			]
		},
		{
			"name": "Infinite ammo when shooting in the air",
			"codes": [
				[
					"OUSSISOO",
					"OUXIPSOO"
				]
			]
		},
		{
			"name": "or AONISAAL Bullet proof vest does not last as long",
			"codes": [
				[
					"ZENISAAU"
				]
			]
		},
		{
			"name": "Start on Level 3",
			"codes": [
				[
					"XZUGLXVL",
					"LAUGGZNP",
					"XTUGIZEK"
				]
			]
		}
	]
};
