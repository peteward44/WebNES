this.NesDb = this.NesDb || {};

NesDb[ '31C720F9A75EB2D069244BD257AA23DE6B5BCE8B' ] = {
	"$": {
		"name": "Dynablaster",
		"class": "Licensed",
		"catalog": "NES-49-FRG",
		"publisher": "Hudson Soft",
		"developer": "Hudson Soft",
		"region": "Germany",
		"players": "2",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "34BB757B",
				"sha1": "31C720F9A75EB2D069244BD257AA23DE6B5BCE8B",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-19"
			},
			"board": [
				{
					"$": {
						"type": "NES-SNROM",
						"pcb": "NES-SNROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-49-0 PRG",
								"size": "128k",
								"crc": "34BB757B",
								"sha1": "31C720F9A75EB2D069244BD257AA23DE6B5BCE8B"
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
	]
};
