this.NesDb = this.NesDb || {};

NesDb[ '2EB840E8281F5FB2AA2F1AC62181B2E36BD77897' ] = {
	"$": {
		"name": "Raid 2020",
		"class": "Unlicensed",
		"catalog": "CDR-RD-81003",
		"publisher": "Color Dreams",
		"developer": "Color Dreams",
		"region": "USA",
		"players": "1",
		"date": "1989"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "61253D1C",
				"sha1": "2EB840E8281F5FB2AA2F1AC62181B2E36BD77897",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-10"
			},
			"board": [
				{
					"$": {
						"type": "COLORDREAMS-74*377",
						"pcb": "UNK-COLORDREAMS-REVA",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"size": "64k",
								"crc": "8B5C74DB",
								"sha1": "35192A4E1E993E30BC71A99B364A1ED74E3A68E1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "421ADB54",
								"sha1": "83400BAAF946411F0FDCBF0D4884D5B53EA7E49D"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx377"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
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
