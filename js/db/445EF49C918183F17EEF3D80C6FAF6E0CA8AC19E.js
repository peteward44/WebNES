this.NesDb = this.NesDb || {};

NesDb[ '445EF49C918183F17EEF3D80C6FAF6E0CA8AC19E' ] = {
	"$": {
		"name": "Choujin: Ultra Baseball",
		"altname": "超人ウルトラベースボール",
		"class": "Licensed",
		"catalog": "CBF-UB",
		"publisher": "Culture Brain",
		"developer": "Culture Brain",
		"region": "Japan",
		"players": "2",
		"date": "1989-10-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "078CED30",
				"sha1": "445EF49C918183F17EEF3D80C6FAF6E0CA8AC19E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "CBF-UB-0 PRG",
								"size": "128k",
								"crc": "BD2269AD",
								"sha1": "F1EB3DE1770A3BAC47BBBBCC88F037B4B6587DD1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CBF-UB-0 CHR",
								"size": "128k",
								"crc": "F6B3F87C",
								"sha1": "32D00480A29EEBA2DB4E3AE7F1F0B7492A133947"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
