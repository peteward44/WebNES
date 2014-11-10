this.NesDb = this.NesDb || {};

NesDb[ '01C683A1E83220A9B976A541AAA9B4B5B8FEBCFD' ] = {
	"$": {
		"name": "Chuugoku Senseijutsu",
		"altname": "中国占星術",
		"class": "Licensed",
		"catalog": "SAN-CQ",
		"publisher": "Jaleco",
		"developer": "Aicom",
		"region": "Japan",
		"players": "1",
		"date": "1988-11-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F64CB545",
				"sha1": "01C683A1E83220A9B976A541AAA9B4B5B8FEBCFD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-09-08"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "SAN-CQ-0 PRG",
								"size": "128k",
								"crc": "F64CB545",
								"sha1": "01C683A1E83220A9B976A541AAA9B4B5B8FEBCFD"
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
