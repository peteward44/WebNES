this.NesDb = this.NesDb || {};

NesDb[ '6B6F19237E16B21374D4072D64A29D9B8683085A' ] = {
	"$": {
		"name": "Prince of Persia",
		"class": "Licensed",
		"catalog": "NES-PA-FRA",
		"publisher": "Mindscape",
		"developer": "Motivetime",
		"region": "France",
		"players": "1",
		"date": "1993-04-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "8293803A",
				"sha1": "6B6F19237E16B21374D4072D64A29D9B8683085A",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2006-07-23"
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
								"name": "FRA-PA-0 PRG",
								"size": "128k",
								"crc": "8293803A",
								"sha1": "6B6F19237E16B21374D4072D64A29D9B8683085A"
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
