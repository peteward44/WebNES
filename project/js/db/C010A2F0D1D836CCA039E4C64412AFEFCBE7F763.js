this.NesDb = this.NesDb || {};

NesDb[ 'C010A2F0D1D836CCA039E4C64412AFEFCBE7F763' ] = {
	"$": {
		"name": "Chiller",
		"class": "Unlicensed",
		"catalog": "AGCI-CH",
		"publisher": "AGCI",
		"developer": "Exidy",
		"portdeveloper": "AGCI",
		"region": "USA",
		"players": "2",
		"date": "1990"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "zapper",
						"name": "Zapper Light Gun"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "CHR-C9D3",
				"crc": "B037246D",
				"sha1": "C010A2F0D1D836CCA039E4C64412AFEFCBE7F763",
				"dump": "bad",
				"dumper": "bootgod",
				"datedumped": "2008-04-21"
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
								"name": "CHILPRG",
								"size": "32k",
								"crc": "98E3B8BB",
								"sha1": "6BD003927954FE577E9C4F38FE796D2EF5FB23E4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CHILCHR",
								"size": "32k",
								"crc": "A47573A3",
								"sha1": "AC3BEC1AB8568954BAC89E67B3D325D1833EEC6A"
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
