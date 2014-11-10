this.NesDb = this.NesDb || {};

NesDb[ '55DF1D724F051B38630E2BD14BC02EDF2650F2BD' ] = {
	"$": {
		"name": "Ninjara Hoi!",
		"altname": "忍者らホイ！",
		"class": "Licensed",
		"catalog": "HSP-34",
		"publisher": "ASCII",
		"developer": "ASCII",
		"region": "Japan",
		"players": "1",
		"date": "1990-08-08"
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
				"crc": "CEE5857B",
				"sha1": "55DF1D724F051B38630E2BD14BC02EDF2650F2BD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SUROM",
						"pcb": "HVC-SUROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HSP-34-0 PRG",
								"size": "512k",
								"crc": "CEE5857B",
								"sha1": "55DF1D724F051B38630E2BD14BC02EDF2650F2BD"
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
