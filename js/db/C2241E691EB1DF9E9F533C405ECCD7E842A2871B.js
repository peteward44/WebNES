this.NesDb = this.NesDb || {};

NesDb[ 'C2241E691EB1DF9E9F533C405ECCD7E842A2871B' ] = {
	"$": {
		"name": "Thomas The Tank Engine & Friends",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-65-USA",
		"publisher": "THQ",
		"developer": "Software Creations",
		"region": "USA",
		"players": "1",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "E46AEE21",
				"sha1": "C2241E691EB1DF9E9F533C405ECCD7E842A2871B",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKEPROM",
						"pcb": "NES-TKEPROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "T*HQ INC. THOMAS NES VER 0.4 PRG 3539",
								"size": "128k",
								"crc": "EE93A07A",
								"sha1": "3FE6C824E911BF6E7308EB32C7183F8294C549C0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "T*HQ INC. THOMAS NES VER 0.4 CHR 70DE",
								"size": "128k",
								"crc": "851D7DB8",
								"sha1": "D0BD2DCDE33EF342242D1A3E684B2475CEFBE492"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx139"
							}
						},
						{
							"$": {
								"type": "MMC3C"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
