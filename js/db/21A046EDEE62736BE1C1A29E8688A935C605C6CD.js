this.NesDb = this.NesDb || {};

NesDb[ '21A046EDEE62736BE1C1A29E8688A935C605C6CD' ] = {
	"$": {
		"name": "Legends of the Diamond: The Baseball Championship Game",
		"class": "Licensed",
		"catalog": "NES-8L-USA",
		"publisher": "Bandai",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "2",
		"date": "1992-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "05CE560C",
				"sha1": "21A046EDEE62736BE1C1A29E8688A935C605C6CD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
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
								"name": "NES-8L-0 PRG",
								"size": "128k",
								"crc": "69684E1E",
								"sha1": "77A1DA47DDCB4855DBF0B754312E2CB59F4BCB14"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-8L-0 CHR",
								"size": "256k",
								"crc": "B2AAAE36",
								"sha1": "9AA78193587C0752AC01B1EB7BDB6B9B2374AC5E"
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
			"name": "1 ball and you walk",
			"codes": [
				[
					"PEKLAIGA"
				]
			]
		},
		{
			"name": "2 balls and you walk",
			"codes": [
				[
					"ZEKLAIGA"
				]
			]
		},
		{
			"name": "6 balls to walk",
			"codes": [
				[
					"TEKLAIGA"
				]
			]
		},
		{
			"name": "1 strike and you're out (fouls don't count as strikes)",
			"codes": [
				[
					"PASUGILA"
				]
			]
		},
		{
			"name": "2 strikes and you're out (fouls don't count as strikes)",
			"codes": [
				[
					"ZASUGILA"
				]
			]
		},
		{
			"name": "5 strikes and you're out--ignore counter (fouls don't count as strikes)",
			"codes": [
				[
					"IASUGILA"
				]
			]
		}
	]
};
