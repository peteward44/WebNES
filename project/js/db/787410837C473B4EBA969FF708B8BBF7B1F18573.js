this.NesDb = this.NesDb || {};

NesDb[ '787410837C473B4EBA969FF708B8BBF7B1F18573' ] = {
	"$": {
		"name": "Egypt",
		"altname": "エジプト",
		"class": "Licensed",
		"catalog": "HUM-E9",
		"publisher": "Human Entertainment",
		"developer": "Human Entertainment",
		"region": "Japan",
		"players": "1",
		"date": "1991-05-31"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E1C03EB6",
				"sha1": "787410837C473B4EBA969FF708B8BBF7B1F18573",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "HVC-CNROM-2",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "HUM-E9-0 PRG",
								"size": "32k",
								"crc": "5D8992C6",
								"sha1": "68E57A9802125F640C97B080F6B2A86343546A93"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HUM-E9-0 CHR",
								"size": "32k",
								"crc": "C0A4DF00",
								"sha1": "A6D9DB85F332F198856A1849A99326463001360C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
