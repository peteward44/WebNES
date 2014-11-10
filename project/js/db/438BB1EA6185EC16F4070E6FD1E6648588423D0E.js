this.NesDb = this.NesDb || {};

NesDb[ '438BB1EA6185EC16F4070E6FD1E6648588423D0E' ] = {
	"$": {
		"name": "Nintendo World Cup",
		"class": "Licensed",
		"catalog": "NES-XZ-FRA",
		"publisher": "Nintendo",
		"developer": "Technos",
		"region": "France",
		"players": "4",
		"date": "1990-12-04"
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
				"system": "NES-PAL-A",
				"crc": "8DA6667D",
				"sha1": "438BB1EA6185EC16F4070E6FD1E6648588423D0E",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-XZ-0 PRG",
								"size": "128k",
								"crc": "725B0234",
								"sha1": "14968EDAFA080A967E7415384A4B83ACA7465C1F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-XZ-0 CHR",
								"size": "128k",
								"crc": "92477D53",
								"sha1": "33225BD5EE72F92761FDCE931C93DD54E6885BD4"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "1 minute in tournament mode",
			"codes": [
				[
					"AAUVKZLA"
				]
			]
		},
		{
			"name": "6 minutes in tournament mode",
			"codes": [
				[
					"IAUVKZLA"
				]
			]
		},
		{
			"name": "9 minutes in tournament mode",
			"codes": [
				[
					"AAUVKZLE"
				]
			]
		},
		{
			"name": "6 minutes in match mode",
			"codes": [
				[
					"IAKTXXPA"
				]
			]
		},
		{
			"name": "3 minutes in match mode",
			"codes": [
				[
					"ZAKTXXPA"
				]
			]
		},
		{
			"name": "1 minutes in match mode",
			"codes": [
				[
					"AAKTXXPA"
				]
			]
		},
		{
			"name": "Faster players",
			"codes": [
				[
					"PEXLUIAA"
				]
			]
		},
		{
			"name": "More powerful 'normal' shots",
			"codes": [
				[
					"AYXXNXAL"
				]
			]
		}
	]
};
