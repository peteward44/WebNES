this.NesDb = this.NesDb || {};

NesDb[ '4746A11F2A8156E1FAED5FE6074257E50AE8071A' ] = {
	"$": {
		"name": "Tecmo World Wrestling",
		"class": "Licensed",
		"catalog": "NES-PZ-EEC",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Europe",
		"players": "2",
		"date": "1990-11-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "CF849F72",
				"sha1": "4746A11F2A8156E1FAED5FE6074257E50AE8071A",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-03-09"
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
								"name": "PAL-PZ-0 PRG",
								"size": "128k",
								"crc": "790D2916",
								"sha1": "1B4999F81F4F1FAE89DF5E51AD52886844BAEB0E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-PZ-0 CHR",
								"size": "128k",
								"crc": "849275C5",
								"sha1": "D08BE2823E47CED9C06C1C69D268A7AD8CB08644"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
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
			"name": "Half training time allowed",
			"codes": [
				[
					"IEUSTOZA"
				]
			]
		},
		{
			"name": "Double training time allowed",
			"codes": [
				[
					"GOUSTOZA"
				]
			]
		}
	]
};
