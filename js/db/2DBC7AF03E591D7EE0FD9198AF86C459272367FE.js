this.NesDb = this.NesDb || {};

NesDb[ '2DBC7AF03E591D7EE0FD9198AF86C459272367FE' ] = {
	"$": {
		"name": "Barcode World",
		"altname": "バーコードワールド",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "SUN-BBW-7200",
		"publisher": "Sunsoft",
		"developer": "Epoch",
		"region": "Japan",
		"players": "1",
		"date": "1992-12-18"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "barcodeworld",
						"name": "Barcode Battler"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "48CA0EE1",
				"sha1": "2DBC7AF03E591D7EE0FD9198AF86C459272367FE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-06"
			},
			"board": [
				{
					"$": {
						"type": "SUNSOFT-FME-7",
						"pcb": "BBW-E301",
						"mapper": "69"
					},
					"prg": [
						{
							"$": {
								"name": "BBW PRG",
								"size": "128k",
								"crc": "67898319",
								"sha1": "92F055653D33B8E31EC91B458357E75AD2336C33"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BBW CHR",
								"size": "256k",
								"crc": "407F50E9",
								"sha1": "DCDA913AA77C41FB0771C4CA31F437D2A00FF83F"
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
								"type": "FME-7"
							}
						}
					]
				}
			]
		}
	]
};
