this.NesDb = this.NesDb || {};

NesDb[ '44B6EC42BEBD50E9165E502880198B1804AAA775' ] = {
	"$": {
		"name": "U.S. Championship V'Ball",
		"class": "Licensed",
		"catalog": "TJC-VJ",
		"publisher": "Technos",
		"developer": "Technos",
		"region": "Japan",
		"players": "4",
		"date": "1989-11-10"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "fourplayer",
						"name": "4-Player Adapter"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "213CB3FB",
				"sha1": "44B6EC42BEBD50E9165E502880198B1804AAA775",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TLROM",
						"pcb": "HVC-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "TJC-VJ-0 PRG",
								"size": "128k",
								"crc": "9ADD521E",
								"sha1": "92F2C4ED56C31619F833C33CEBBA6EBBAB85AD09"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TJC-VJ-0 CHR",
								"size": "128k",
								"crc": "A664309E",
								"sha1": "58455C3CF7AFB38F568A8DF50A9B3BF750AA2AD4"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3A"
							}
						}
					]
				}
			]
		}
	]
};
