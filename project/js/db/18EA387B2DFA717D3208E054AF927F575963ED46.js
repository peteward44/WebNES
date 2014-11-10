this.NesDb = this.NesDb || {};

NesDb[ '18EA387B2DFA717D3208E054AF927F575963ED46' ] = {
	"$": {
		"name": "Shatterhand",
		"class": "Licensed",
		"catalog": "NES-9H-NOE",
		"publisher": "Jaleco",
		"developer": "Natsume",
		"region": "Germany",
		"players": "1",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "348D3FF1",
				"sha1": "18EA387B2DFA717D3208E054AF927F575963ED46",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-10"
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
								"name": "PAL-9H-0 PRG",
								"size": "128k",
								"crc": "97E2B312",
								"sha1": "898D2350595EDAE3A4F3C94034A9780579F4F439"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-9H-0 CHR",
								"size": "128k",
								"crc": "AB8CB0CF",
								"sha1": "44A6A617A395143783A09245D641988A47A8A0E8"
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
			"name": "Start with 1 life",
			"codes": [
				[
					"AEVNAIZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IEVNAIZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEVNAIZE"
				]
			]
		},
		{
			"name": "Play with less energy",
			"codes": [
				[
					"GENNZSAA"
				]
			]
		},
		{
			"name": "Power-ups don't use up gold",
			"codes": [
				[
					"AAKKSPPA"
				]
			]
		},
		{
			"name": "Double the value of big coins",
			"codes": [
				[
					"AXXAZZGO"
				]
			]
		},
		{
			"name": "Big coins only worth 1/2",
			"codes": [
				[
					"ZEXAZZGO"
				]
			]
		},
		{
			"name": "Triple the value of small coins",
			"codes": [
				[
					"YEEAYZIE"
				]
			]
		}
	]
};
