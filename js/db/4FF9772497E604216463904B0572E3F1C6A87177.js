this.NesDb = this.NesDb || {};

NesDb[ '4FF9772497E604216463904B0572E3F1C6A87177' ] = {
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
				"revision": "A",
				"crc": "E19293A2",
				"sha1": "4FF9772497E604216463904B0572E3F1C6A87177",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SJROM",
						"pcb": "HVC-SJROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HSP-11-1 PRG",
								"size": "128k",
								"crc": "E792DE94",
								"sha1": "8AE3712827E01A2BB264A0817AC24A49D73685E0"
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
