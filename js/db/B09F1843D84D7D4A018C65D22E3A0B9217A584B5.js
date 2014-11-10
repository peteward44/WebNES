this.NesDb = this.NesDb || {};

NesDb[ 'B09F1843D84D7D4A018C65D22E3A0B9217A584B5' ] = {
	"$": {
		"name": "Mizushima Shinji no Dai Koushien",
		"altname": "水島新司の大甲子園",
		"class": "Licensed",
		"catalog": "STE-VC",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "1",
		"date": "1990-10-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "09C1FC7D",
				"sha1": "B09F1843D84D7D4A018C65D22E3A0B9217A584B5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SGROM",
						"pcb": "HVC-SGROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "STE-VC-0 PRG",
								"size": "256k",
								"crc": "09C1FC7D",
								"sha1": "B09F1843D84D7D4A018C65D22E3A0B9217A584B5"
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
					]
				}
			]
		}
	]
};
