this.NesDb = this.NesDb || {};

NesDb[ 'FD1696FD470998E09D37C48600D87B36D4C04738' ] = {
	"$": {
		"name": "Trolls on Treasure Island",
		"class": "Unlicensed",
		"catalog": "AVE-TR",
		"publisher": "AVE",
		"developer": "Micheal Crick",
		"region": "USA",
		"players": "2",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "C47EFC0E",
				"sha1": "FD1696FD470998E09D37C48600D87B36D4C04738",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-17"
			},
			"board": [
				{
					"$": {
						"type": "AVE-NINA-06",
						"pcb": "NINA-06",
						"mapper": "79"
					},
					"prg": [
						{
							"$": {
								"name": "TROLLS PGM 04BC",
								"size": "32k",
								"crc": "08EBDE64",
								"sha1": "65A5DD04B8B6822A82DCD50F82C3C0F942E8610A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TROLLS CHR EAF4",
								"size": "32k",
								"crc": "D54E5F88",
								"sha1": "357E3C08850C09AC06AD46936046725BFE51010C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx174"
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
