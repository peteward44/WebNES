this.NesDb = this.NesDb || {};

NesDb[ 'E0C970FC9C2CF42AFBA958B056E2DD5F99097ED8' ] = {
	"$": {
		"name": "Blues Brothers, The",
		"class": "Licensed",
		"catalog": "NES-4Z-FRG",
		"publisher": "Titus",
		"developer": "Titus",
		"region": "Germany",
		"players": "2",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "E4776A2B",
				"sha1": "E0C970FC9C2CF42AFBA958B056E2DD5F99097ED8",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-10",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-4Z-0 PRG",
								"size": "128k",
								"crc": "E4776A2B",
								"sha1": "E0C970FC9C2CF42AFBA958B056E2DD5F99097ED8"
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
