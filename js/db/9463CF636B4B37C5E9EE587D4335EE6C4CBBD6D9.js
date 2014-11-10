this.NesDb = this.NesDb || {};

NesDb[ '9463CF636B4B37C5E9EE587D4335EE6C4CBBD6D9' ] = {
	"$": {
		"name": "Super Star Force",
		"altname": "スーパースターフォース",
		"class": "Licensed",
		"catalog": "TCF-ST",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Japan",
		"players": "1",
		"date": "1986-11-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3FA96277",
				"sha1": "9463CF636B4B37C5E9EE587D4335EE6C4CBBD6D9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-01",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "TCF-ST-0 PRG",
								"size": "128k",
								"crc": "3FA96277",
								"sha1": "9463CF636B4B37C5E9EE587D4335EE6C4CBBD6D9"
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
