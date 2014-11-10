this.NesDb = this.NesDb || {};

NesDb[ 'D03873980D19D0620CB0717C3661A3F61CE97295' ] = {
	"$": {
		"name": "Kick Off",
		"class": "Licensed",
		"catalog": "NES-54-UKV",
		"publisher": "Imagineer",
		"developer": "Anco",
		"portdeveloper": "Enigma Variations",
		"region": "United Kingdom",
		"players": "2",
		"date": "1992-07-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "D161888B",
				"sha1": "D03873980D19D0620CB0717C3661A3F61CE97295",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-20"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-54-0 PRG",
								"size": "128k",
								"crc": "D161888B",
								"sha1": "D03873980D19D0620CB0717C3661A3F61CE97295"
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
					"cic": [
						{
							"$": {
								"type": "3197A"
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
