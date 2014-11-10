this.NesDb = this.NesDb || {};

NesDb[ '2B1042BC0380989A820526CBC6220AE21E4EE624' ] = {
	"$": {
		"name": "Maxi 15",
		"class": "Unlicensed",
		"subclass": "Multi-cart",
		"catalog": "AVE-MG",
		"publisher": "AVE",
		"developer": "AVE",
		"region": "USA",
		"players": "2",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2705EAEB",
				"sha1": "2B1042BC0380989A820526CBC6220AE21E4EE624",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-02-14"
			},
			"board": [
				{
					"$": {
						"type": "MLT-MAXI15",
						"pcb": "D-1012",
						"mapper": "234"
					},
					"prg": [
						{
							"$": {
								"name": "MGC1-PGM U2-F0AD",
								"size": "512k",
								"crc": "6467A5C4",
								"sha1": "C2AE503257FC73AFC6CBFDB72D3A7271DE09C2E0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "MGC1-CHR U9-D935",
								"size": "512k",
								"crc": "395DAF47",
								"sha1": "71791C79C6E03EE2F99C55D6CA075B2B4D3C973C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "4053"
							}
						},
						{
							"$": {
								"type": "74xx04"
							}
						},
						{
							"$": {
								"type": "74xx08"
							}
						},
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx175"
							}
						},
						{
							"$": {
								"type": "74xx175"
							}
						},
						{
							"$": {
								"type": "74xx273"
							}
						},
						{
							"$": {
								"type": "74xx30"
							}
						},
						{
							"$": {
								"type": "74xx32"
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
								"type": "CIC Stun"
							}
						}
					]
				}
			]
		}
	]
};
