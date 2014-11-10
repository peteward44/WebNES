this.NesDb = this.NesDb || {};

NesDb[ 'ADFE24B8CFB6411DDEA238058D027EC0458FA3C4' ] = {
	"$": {
		"name": "Adventures of Lolo",
		"class": "Licensed",
		"catalog": "NES-AV-USA",
		"publisher": "HAL Laboratory",
		"developer": "HAL Laboratory",
		"region": "USA",
		"players": "1",
		"date": "1989-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "71BF075F",
				"sha1": "ADFE24B8CFB6411DDEA238058D027EC0458FA3C4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-SEROM",
						"pcb": "NES-SEROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-AV-0 PRG",
								"size": "32k",
								"crc": "E5682E52",
								"sha1": "0F7C4172BD7B2016D87B359F7BFC33A867C4B47E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-AV-0 CHR",
								"size": "32k",
								"crc": "8700C250",
								"sha1": "24EE3AC43F5740B03B50AD1B78E3509B5F4DA1C9"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SXOPSPVG"
				]
			]
		},
		{
			"name": "1 life for Lolo",
			"codes": [
				[
					"PEKPOAIA"
				]
			]
		},
		{
			"name": "9 lives for Lolo",
			"codes": [
				[
					"PEKPOAIE"
				]
			]
		}
	]
};
