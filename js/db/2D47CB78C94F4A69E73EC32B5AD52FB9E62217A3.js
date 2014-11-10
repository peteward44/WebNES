this.NesDb = this.NesDb || {};

NesDb[ '2D47CB78C94F4A69E73EC32B5AD52FB9E62217A3' ] = {
	"$": {
		"name": "Bikkuriman World: Gekitou Sei Senshi",
		"altname": "ビックリマンワールド　激闘聖戦士",
		"class": "Licensed",
		"catalog": "HFC-V3",
		"publisher": "Hudson Soft",
		"developer": "Atlus",
		"region": "Japan",
		"players": "1",
		"date": "1990-07-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C6224026",
				"sha1": "2D47CB78C94F4A69E73EC32B5AD52FB9E62217A3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-09",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HFC-V3-0 PRG",
								"size": "256k",
								"crc": "C6224026",
								"sha1": "2D47CB78C94F4A69E73EC32B5AD52FB9E62217A3"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
