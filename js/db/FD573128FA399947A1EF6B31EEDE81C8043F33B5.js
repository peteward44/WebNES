this.NesDb = this.NesDb || {};

NesDb[ 'FD573128FA399947A1EF6B31EEDE81C8043F33B5' ] = {
	"$": {
		"name": "Valis: The Fantastic Soldier",
		"altname": "夢幻戦士 ヴァリス",
		"class": "Licensed",
		"catalog": "GTS-VA",
		"publisher": "Tokuma Shoten",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1987-08-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C76AADF4",
				"sha1": "FD573128FA399947A1EF6B31EEDE81C8043F33B5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "GTS-VA-0 PRG",
								"size": "128k",
								"crc": "C76AADF4",
								"sha1": "FD573128FA399947A1EF6B31EEDE81C8043F33B5"
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
