this.NesDb = this.NesDb || {};

NesDb[ 'C81C29A3ECBA7FFC735E65273AB8BBA886A33029' ] = {
	"$": {
		"name": "Phantom Air Mission",
		"class": "Licensed",
		"catalog": "NES-PH-ESP",
		"publisher": "Activision",
		"developer": "Imagineering",
		"region": "Spain",
		"players": "1",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "18027A1F",
				"sha1": "C81C29A3ECBA7FFC735E65273AB8BBA886A33029",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2010-05-23"
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
								"name": "PAL-PH-0 PRG",
								"size": "128k",
								"crc": "18027A1F",
								"sha1": "C81C29A3ECBA7FFC735E65273AB8BBA886A33029"
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
