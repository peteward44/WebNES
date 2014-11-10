this.NesDb = this.NesDb || {};

NesDb[ '1B33AF3ACB40ACF6FB3D8709246278249579D019' ] = {
	"$": {
		"name": "Prince of Persia",
		"class": "Licensed",
		"catalog": "NES-PA-NOE",
		"publisher": "Mindscape",
		"developer": "Motivetime",
		"region": "Germany",
		"players": "1",
		"date": "1993-04-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "60AA9AE0",
				"sha1": "1B33AF3ACB40ACF6FB3D8709246278249579D019",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-18"
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
								"name": "FRG-PA-0 PRG",
								"size": "128k",
								"crc": "60AA9AE0",
								"sha1": "1B33AF3ACB40ACF6FB3D8709246278249579D019"
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
