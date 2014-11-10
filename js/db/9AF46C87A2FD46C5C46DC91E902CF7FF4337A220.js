this.NesDb = this.NesDb || {};

NesDb[ '9AF46C87A2FD46C5C46DC91E902CF7FF4337A220' ] = {
	"$": {
		"name": "Shufflepuck Cafe",
		"altname": "シャッフルパックカフェ",
		"class": "Licensed",
		"catalog": "PHF-XP (R62V10002)",
		"publisher": "Pony Canyon",
		"developer": "Brøderbund",
		"region": "Japan",
		"players": "1",
		"date": "1990-10-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "917D9262",
				"sha1": "9AF46C87A2FD46C5C46DC91E902CF7FF4337A220",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "PHF-XP-0 PRG",
								"size": "128k",
								"crc": "917D9262",
								"sha1": "9AF46C87A2FD46C5C46DC91E902CF7FF4337A220"
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
