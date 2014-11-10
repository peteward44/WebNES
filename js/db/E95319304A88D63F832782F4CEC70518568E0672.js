this.NesDb = this.NesDb || {};

NesDb[ 'E95319304A88D63F832782F4CEC70518568E0672' ] = {
	"$": {
		"name": "Millipede",
		"class": "Licensed",
		"catalog": "NES-ML-USA",
		"publisher": "HAL Laboratory",
		"developer": "HAL Laboratory",
		"region": "USA",
		"players": "2",
		"date": "1988-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "AE52DECE",
				"sha1": "E95319304A88D63F832782F4CEC70518568E0672",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-01"
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
								"name": "NES-ML-0 PRG",
								"size": "16k",
								"crc": "0AB06C51",
								"sha1": "9E3C659F4D181821C809809E5FC2BA46A066D70A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-ML-0 CHR",
								"size": "8k",
								"crc": "3D3DAE3F",
								"sha1": "F725BC47095FA0C2AE7BF1A84AEBBB97AF1B30E4"
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
								"h": "1",
								"v": "0"
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
					"SUKGETVI"
				]
			]
		},
		{
			"name": "Player 1 starts with 1 life",
			"codes": [
				[
					"PAVKSPGA"
				]
			]
		},
		{
			"name": "Player 1 starts with 10 lives",
			"codes": [
				[
					"ZAVKSPGE"
				]
			]
		},
		{
			"name": "Increase territory to half screen",
			"codes": [
				[
					"ASESIIEZ"
				]
			]
		},
		{
			"name": "Increase territory to full screen",
			"codes": [
				[
					"AXESIIEZ"
				]
			]
		},
		{
			"name": "Shrink territory!",
			"codes": [
				[
					"NKESIIEZ"
				]
			]
		},
		{
			"name": "Player's bullets move faster",
			"codes": [
				[
					"ZEUSXYTE"
				]
			]
		},
		{
			"name": "Player's bullets move slower",
			"codes": [
				[
					"LEUSXYTA"
				]
			]
		}
	]
};
