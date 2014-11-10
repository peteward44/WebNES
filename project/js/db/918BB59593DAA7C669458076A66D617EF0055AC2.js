this.NesDb = this.NesDb || {};

NesDb[ '918BB59593DAA7C669458076A66D617EF0055AC2' ] = {
	"$": {
		"name": "Pac-Mania",
		"class": "Unlicensed",
		"catalog": "TGN-021-PMA",
		"publisher": "Tengen",
		"developer": "Namco",
		"region": "USA",
		"players": "2",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "E73E7260",
				"sha1": "918BB59593DAA7C669458076A66D617EF0055AC2",
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
								"name": "335021-1011 PMAPR",
								"size": "64k",
								"crc": "02ED6298",
								"sha1": "812CEDB3E6918979762D9B6697C7E516D240A7E5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "335021-1012 PMACH",
								"size": "32k",
								"crc": "F5DB6965",
								"sha1": "5F8B7620F70EC40F2C12B12D2CE05742525CCBEF"
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
