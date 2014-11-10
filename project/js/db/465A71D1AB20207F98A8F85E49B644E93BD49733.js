this.NesDb = this.NesDb || {};

NesDb[ '465A71D1AB20207F98A8F85E49B644E93BD49733' ] = {
	"$": {
		"name": "Ikari",
		"altname": "怒",
		"class": "Licensed",
		"catalog": "KAC-IK",
		"publisher": "KAC",
		"developer": "SNK",
		"portdeveloper": "Micronics / Khaos",
		"region": "Japan",
		"players": "2",
		"date": "1986-11-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "AB47A50E",
				"sha1": "465A71D1AB20207F98A8F85E49B644E93BD49733",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-02",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "KAC-IK-0 PRG",
								"size": "128k",
								"crc": "AB47A50E",
								"sha1": "465A71D1AB20207F98A8F85E49B644E93BD49733"
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
