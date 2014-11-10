this.NesDb = this.NesDb || {};

NesDb[ 'A34E68372082513209A795786C8EEA493CC2CD14' ] = {
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
				"crc": "A9BBF44F",
				"sha1": "A34E68372082513209A795786C8EEA493CC2CD14",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-02-26"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-128",
						"pcb": "NES-NROM-128-04",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "NES-PQ-0 PRG",
								"size": "16k",
								"crc": "E35321BC",
								"sha1": "5DD6D83B9827793F1DA12923F2212E4D7502CF9A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-PQ-0 CHR",
								"size": "8k",
								"crc": "49ABEEE6",
								"sha1": "6255630A4D5634F1F03CBFB6266BF8C5F307205E"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113A"
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
