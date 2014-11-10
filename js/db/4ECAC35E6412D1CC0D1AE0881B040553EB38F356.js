this.NesDb = this.NesDb || {};

NesDb[ '4ECAC35E6412D1CC0D1AE0881B040553EB38F356' ] = {
	"$": {
		"name": "Break Time: The National Pool Tour",
		"class": "Licensed",
		"catalog": "NES-BZ-USA",
		"publisher": "FCI",
		"developer": "Opera House",
		"region": "USA",
		"players": "2",
		"date": "1993-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5F0BCE2A",
				"sha1": "4ECAC35E6412D1CC0D1AE0881B040553EB38F356",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-28"
			},
			"board": [
				{
					"$": {
						"type": "NES-SFROM",
						"pcb": "NES-SFROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-BZ-0 PRG",
								"size": "128k",
								"crc": "50059012",
								"sha1": "6E00AC1085665026FBDBAF9FC516E53BD16D9CBC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-BZ-0 CHR",
								"size": "32k",
								"crc": "F0314DEF",
								"sha1": "7D410A1BF51FF107438C413D6A7FF8B321B5A2D4"
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
			"name": "Start in Milwaukee",
			"codes": [
				[
					"VAVEILSA",
					"PAVEGLAA"
				]
			]
		},
		{
			"name": "Start in Atlanta",
			"codes": [
				[
					"VAVEILSA",
					"ZAVEGLAA"
				]
			]
		},
		{
			"name": "Start in Los Angeles",
			"codes": [
				[
					"VAVEILSA",
					"LAVEGLAA"
				]
			]
		},
		{
			"name": "Start in Las Vegas",
			"codes": [
				[
					"VAVEILSA",
					"GAVEGLAA"
				]
			]
		}
	]
};
