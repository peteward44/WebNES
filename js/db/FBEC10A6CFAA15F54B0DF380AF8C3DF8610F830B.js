this.NesDb = this.NesDb || {};

NesDb[ 'FBEC10A6CFAA15F54B0DF380AF8C3DF8610F830B' ] = {
	"$": {
		"name": "Jack Nicklaus' Greatest 18 Holes of Major Championship Golf",
		"class": "Licensed",
		"catalog": "NES-JC-EEC",
		"publisher": "Konami",
		"developer": "Sculptured Software",
		"region": "Europe",
		"players": "4",
		"date": "1991-06-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "836FE2C2",
				"sha1": "FBEC10A6CFAA15F54B0DF380AF8C3DF8610F830B",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-12-03"
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
								"name": "PAL-JC-0 PRG",
								"size": "128k",
								"crc": "836FE2C2",
								"sha1": "FBEC10A6CFAA15F54B0DF380AF8C3DF8610F830B"
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
