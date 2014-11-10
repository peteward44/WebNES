this.NesDb = this.NesDb || {};

NesDb[ 'C7AC4B1E6244B82FF964BE95FEF0E98746FF65FF' ] = {
	"$": {
		"name": "Herakles no Eikou: Toujin Makyouden",
		"altname": "ヘラクレスの栄光　闘人魔境伝",
		"class": "Licensed",
		"catalog": "DFC-HE",
		"publisher": "Data East",
		"developer": "Data East",
		"region": "Japan",
		"players": "1",
		"date": "1987-06-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "B15653BD",
				"sha1": "C7AC4B1E6244B82FF964BE95FEF0E98746FF65FF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-21"
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
								"name": "DFC-HE-0 PRG",
								"size": "128k",
								"crc": "B15653BD",
								"sha1": "C7AC4B1E6244B82FF964BE95FEF0E98746FF65FF"
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
