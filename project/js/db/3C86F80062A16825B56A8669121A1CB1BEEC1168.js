this.NesDb = this.NesDb || {};

NesDb[ '3C86F80062A16825B56A8669121A1CB1BEEC1168' ] = {
	"$": {
		"name": "Darkman",
		"class": "Licensed",
		"catalog": "NES-N8-ESP",
		"publisher": "Ocean",
		"developer": "Ocean",
		"region": "Spain",
		"players": "1",
		"date": "1992-11-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "CFE02ADA",
				"sha1": "3C86F80062A16825B56A8669121A1CB1BEEC1168",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-N8-0 PRG",
								"size": "128k",
								"crc": "6D84EEE3",
								"sha1": "0EDEF77C64E3B64B2EA26FB18D5B0E43E86E8C12"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-N8-0 CHR",
								"size": "128k",
								"crc": "F26183E0",
								"sha1": "B67808786300F454C38341B83816EB5A0AAF873F"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B3"
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
