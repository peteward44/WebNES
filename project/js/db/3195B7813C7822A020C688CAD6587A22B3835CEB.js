this.NesDb = this.NesDb || {};

NesDb[ '3195B7813C7822A020C688CAD6587A22B3835CEB' ] = {
	"$": {
		"name": "Heavy Shreddin'",
		"class": "Licensed",
		"catalog": "NES-WX-USA",
		"publisher": "Parker Brothers",
		"developer": "Imagineering",
		"region": "USA",
		"players": "1",
		"date": "1990-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "EB15169E",
				"sha1": "3195B7813C7822A020C688CAD6587A22B3835CEB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-17"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-WX-0 PRG",
								"size": "128k",
								"crc": "01A1509A",
								"sha1": "CD75EC3C8C940E134D21C33911F6B9DC11CFFD69"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-WX-0 CHR",
								"size": "128k",
								"crc": "1C90046B",
								"sha1": "87B4D43CBD60713C1F9E28A41D7B28ED6AF7CE21"
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
			"name": "Slow timer",
			"codes": [
				[
					"AUEXNVAO"
				]
			]
		},
		{
			"name": "1 penalty",
			"codes": [
				[
					"PEKAPLGA"
				]
			]
		},
		{
			"name": "8 penalties",
			"codes": [
				[
					"AEKAPLGE"
				]
			]
		},
		{
			"name": "16 penalties",
			"codes": [
				[
					"AOKAPLGA"
				]
			]
		},
		{
			"name": "Select any level",
			"codes": [
				[
					"NNUEYLAE"
				]
			]
		},
		{
			"name": "Faster left and right movement",
			"codes": [
				[
					"ZESEKLPA",
					"ZEVEKLPA"
				]
			]
		},
		{
			"name": "Infinite penalties",
			"codes": [
				[
					"SXSOYIVG",
					"SXOPPLVG",
					"SXUOZLVG"
				]
			]
		}
	]
};
