this.NesDb = this.NesDb || {};

NesDb[ '92C3361B9E3B28A51FD30E7845C988A6D576EE65' ] = {
	"$": {
		"name": "Pac-Man",
		"class": "Licensed",
		"catalog": "NES-P7-USA",
		"publisher": "Namco",
		"developer": "Namco",
		"region": "USA",
		"players": "2",
		"date": "1993-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "Namco",
				"crc": "9E4E9CC2",
				"sha1": "92C3361B9E3B28A51FD30E7845C988A6D576EE65",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-17"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-128",
						"pcb": "NES-NROM-128-06",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "NES-P7-0 PRG",
								"size": "16k",
								"crc": "347D7D34",
								"sha1": "AA1BBA9A243C70EB4E9928B5EFEC9D4877579D08"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-P7-0 CHR",
								"size": "8k",
								"crc": "ED9E2130",
								"sha1": "259B4D580D2FC11D5A61AD85F9FB717489986454"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Both players have infinite lives",
			"codes": [
				[
					"SZEKKIVG"
				]
			]
		},
		{
			"name": "1 life for player 2",
			"codes": [
				[
					"VTGKVZ"
				]
			]
		},
		{
			"name": "Power pills last longer",
			"codes": [
				[
					"AYVITOGL"
				]
			]
		},
		{
			"name": "Power pills don't last as long",
			"codes": [
				[
					"AZVITOGL"
				]
			]
		},
		{
			"name": "Power pills don't work",
			"codes": [
				[
					"ATXTZASZ"
				]
			]
		},
		{
			"name": "Only 3 ghosts are edible",
			"codes": [
				[
					"IAXVYEYE"
				]
			]
		},
		{
			"name": "Only 2 ghosts are edible",
			"codes": [
				[
					"PAXVYEYE"
				]
			]
		}
	]
};
