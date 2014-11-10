this.NesDb = this.NesDb || {};

NesDb[ 'AB5DC98F1D6D220708F5DEC4E87BEC175BB635AB' ] = {
	"$": {
		"name": "Pac-Man",
		"class": "Licensed",
		"catalog": "NES-PQ-USA",
		"publisher": "Tengen",
		"developer": "Namco",
		"region": "USA",
		"players": "2",
		"date": "1989"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "9D38F8F9",
				"sha1": "AB5DC98F1D6D220708F5DEC4E87BEC175BB635AB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-02"
			},
			"board": [
				{
					"$": {
						"type": "TENGEN-800003",
						"pcb": "800003-01 REV C",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "335003-1011",
								"size": "16k",
								"crc": "7154ACB5",
								"sha1": "799B199BDB43FE5F97A37BD37294802515A13DFA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "335003-1012",
								"size": "8k",
								"crc": "49ABEEE6",
								"sha1": "6255630A4D5634F1F03CBFB6266BF8C5F307205E"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "337002"
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
