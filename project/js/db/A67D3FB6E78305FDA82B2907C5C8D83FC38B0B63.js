this.NesDb = this.NesDb || {};

NesDb[ 'A67D3FB6E78305FDA82B2907C5C8D83FC38B0B63' ] = {
	"$": {
		"name": "M.U.L.E.",
		"class": "Licensed",
		"catalog": "NES-L6-USA",
		"publisher": "Mindscape",
		"developer": "Ozark Softscape",
		"region": "USA",
		"players": "4",
		"date": "1990-09"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "fourplayer",
						"name": "4-Player Adapter"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "0939852F",
				"sha1": "A67D3FB6E78305FDA82B2907C5C8D83FC38B0B63",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-11-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-SNROM",
						"pcb": "NES-SNROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-L6-0 PRG",
								"size": "128k",
								"crc": "0939852F",
								"sha1": "A67D3FB6E78305FDA82B2907C5C8D83FC38B0B63"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
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
			"name": "4 'months' for beginner game",
			"codes": [
				[
					"GEKALTTA"
				]
			]
		},
		{
			"name": "9 'months' for beginner game",
			"codes": [
				[
					"PEKALTTE"
				]
			]
		},
		{
			"name": "6 'months' for standard game",
			"codes": [
				[
					"TEXAIVGA"
				]
			]
		},
		{
			"name": "20 'months' for standard game",
			"codes": [
				[
					"GOXAIVGA"
				]
			]
		},
		{
			"name": "Humanoids start with $400",
			"codes": [
				[
					"EPOEPNAI",
					"PAOETYZA"
				]
			]
		},
		{
			"name": "Humanoids start with $800",
			"codes": [
				[
					"AZOEPNAI",
					"LAOETYZA"
				]
			]
		},
		{
			"name": "Flappers start with $1300",
			"codes": [
				[
					"GPUAAYAG",
					"IAUAIYTA"
				]
			]
		},
		{
			"name": "Flappers start with $2000",
			"codes": [
				[
					"EIUAAYAG",
					"YAUAIYTA"
				]
			]
		}
	]
};
