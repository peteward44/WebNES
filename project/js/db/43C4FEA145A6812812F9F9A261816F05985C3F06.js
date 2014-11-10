this.NesDb = this.NesDb || {};

NesDb[ '43C4FEA145A6812812F9F9A261816F05985C3F06' ] = {
	"$": {
		"name": "Mappy-Land",
		"altname": "マッピーランド",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-ML-3900",
		"publisher": "Namco",
		"developer": "Namco",
		"portdeveloper": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1986-11-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "2E563C66",
				"sha1": "43C4FEA145A6812812F9F9A261816F05985C3F06",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-07-06"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-3415",
						"pcb": "3415",
						"mapper": "206"
					},
					"prg": [
						{
							"$": {
								"name": "NAMCOT ML PRG",
								"size": "128k",
								"crc": "15BE6E58",
								"sha1": "6001A25F88C85D58F23BA6DC70D945722BE5FED5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAMCOT ML CHR",
								"size": "32k",
								"crc": "7F107D71",
								"sha1": "2C063E62214152CF35F50AED1E44AA01AF0D285D"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "109"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SZKXITVG"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AEXXTAZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IEXXTAZA"
				]
			]
		},
		{
			"name": "Start with 6 toys",
			"codes": [
				[
					"TESXALLA"
				]
			]
		},
		{
			"name": "Start with 1 toy",
			"codes": [
				[
					"PESXALLA"
				]
			]
		},
		{
			"name": "Start with coins, not toys",
			"codes": [
				[
					"LESZALAA"
				]
			]
		},
		{
			"name": "Start with fish, not toys",
			"codes": [
				[
					"PESZALAA"
				]
			]
		},
		{
			"name": "Start with pots, not toys",
			"codes": [
				[
					"ZESZALAA"
				]
			]
		}
	]
};
