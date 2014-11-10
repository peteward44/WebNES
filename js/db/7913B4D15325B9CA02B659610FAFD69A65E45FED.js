this.NesDb = this.NesDb || {};

NesDb[ '7913B4D15325B9CA02B659610FAFD69A65E45FED' ] = {
	"$": {
		"name": "Nintendo World Cup",
		"class": "Licensed",
		"catalog": "NES-XZ-NOE",
		"publisher": "Nintendo",
		"developer": "Technos",
		"region": "Germany",
		"players": "4",
		"date": "1991-06-27"
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
				"system": "NES-PAL-B",
				"revision": "A",
				"crc": "7C16F819",
				"sha1": "7913B4D15325B9CA02B659610FAFD69A65E45FED",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-09-10"
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
								"name": "PAL-XZ-1 PRG",
								"size": "128k",
								"crc": "DB2F988D",
								"sha1": "04FC1FF75E9EE768D7DF052331CA9377BF3D043A"
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
								"type": "3195A"
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
