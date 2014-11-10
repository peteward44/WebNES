this.NesDb = this.NesDb || {};

NesDb[ 'B84C5A8EA62EF3F1EEF920968284DC6CD4D6055D' ] = {
	"$": {
		"name": "Color A Dinosaur",
		"class": "Licensed",
		"catalog": "NES-CD-USA",
		"publisher": "Virgin Games",
		"developer": "FarSight Technologies",
		"region": "USA",
		"players": "1",
		"date": "1993-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "0123BFFE",
				"sha1": "B84C5A8EA62EF3F1EEF920968284DC6CD4D6055D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
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
								"name": "NES-CD-0 PRG",
								"size": "128k",
								"crc": "0123BFFE",
								"sha1": "B84C5A8EA62EF3F1EEF920968284DC6CD4D6055D"
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
								"type": "6113B1"
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
