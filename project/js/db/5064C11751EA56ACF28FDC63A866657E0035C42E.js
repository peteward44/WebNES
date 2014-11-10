this.NesDb = this.NesDb || {};

NesDb[ '5064C11751EA56ACF28FDC63A866657E0035C42E' ] = {
	"$": {
		"name": "Ys",
		"altname": "イース",
		"class": "Licensed",
		"catalog": "VFR-Y2-05",
		"publisher": "Victor",
		"developer": "Nihon Falcom",
		"portdeveloper": "Advance Communication",
		"region": "Japan",
		"players": "1",
		"date": "1988-08-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "92547F1C",
				"sha1": "5064C11751EA56ACF28FDC63A866657E0035C42E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-15"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "VFR-Y2-0 PRG",
								"size": "256k",
								"crc": "92547F1C",
								"sha1": "5064C11751EA56ACF28FDC63A866657E0035C42E"
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
