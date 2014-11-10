this.NesDb = this.NesDb || {};

NesDb[ 'AD8690675ECF3F3A86278A07AD442ABDF7EFB768' ] = {
	"$": {
		"name": "Tecmo World Wrestling",
		"class": "Licensed",
		"catalog": "NES-PZ-USA",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "USA",
		"players": "2",
		"date": "1990-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "7FF76219",
				"sha1": "AD8690675ECF3F3A86278A07AD442ABDF7EFB768",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-27"
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
								"name": "NES-PZ-0 PRG",
								"size": "128k",
								"crc": "4187EC10",
								"sha1": "98D45CD94CB53C06EC4A4D7CCA34FBA825A4D8A1"
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
