this.NesDb = this.NesDb || {};

NesDb[ '02A4F14F2E697C6BB1B42ACFC1F4A9D28EFB3D7C' ] = {
	"$": {
		"name": "Attack Animal Gakuen",
		"altname": "アタックアニマル学園",
		"class": "Licensed",
		"catalog": "PNF-AA (R55V5913)",
		"publisher": "Pony Canyon",
		"developer": "Scitron",
		"region": "Japan",
		"players": "1",
		"date": "1987-12-26"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "3dglasses",
						"name": "3-D Glasses"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "7D55CF29",
				"sha1": "02A4F14F2E697C6BB1B42ACFC1F4A9D28EFB3D7C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-03",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PNF-AA-0 PRG",
								"size": "128k",
								"crc": "7D55CF29",
								"sha1": "02A4F14F2E697C6BB1B42ACFC1F4A9D28EFB3D7C"
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
