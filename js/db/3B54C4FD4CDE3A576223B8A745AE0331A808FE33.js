this.NesDb = this.NesDb || {};

NesDb[ '3B54C4FD4CDE3A576223B8A745AE0331A808FE33' ] = {
	"$": {
		"name": "Rampart",
		"altname": "ランパート",
		"class": "Licensed",
		"catalog": "KDS-73",
		"publisher": "Konami",
		"developer": "Tengen",
		"portdeveloper": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1991-11-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3ECDB1F7",
				"sha1": "3B54C4FD4CDE3A576223B8A745AE0331A808FE33",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-10",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "KDS-73-0 PRG",
								"size": "128k",
								"crc": "3ECDB1F7",
								"sha1": "3B54C4FD4CDE3A576223B8A745AE0331A808FE33"
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
