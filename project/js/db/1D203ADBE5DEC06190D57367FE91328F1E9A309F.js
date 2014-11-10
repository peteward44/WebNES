this.NesDb = this.NesDb || {};

NesDb[ '1D203ADBE5DEC06190D57367FE91328F1E9A309F' ] = {
	"$": {
		"name": "Hyper Olympic",
		"altname": "ハイパーオリンピック",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC800",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1985-06-21"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "konamihypershot",
						"name": "Konami HyperShot"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "980BE936",
				"sha1": "1D203ADBE5DEC06190D57367FE91328F1E9A309F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-27"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-NROM-128",
						"pcb": "MF4002",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"size": "16k",
								"crc": "FF6621CE",
								"sha1": "33BE02BE4BA014B45394C18255F3885C13253690"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "8k",
								"crc": "A0AC7CFC",
								"sha1": "18825D6CC757A5E75ADED9CEDD531CD8E331E407"
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
