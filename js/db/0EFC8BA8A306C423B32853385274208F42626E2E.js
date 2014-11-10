this.NesDb = this.NesDb || {};

NesDb[ '0EFC8BA8A306C423B32853385274208F42626E2E' ] = {
	"$": {
		"name": "Shadowgate",
		"class": "Licensed",
		"catalog": "NES-3S-HOL",
		"publisher": "Kemco",
		"developer": "Icom Simulations",
		"region": "Netherlands",
		"players": "1",
		"date": "1991-05-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "13E01649",
				"sha1": "0EFC8BA8A306C423B32853385274208F42626E2E",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-3S-0 PRG",
								"size": "128k",
								"crc": "0ADB2C4C",
								"sha1": "BC70C6B2A6FF59BD1CEC81B8DF3160B7109D8924"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-3S-0 CHR",
								"size": "128k",
								"crc": "05414DD9",
								"sha1": "893C82B8F9D4561E94E567005352F8817E04077C"
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
	]
};
