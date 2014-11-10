this.NesDb = this.NesDb || {};

NesDb[ 'D529E7FB2BA1AEEFD7F7A5258B53732461F85BA0' ] = {
	"$": {
		"name": "Nintendo World Cup",
		"class": "Licensed",
		"catalog": "NES-XZ-USA",
		"publisher": "Nintendo",
		"developer": "Technos",
		"region": "USA",
		"players": "4",
		"date": "1990-12"
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
				"crc": "A22657FA",
				"sha1": "D529E7FB2BA1AEEFD7F7A5258B53732461F85BA0",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-18"
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
								"name": "NES-XZ-0 PRG",
								"size": "128k",
								"crc": "DE8C89AB",
								"sha1": "17B1A56755B43634F4E0B4C927D68265E1EE0656"
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
