this.NesDb = this.NesDb || {};

NesDb[ 'C039B782EDA5A79097BC3FA761A3F7C663AAB6DC' ] = {
	"$": {
		"name": "Reigen Doushi",
		"altname": "霊幻道士",
		"class": "Licensed",
		"catalog": "PNF-KY (R59V5917)",
		"publisher": "Pony Canyon",
		"developer": "Marionette",
		"region": "Japan",
		"players": "1",
		"date": "1988-09-16"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "0021ED29",
				"sha1": "C039B782EDA5A79097BC3FA761A3F7C663AAB6DC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-21"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SGROM",
						"pcb": "HVC-SGROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PNF-KY-0 PRG",
								"size": "256k",
								"crc": "0021ED29",
								"sha1": "C039B782EDA5A79097BC3FA761A3F7C663AAB6DC"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
