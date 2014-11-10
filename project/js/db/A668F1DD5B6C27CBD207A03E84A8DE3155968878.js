this.NesDb = this.NesDb || {};

NesDb[ 'A668F1DD5B6C27CBD207A03E84A8DE3155968878' ] = {
	"$": {
		"name": "Pescatore",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-PS-JPN",
		"publisher": "Sunsoft",
		"developer": "Tierheit",
		"region": "Japan",
		"players": "2",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"prototype": "1",
				"crc": "5D40C08A",
				"sha1": "A668F1DD5B6C27CBD207A03E84A8DE3155968878",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNEPROM-01",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "8/22 1",
								"size": "128k",
								"crc": "5D40C08A",
								"sha1": "A668F1DD5B6C27CBD207A03E84A8DE3155968878"
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
