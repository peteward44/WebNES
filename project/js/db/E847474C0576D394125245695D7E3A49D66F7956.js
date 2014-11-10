this.NesDb = this.NesDb || {};

NesDb[ 'E847474C0576D394125245695D7E3A49D66F7956' ] = {
	"$": {
		"name": "Best Play Pro Yakyuu Special, The",
		"altname": "ベストプレープロ野球スペシャル",
		"class": "Licensed",
		"catalog": "HSP-BS",
		"publisher": "ASCII",
		"developer": "ASCII",
		"region": "Japan",
		"players": "2",
		"date": "1992-10-16"
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
				"crc": "C3DE7C69",
				"sha1": "E847474C0576D394125245695D7E3A49D66F7956",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SXROM",
						"pcb": "HVC-SXROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HSP-BS-1 PRG",
								"size": "256k",
								"crc": "C3DE7C69",
								"sha1": "E847474C0576D394125245695D7E3A49D66F7956"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "32k",
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
								"type": "74xx04"
							}
						},
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
