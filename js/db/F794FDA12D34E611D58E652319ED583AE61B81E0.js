this.NesDb = this.NesDb || {};

NesDb[ 'F794FDA12D34E611D58E652319ED583AE61B81E0' ] = {
	"$": {
		"name": "Blargg MMC6 test"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"sha1": "F794FDA12D34E611D58E652319ED583AE61B81E0",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-09-30"
			},
			"board": [
				{
					"$": {
						"type": "NES-HKROM",
						"pcb": "NES-HKROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-OC-0 PRG",
								"size": "256k",
								"crc": "BEB88304",
								"sha1": "224D96BF55391C7E9B651EB4D6A8F06FAF6E29DA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-OC-0 CHR",
								"size": "256k",
								"crc": "42236F71",
								"sha1": "A6038C0785BE19C1215351E5F053272BF231B78F"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC6B",
								"battery": "1"
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
