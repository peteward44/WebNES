this.NesDb = this.NesDb || {};

NesDb[ 'CDBA5D85EF27697D35B21E1F8994CE8F4E554CA6' ] = {
	"$": {
		"name": "Doraemon",
		"altname": "ドラえもん",
		"class": "Licensed",
		"catalog": "HFC-DO",
		"publisher": "Hudson Soft",
		"developer": "Hudson Soft",
		"region": "Japan",
		"players": "1",
		"date": "1986-12-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "336093EF",
				"sha1": "CDBA5D85EF27697D35B21E1F8994CE8F4E554CA6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-GNROM",
						"pcb": "GN-01C",
						"mapper": "66"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "FE90D6EB",
								"sha1": "BF3F88B746E324096E57DDE9C9FDF48AAF0B051F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "761F994E",
								"sha1": "779B7847A124CD5276972947E0A0762C18C76DA7"
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
