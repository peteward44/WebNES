this.NesDb = this.NesDb || {};

NesDb[ 'C13D846602AB89A96948948C8829B182D457F15B' ] = {
	"$": {
		"name": "Little Mermaid: Ningyo Hime",
		"altname": "リトルマーメイド －人魚姫－",
		"class": "Licensed",
		"catalog": "CAP-3U",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "1",
		"date": "1991-07-19"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "64C0FA3B",
				"sha1": "C13D846602AB89A96948948C8829B182D457F15B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
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
								"name": "CAP-3U-0 PRG",
								"size": "128k",
								"crc": "64C0FA3B",
								"sha1": "C13D846602AB89A96948948C8829B182D457F15B"
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
