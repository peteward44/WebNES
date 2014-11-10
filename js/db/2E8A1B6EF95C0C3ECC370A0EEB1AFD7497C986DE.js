this.NesDb = this.NesDb || {};

NesDb[ '2E8A1B6EF95C0C3ECC370A0EEB1AFD7497C986DE' ] = {
	"$": {
		"name": "Salamander",
		"altname": "沙羅曼蛇",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC821",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1987-09-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "AC652B47",
				"sha1": "2E8A1B6EF95C0C3ECC370A0EEB1AFD7497C986DE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-07-03"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-3",
						"pcb": "350685",
						"mapper": "73"
					},
					"prg": [
						{
							"$": {
								"name": "RC821J1P",
								"size": "128k",
								"crc": "AC652B47",
								"sha1": "2E8A1B6EF95C0C3ECC370A0EEB1AFD7497C986DE"
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
								"type": "VRC3"
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
