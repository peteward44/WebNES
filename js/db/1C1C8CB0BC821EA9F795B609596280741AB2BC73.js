this.NesDb = this.NesDb || {};

NesDb[ '1C1C8CB0BC821EA9F795B609596280741AB2BC73' ] = {
	"$": {
		"name": "Akumajou Dracula",
		"altname": "悪魔城ドラキュラ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RV003",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1993-02-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A0F99BB8",
				"sha1": "1C1C8CB0BC821EA9F795B609596280741AB2BC73",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-03"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-UNROM",
						"pcb": "353525",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "RV 003 J00P",
								"size": "128k",
								"crc": "A0F99BB8",
								"sha1": "1C1C8CB0BC821EA9F795B609596280741AB2BC73"
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
