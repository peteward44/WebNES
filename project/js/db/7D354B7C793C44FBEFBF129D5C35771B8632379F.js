this.NesDb = this.NesDb || {};

NesDb[ '7D354B7C793C44FBEFBF129D5C35771B8632379F' ] = {
	"$": {
		"name": "Tatakai no Banka",
		"altname": "闘いの挽歌",
		"class": "Licensed",
		"catalog": "CAP-TA",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "2",
		"date": "1986-12-24"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "60E563F1",
				"sha1": "7D354B7C793C44FBEFBF129D5C35771B8632379F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-02",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "CAP-TA-1 PRG",
								"size": "128k",
								"crc": "60E563F1",
								"sha1": "7D354B7C793C44FBEFBF129D5C35771B8632379F"
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
