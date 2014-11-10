this.NesDb = this.NesDb || {};

NesDb[ '3EB406F0518DBDF513C0C192F09695F4E4F9CDA2' ] = {
	"$": {
		"name": "Senjou no Ookami",
		"altname": "戦場の狼",
		"class": "Licensed",
		"catalog": "CAP-SJ",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "2",
		"date": "1986-09-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "441AEAE6",
				"sha1": "3EB406F0518DBDF513C0C192F09695F4E4F9CDA2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UN1ROM",
						"pcb": "HVC-UN1ROM-01",
						"mapper": "94"
					},
					"prg": [
						{
							"$": {
								"name": "CAP-SJ-0 PRG",
								"size": "128k",
								"crc": "441AEAE6",
								"sha1": "3EB406F0518DBDF513C0C192F09695F4E4F9CDA2"
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
