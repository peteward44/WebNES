this.NesDb = this.NesDb || {};

NesDb[ '1C8DDA6E0F1797AA5B9CBB56B11C33BC760BC3EB' ] = {
	"$": {
		"name": "Skate or Die!",
		"class": "Licensed",
		"catalog": "NES-DI-EEC",
		"publisher": "Palcom",
		"developer": "Electronic Arts",
		"portdeveloper": "Konami",
		"region": "Europe",
		"players": "8",
		"date": "1990-08-17"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "66EBDB64",
				"sha1": "1C8DDA6E0F1797AA5B9CBB56B11C33BC760BC3EB",
				"dump": "ok",
				"dumper": "Bregalad",
				"datedumped": "2007-04-06"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-DI-0 PRG",
								"size": "128k",
								"crc": "66EBDB64",
								"sha1": "1C8DDA6E0F1797AA5B9CBB56B11C33BC760BC3EB"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
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
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
