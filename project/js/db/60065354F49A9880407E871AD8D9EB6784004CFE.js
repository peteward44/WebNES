this.NesDb = this.NesDb || {};

NesDb[ '60065354F49A9880407E871AD8D9EB6784004CFE' ] = {
	"$": {
		"name": "Trog!",
		"class": "Licensed",
		"catalog": "NES-4A-NOE",
		"publisher": "Acclaim",
		"developer": "Midway",
		"portdeveloper": "Visual Concepts",
		"region": "Germany",
		"players": "2",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "B6B5C372",
				"sha1": "60065354F49A9880407E871AD8D9EB6784004CFE",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2006-07-23"
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
								"name": "PAL-4A-0 PRG",
								"size": "128k",
								"crc": "B6B5C372",
								"sha1": "60065354F49A9880407E871AD8D9EB6784004CFE"
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
