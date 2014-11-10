this.NesDb = this.NesDb || {};

NesDb[ 'C649505DCE1607ED1B5D201003194629C9C3A86C' ] = {
	"$": {
		"name": "Pin-Bot",
		"class": "Licensed",
		"catalog": "NES-IO-USA",
		"publisher": "Nintendo",
		"developer": "Rare",
		"region": "USA",
		"players": "4",
		"date": "1990-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "D19ADDEB",
				"sha1": "C649505DCE1607ED1B5D201003194629C9C3A86C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-26"
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
								"name": "NES-IO-0 PRG",
								"size": "128k",
								"crc": "9F75B83B",
								"sha1": "703E41D4C1A4716B324DECE6DF2CE12A847F082C"
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
								"type": "MMC3A"
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
