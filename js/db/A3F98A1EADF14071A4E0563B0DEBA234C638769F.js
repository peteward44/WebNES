this.NesDb = this.NesDb || {};

NesDb[ 'A3F98A1EADF14071A4E0563B0DEBA234C638769F' ] = {
	"$": {
		"name": "Suikoden: Tenmei no Chikai",
		"altname": "水滸伝 天命の誓い",
		"class": "Licensed",
		"catalog": "KOE-XJ",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "Japan",
		"players": "5",
		"date": "1990-06-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "39F2CE4B",
				"sha1": "A3F98A1EADF14071A4E0563B0DEBA234C638769F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-26"
			},
			"board": [
				{
					"$": {
						"type": "HVC-ETROM",
						"pcb": "HVC-ETROM-01",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "KOE-XJ-0 PRG",
								"size": "256k",
								"crc": "E6C28C5F",
								"sha1": "A233E79E6C3919E0F6EFB61325DF8212013732E3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KOE-XJ-0 CHR",
								"size": "128k",
								"crc": "7B1BAF5D",
								"sha1": "BF2021415A004394B2D277B834F8492068F2D82E"
							}
						}
					],
					"wram": [
						{
							"$": {
								"id": "0",
								"size": "8k",
								"battery": "1"
							}
						},
						{
							"$": {
								"id": "1",
								"size": "8k"
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
