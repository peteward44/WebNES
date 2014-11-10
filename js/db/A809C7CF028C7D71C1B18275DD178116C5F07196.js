this.NesDb = this.NesDb || {};

NesDb[ 'A809C7CF028C7D71C1B18275DD178116C5F07196' ] = {
	"$": {
		"name": "Target: Renegade",
		"class": "Licensed",
		"catalog": "NES-NE-USA",
		"publisher": "Taito",
		"developer": "Software Creations",
		"region": "USA",
		"players": "1",
		"date": "1990-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "93B49582",
				"sha1": "A809C7CF028C7D71C1B18275DD178116C5F07196",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-NE-0 PRG",
								"size": "128k",
								"crc": "9731A9A3",
								"sha1": "7013C95EF3EEE99C9065DCED77CACF37CBEB264C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-NE-0 CHR",
								"size": "128k",
								"crc": "F0DD96D1",
								"sha1": "1A4A7439A8C1443E80276C1F75D25369EA8A9B52"
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
			"name": "Freeze timer",
			"codes": [
				[
					"SZEAOZVG"
				]
			]
		},
		{
			"name": "Set timer to 5:00 for all levels",
			"codes": [
				[
					"SXEATXSU"
				]
			]
		},
		{
			"name": "Hearts replenish energy to maximum",
			"codes": [
				[
					"AEKESZZA"
				]
			]
		},
		{
			"name": "Don't take most damage",
			"codes": [
				[
					"SXVZVTSA"
				]
			]
		},
		{
			"name": "Take half damage from bosses",
			"codes": [
				[
					"TASPSPGP"
				]
			]
		},
		{
			"name": "Start on level 2",
			"codes": [
				[
					"PAOOYZAA"
				]
			]
		},
		{
			"name": "Start on level 3",
			"codes": [
				[
					"ZAOOYZAA"
				]
			]
		},
		{
			"name": "Start on level 4",
			"codes": [
				[
					"LAOOYZAA"
				]
			]
		},
		{
			"name": "Start on level 5",
			"codes": [
				[
					"GAOOYZAA"
				]
			]
		},
		{
			"name": "Start on level 6",
			"codes": [
				[
					"IAOOYZAA"
				]
			]
		},
		{
			"name": "Start on level 7",
			"codes": [
				[
					"TAOOYZAA"
				]
			]
		},
		{
			"name": "Set timer to 3:00 for all levels",
			"codes": [
				[
					"SXEATXSU",
					"NKEEAZEE"
				]
			]
		}
	]
};
