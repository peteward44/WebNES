this.NesDb = this.NesDb || {};

NesDb[ '6B5CC33CEA66A994959835CB814905BF88A71D73' ] = {
	"$": {
		"name": "Pin-Bot",
		"class": "Licensed",
		"catalog": "NES-IO-EEC",
		"publisher": "Nintendo",
		"developer": "Rare",
		"region": "Europe",
		"players": "4",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "9247C38D",
				"sha1": "6B5CC33CEA66A994959835CB814905BF88A71D73",
				"dump": "ok",
				"dumper": "Bregalad",
				"datedumped": "2007-08-31"
			},
			"board": [
				{
					"$": {
						"type": "NES-TQROM",
						"pcb": "NES-TQROM-01",
						"mapper": "119"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-IO-0 PRG",
								"size": "128k",
								"crc": "E1CEFA12",
								"sha1": "F7AEAA0C72BC1E659E1318A20192C4D69636E39A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-IO-0 CHR",
								"size": "64k",
								"crc": "9089FC24",
								"sha1": "0BC92A0853C5EBC47C3ADBC4E919EA41A55297D0"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "MMC3B"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with only 1 ball",
			"codes": [
				[
					"PANTGZLA"
				]
			]
		},
		{
			"name": "Start with 6 balls",
			"codes": [
				[
					"TANTGZLA"
				]
			]
		},
		{
			"name": "Start with 9 balls",
			"codes": [
				[
					"PANTGZLE"
				]
			]
		},
		{
			"name": "Infinite balls",
			"codes": [
				[
					"OZVVYZVV"
				]
			]
		}
	]
};
