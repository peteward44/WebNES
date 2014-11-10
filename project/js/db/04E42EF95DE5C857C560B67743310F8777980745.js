this.NesDb = this.NesDb || {};

NesDb[ '04E42EF95DE5C857C560B67743310F8777980745' ] = {
	"$": {
		"name": "Mermaids of Atlantis: The Riddle of the Magic Bubble",
		"class": "Unlicensed",
		"catalog": "AVE-MA",
		"publisher": "AVE",
		"developer": "C & E",
		"region": "USA",
		"players": "2",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F05870D5",
				"sha1": "04E42EF95DE5C857C560B67743310F8777980745",
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
								"name": "852B-PGM",
								"size": "64k",
								"crc": "460A9CB0",
								"sha1": "03B5D95BD2AE1C0A005B22624FA973E32670B36C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "ED50-CHR",
								"size": "64k",
								"crc": "A5591AD5",
								"sha1": "BA6C83F5519CCF1ED7A8DFB5A065FF145F50B306"
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
