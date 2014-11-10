this.NesDb = this.NesDb || {};

NesDb[ 'E6DBEAB6B373B44A2FABF778BB394EAC3A636F7A' ] = {
	"$": {
		"name": "Pinball",
		"class": "Licensed",
		"catalog": "NES-PN-EEC",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Europe",
		"players": "2",
		"date": "1986-01-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"revision": "A",
				"crc": "D6AD4E9D",
				"sha1": "E6DBEAB6B373B44A2FABF778BB394EAC3A636F7A",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-09-04"
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
								"name": "PAL-PN-0 PRG",
								"size": "16k",
								"crc": "B8571339",
								"sha1": "9FB84F4B9E3EAA1DF88BE37C679CE20204ACEF77"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-PN-0 CHR",
								"size": "8k",
								"crc": "F2A53B3D",
								"sha1": "0D2A521FD984C76CBF9B3CBD47E68C6CE4C6EEAE"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
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
			"name": "Start game with 1 ball",
			"codes": [
				[
					"PASGPALA"
				]
			]
		},
		{
			"name": "Start game with 6 balls",
			"codes": [
				[
					"TASGPALA"
				]
			]
		},
		{
			"name": "Start game with 9 balls",
			"codes": [
				[
					"PASGPALE"
				]
			]
		},
		{
			"name": "Infinite balls in 'B' game",
			"codes": [
				[
					"SUXKLEVS"
				]
			]
		}
	]
};
