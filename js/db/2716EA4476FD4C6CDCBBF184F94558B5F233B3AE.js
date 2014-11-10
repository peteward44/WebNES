this.NesDb = this.NesDb || {};

NesDb[ '2716EA4476FD4C6CDCBBF184F94558B5F233B3AE' ] = {
	"$": {
		"name": "Pac-Man",
		"altname": "パックマン",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-NPM-4500-02",
		"publisher": "Namco",
		"developer": "Namco",
		"region": "Japan",
		"players": "2",
		"date": "1984-11-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "5CDB2823",
				"sha1": "2716EA4476FD4C6CDCBBF184F94558B5F233B3AE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-19"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-3301",
						"pcb": "3301",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "NAMCOT PM PRG",
								"size": "16k",
								"crc": "2BF9D836",
								"sha1": "160920895EC9FF4ED832CD16C9B2BE5352FEEBAE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAMCOT PM CHR",
								"size": "8k",
								"crc": "49ABEEE6",
								"sha1": "6255630A4D5634F1F03CBFB6266BF8C5F307205E"
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
