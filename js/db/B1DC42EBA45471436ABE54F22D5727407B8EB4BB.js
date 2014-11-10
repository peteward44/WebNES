this.NesDb = this.NesDb || {};

NesDb[ 'B1DC42EBA45471436ABE54F22D5727407B8EB4BB' ] = {
	"$": {
		"name": "Side Pocket",
		"class": "Licensed",
		"catalog": "NES-PK-SCN",
		"publisher": "Data East",
		"developer": "Data East",
		"region": "Scandinavia",
		"players": "1",
		"date": "1992-05-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "83000991",
				"sha1": "B1DC42EBA45471436ABE54F22D5727407B8EB4BB",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-09-04"
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
								"name": "PAL-PK-0 PRG",
								"size": "128k",
								"crc": "83000991",
								"sha1": "B1DC42EBA45471436ABE54F22D5727407B8EB4BB"
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
								"type": "3195A"
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
