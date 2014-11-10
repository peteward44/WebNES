this.NesDb = this.NesDb || {};

NesDb[ 'AD5C446E1C3368295CE6431C79569A3B321AAF21' ] = {
	"$": {
		"name": "Rodland",
		"class": "Licensed",
		"catalog": "NES-R8-ESP",
		"publisher": "Storm",
		"developer": "Jaleco",
		"portdeveloper": "The Sales Curve",
		"region": "Spain",
		"players": "1",
		"date": "1993-05-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "22AB9694",
				"sha1": "AD5C446E1C3368295CE6431C79569A3B321AAF21",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
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
								"name": "PAL-R8-0 PRG",
								"size": "128k",
								"crc": "22AB9694",
								"sha1": "AD5C446E1C3368295CE6431C79569A3B321AAF21"
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
