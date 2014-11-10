this.NesDb = this.NesDb || {};

NesDb[ '0CCDBE9A46EDF08384BAC113AF9866D4EE89B925' ] = {
	"$": {
		"name": "Kujaku Ou 2",
		"altname": "孔雀王２",
		"class": "Licensed",
		"catalog": "PNF-QW (R68V5932)",
		"publisher": "Pony Canyon",
		"developer": "Atelier Double",
		"region": "Japan",
		"players": "1",
		"date": "1990-08-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A4DCDF28",
				"sha1": "0CCDBE9A46EDF08384BAC113AF9866D4EE89B925",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PNF-QW-0 PRG",
								"size": "128k",
								"crc": "A5781280",
								"sha1": "824D1A756205A009AD86AA3F27827DADF6ED4FA9"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PNF-QW-0 CHR",
								"size": "128k",
								"crc": "4F98A36A",
								"sha1": "E7AFD34038735018D5BC9AE43EBD1A21DC48E441"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
