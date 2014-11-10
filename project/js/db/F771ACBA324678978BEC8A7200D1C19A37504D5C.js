this.NesDb = this.NesDb || {};

NesDb[ 'F771ACBA324678978BEC8A7200D1C19A37504D5C' ] = {
	"$": {
		"name": "R.B.I. Baseball 3",
		"class": "Unlicensed",
		"catalog": "TGN-024-RB3",
		"publisher": "Tengen",
		"developer": "Tengen",
		"region": "USA",
		"players": "2",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "FD63E7AC",
				"sha1": "F771ACBA324678978BEC8A7200D1C19A37504D5C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-07"
			},
			"board": [
				{
					"$": {
						"type": "TENGEN-800030",
						"pcb": "800030-01 REV A",
						"mapper": "206"
					},
					"prg": [
						{
							"$": {
								"name": "335024-1011 RB3PR",
								"size": "128k",
								"crc": "BAB897FE",
								"sha1": "D7AD6724DCD8B217D9F2AF9AE4E8D23FF4495875"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "335024-1012 RB3CH",
								"size": "64k",
								"crc": "E7D4D434",
								"sha1": "FA60A8C2700B2E6FD52F61407C50B9AAAE130836"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "337001"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "337002"
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
