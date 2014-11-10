this.NesDb = this.NesDb || {};

NesDb[ '4FFB1D8171589ED8ED66FECC6CEBB4501AF221B9' ] = {
	"$": {
		"name": "Capcom's Gold Medal Challenge '92",
		"class": "Licensed",
		"catalog": "NES-GM-USA",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "USA",
		"players": "8",
		"date": "1992-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "BE250388",
				"sha1": "4FFB1D8171589ED8ED66FECC6CEBB4501AF221B9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-10-10"
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
								"name": "NES-GM-0 PRG",
								"size": "128k",
								"crc": "6A5ABFAC",
								"sha1": "70F4D510A9F085640D52013208867CACB9099609"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-GM-0 CHR",
								"size": "128k",
								"crc": "3F092CDF",
								"sha1": "73E1B31187ED172F0F175D2AFAE865E0DF376BEE"
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
			"name": "Massive run power",
			"codes": [
				[
					"OXSYZVON",
					"ASSYLTEY",
					"XVSYGTVN"
				]
			]
		}
	]
};
