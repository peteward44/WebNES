this.NesDb = this.NesDb || {};

NesDb[ '8F228F38437423388A2E0860C05B1798E20CFE95' ] = {
	"$": {
		"name": "Best Play Pro Yakyuu '90, The",
		"altname": "ベストプレープロ野球'９０",
		"class": "Licensed",
		"catalog": "HSP-36",
		"publisher": "ASCII",
		"developer": "ASCII",
		"region": "Japan",
		"players": "2",
		"date": "1990-12-13"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "turbofile",
						"name": "TurboFile"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "974E8840",
				"sha1": "8F228F38437423388A2E0860C05B1798E20CFE95",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
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
								"name": "HSP-36-0 PRG",
								"size": "256k",
								"crc": "974E8840",
								"sha1": "8F228F38437423388A2E0860C05B1798E20CFE95"
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
