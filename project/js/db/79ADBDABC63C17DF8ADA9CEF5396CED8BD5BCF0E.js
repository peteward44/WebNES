this.NesDb = this.NesDb || {};

NesDb[ '79ADBDABC63C17DF8ADA9CEF5396CED8BD5BCF0E' ] = {
	"$": {
		"name": "Best Play Pro Yakyuu",
		"altname": "ベストプレープロ野球",
		"class": "Licensed",
		"catalog": "HSP-11",
		"publisher": "ASCII",
		"developer": "ASCII",
		"region": "Japan",
		"players": "2",
		"date": "1988-07-15"
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
				"crc": "3BBFF3A6",
				"sha1": "79ADBDABC63C17DF8ADA9CEF5396CED8BD5BCF0E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-23"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SJROM",
						"pcb": "HVC-SJROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HSP-11-0 PRG",
								"size": "128k",
								"crc": "F79D684A",
								"sha1": "EF9264FE6AE3F4AA53961E2CF6795D0FCFA606E7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HSP-11-0 CHR",
								"size": "32k",
								"crc": "13DE672A",
								"sha1": "E0168759766EE4DE4ED84475437F67E6FDDC964C"
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
