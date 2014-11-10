this.NesDb = this.NesDb || {};

NesDb[ '63CEE1A049BF11967202FB6F903884A561B01D3C' ] = {
	"$": {
		"name": "Super Mario Bros. / Duck Hunt / World Class Track Meet",
		"class": "Licensed",
		"subclass": "Multi-cart",
		"catalog": "NES-WH-USA",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "USA",
		"players": "2",
		"date": "1990-12"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "powerpad",
						"name": "Power Pad"
					}
				},
				{
					"$": {
						"type": "zapper",
						"name": "Zapper Light Gun"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "60E63537",
				"sha1": "63CEE1A049BF11967202FB6F903884A561B01D3C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-27"
			},
			"board": [
				{
					"$": {
						"type": "NES-SFROM",
						"pcb": "NES-WH",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "D4F018F5",
								"sha1": "C673378F44042213C2E28DA14DE02009E4470011"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "64k",
								"crc": "3FA21A12",
								"sha1": "44CD88BD27D3B9E220227700CDF8B9E8E88CCFD7"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "<MMC1>"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "<EPOXY>"
							}
						}
					]
				}
			]
		}
	]
};
