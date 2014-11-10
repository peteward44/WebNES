this.NesDb = this.NesDb || {};

NesDb[ 'ABA26002DFF0D265BC2AC27A2689924B4FE0ED81' ] = {
	"$": {
		"name": "CrackOut",
		"class": "Licensed",
		"catalog": "NES-37-UKV",
		"publisher": "Palcom",
		"developer": "Konami",
		"region": "United Kingdom",
		"players": "1",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "81AF4AF9",
				"sha1": "ABA26002DFF0D265BC2AC27A2689924B4FE0ED81",
				"dump": "ok",
				"dumper": "Mark_K",
				"datedumped": "2011-12-05"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-37-0 PRG",
								"size": "128k",
								"crc": "81AF4AF9",
								"sha1": "ABA26002DFF0D265BC2AC27A2689924B4FE0ED81"
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
					"cic": [
						{
							"$": {
								"type": "3197A"
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
