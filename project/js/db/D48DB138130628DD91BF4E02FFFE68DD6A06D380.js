this.NesDb = this.NesDb || {};

NesDb[ 'D48DB138130628DD91BF4E02FFFE68DD6A06D380' ] = {
	"$": {
		"name": "California Games",
		"class": "Licensed",
		"catalog": "NES-CG-NOE",
		"publisher": "Milton Bradley",
		"developer": "Epyx",
		"portdeveloper": "Rare",
		"region": "Germany",
		"players": "8",
		"date": "1991-08-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "B400172A",
				"sha1": "D48DB138130628DD91BF4E02FFFE68DD6A06D380",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-11-02"
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
								"name": "PAL-CG-0 PRG",
								"size": "128k",
								"crc": "B400172A",
								"sha1": "D48DB138130628DD91BF4E02FFFE68DD6A06D380"
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
