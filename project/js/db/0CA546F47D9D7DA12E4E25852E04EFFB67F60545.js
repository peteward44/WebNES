this.NesDb = this.NesDb || {};

NesDb[ '0CA546F47D9D7DA12E4E25852E04EFFB67F60545' ] = {
	"$": {
		"name": "Tecmo World Cup Soccer",
		"class": "Licensed",
		"catalog": "NES-WC-FRG",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Germany",
		"players": "2",
		"date": "1991-08-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "86E02D65",
				"sha1": "0CA546F47D9D7DA12E4E25852E04EFFB67F60545",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-09-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-TBROM",
						"pcb": "NES-TBROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-WC-0 PRG",
								"size": "64k",
								"crc": "42F3BA28",
								"sha1": "0028D6A715CB45B1BABB414C14E587DEE9DECEA2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-WC-0 CHR",
								"size": "64k",
								"crc": "369626DD",
								"sha1": "C4C89C640F870137BF8D7065DA3D38F31851057B"
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
			"name": "Never lose guts",
			"codes": [
				[
					"OXUEPTOO"
				]
			]
		},
		{
			"name": "Everyone has more guts",
			"codes": [
				[
					"ASNIEIAZ",
					"TENIOILA"
				]
			]
		}
	]
};
