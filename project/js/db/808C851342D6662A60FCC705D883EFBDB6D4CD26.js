this.NesDb = this.NesDb || {};

NesDb[ '808C851342D6662A60FCC705D883EFBDB6D4CD26' ] = {
	"$": {
		"name": "Roundball: 2-on-2 Challenge",
		"class": "Licensed",
		"catalog": "NES-RW-NOE",
		"publisher": "Mindscape",
		"developer": "Mindscape",
		"region": "Germany",
		"players": "4",
		"date": "1992"
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
				"crc": "AD0394F0",
				"sha1": "808C851342D6662A60FCC705D883EFBDB6D4CD26",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-09-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-08",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-RW-0 PRG",
								"size": "128k",
								"crc": "715F3294",
								"sha1": "96ABF4B13C752DF756C5905F6AE1E1F63D6C90AD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-RW-0 CHR",
								"size": "128k",
								"crc": "60173D62",
								"sha1": "37EB29F28DD643F53B08AC79BF31F847B7307228"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
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
	]
};
