this.NesDb = this.NesDb || {};

NesDb[ '47548D1BE1470F086DC94D6784AD01C1733D9AAE' ] = {
	"$": {
		"name": "Xevious",
		"class": "Licensed",
		"catalog": "NES-XV-EEC",
		"publisher": "Bandai",
		"developer": "Namco",
		"region": "Europe",
		"players": "2",
		"date": "1989-10-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "D745D7CB",
				"sha1": "47548D1BE1470F086DC94D6784AD01C1733D9AAE",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-14"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-256",
						"pcb": "NES-NROM-256-05",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-XV-0 PRG",
								"size": "32k",
								"crc": "A8104FB2",
								"sha1": "D8BD8C5A11DF5603285990AEF02A26D765389EEC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-XV-0 CHR",
								"size": "8k",
								"crc": "668B4EE6",
								"sha1": "0500A8D27D9D51169F0D36C437448C84F373FE61"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
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
					"SZLNZY"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PAZYOG"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TAZYOG"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PAZYOK"
				]
			]
		}
	]
};
