this.NesDb = this.NesDb || {};

NesDb[ 'C87B3E1F17670C028CE60AF3BBC7D688DC0F9DF3' ] = {
	"$": {
		"name": "Tecmo NBA Basketball",
		"class": "Licensed",
		"catalog": "NES-BK-USA",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "USA",
		"players": "2",
		"date": "1992-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2651F227",
				"sha1": "C87B3E1F17670C028CE60AF3BBC7D688DC0F9DF3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-14"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-10",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-BK-0 PRG",
								"size": "128k",
								"crc": "20E781C2",
								"sha1": "0F36EE54CDC362C71AB28718AA9F76C1B2B322E9"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-BK-0 CHR",
								"size": "256k",
								"crc": "C0AEB750",
								"sha1": "DE112674534A6D6D0E5186D51AB1235F536CDB0D"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
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
			"name": "Infinite timeouts",
			"codes": [
				[
					"SLVUPUVS"
				]
			]
		},
		{
			"name": "2-pt. shots worth 1, 3-pt. shots worth 2",
			"codes": [
				[
					"AEOLVPPA"
				]
			]
		},
		{
			"name": "2-pt. shots worth 3, 3-pt. shots worth 4",
			"codes": [
				[
					"ZEOLVPPA"
				]
			]
		},
		{
			"name": "2-pt. shots worth 4, 3-pt. shots worth 5",
			"codes": [
				[
					"LEOLVPPA"
				]
			]
		},
		{
			"name": "2-pt. shots worth 5, 3-pt. shots worth 6",
			"codes": [
				[
					"GEOLVPPA"
				]
			]
		},
		{
			"name": "2-pt. shots worth 6, 3-pt. shots worth 7",
			"codes": [
				[
					"IEOLVPPA"
				]
			]
		},
		{
			"name": "3-pt. shots worth 2 pts.",
			"codes": [
				[
					"AVNUVOVT"
				]
			]
		},
		{
			"name": "5-second violations become 10-second violations",
			"codes": [
				[
					"NYSENZYE"
				]
			]
		},
		{
			"name": "No 10-second violations",
			"codes": [
				[
					"NYOPTNZE"
				]
			]
		},
		{
			"name": "Longer shot clock after getting ball on rebound",
			"codes": [
				[
					"ASOLSEAO"
				]
			]
		},
		{
			"name": "Shorter shot clock after getting ball on rebound",
			"codes": [
				[
					"AEOLSEAO"
				]
			]
		}
	]
};
