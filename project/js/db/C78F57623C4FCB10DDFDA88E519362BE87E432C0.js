this.NesDb = this.NesDb || {};

NesDb[ 'C78F57623C4FCB10DDFDA88E519362BE87E432C0' ] = {
	"$": {
		"name": "Incredible Crash Dummies, The",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NES-CQ-USA",
		"publisher": "LJN",
		"developer": "Software Creations",
		"region": "USA",
		"players": "2",
		"date": "1994-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "A80A0F01",
				"sha1": "C78F57623C4FCB10DDFDA88E519362BE87E432C0",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-10"
			},
			"board": [
				{
					"$": {
						"type": "ACCLAIM-MC-ACC",
						"pcb": "55741",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-CQ PRG",
								"size": "128k",
								"crc": "86277361",
								"sha1": "959D4C59F3989CCD29DA757CE2115B134DFF3B5B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-CQ CHR",
								"size": "256k",
								"crc": "0F2564DE",
								"sha1": "149E68DC5D00413A14A2E16A3250FEFC62A9618E"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx08"
							}
						},
						{
							"$": {
								"type": "MC-ACC"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
