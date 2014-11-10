this.NesDb = this.NesDb || {};

NesDb[ '44A5BC2B8156D50518EEBEEFA522A7642E0476DC' ] = {
	"$": {
		"name": "Nobunaga no Yabou: Bushou Fuuunroku",
		"altname": "信長の野望 武将風雲録",
		"class": "Licensed",
		"catalog": "KOE-IZ",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "Japan",
		"players": "1",
		"date": "1991-12-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F540677B",
				"sha1": "44A5BC2B8156D50518EEBEEFA522A7642E0476DC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-02"
			},
			"board": [
				{
					"$": {
						"type": "HVC-EWROM",
						"pcb": "HVC-EWROM-03",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "KOE-IZ-0 PRG",
								"size": "512k",
								"crc": "286613D8",
								"sha1": "52436255FCE4E7D0E2314E61343FAE776B6E423F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KOE-IZ-0 CHR",
								"size": "256k",
								"crc": "5BCA457A",
								"sha1": "9577BD125828BB76AA70EB91B6D2CB0CA06ADE7F"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "32k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC5"
							}
						}
					]
				}
			]
		}
	]
};
