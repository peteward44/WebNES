this.NesDb = this.NesDb || {};

NesDb[ '2DC2C795421A5DB2427C460F35828A23BEBA9274' ] = {
	"$": {
		"name": "Lagrange Point",
		"altname": "ラグランジュポイント",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC851",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1991-04-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "743387FF",
				"sha1": "2DC2C795421A5DB2427C460F35828A23BEBA9274",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2009-06-24"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-7",
						"pcb": "352402",
						"mapper": "85"
					},
					"prg": [
						{
							"$": {
								"name": "RC851J00P",
								"size": "512k",
								"crc": "743387FF",
								"sha1": "2DC2C795421A5DB2427C460F35828A23BEBA9274"
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
								"type": "MM1026"
							}
						},
						{
							"$": {
								"type": "VRC7"
							},
							"pin": [
								{
									"$": {
										"number": "17",
										"function": "PRG A4"
									}
								}
							]
						}
					]
				}
			]
		}
	]
};
