this.NesDb = this.NesDb || {};

NesDb[ '23670DE9B3E5B6BEE81F4515999CD13A2FFA02D0' ] = {
	"$": {
		"name": "Menace Beach",
		"class": "Unlicensed",
		"catalog": "CDR-MH-81022",
		"publisher": "Color Dreams",
		"developer": "Color Dreams",
		"region": "USA",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "22276213",
				"sha1": "23670DE9B3E5B6BEE81F4515999CD13A2FFA02D0",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-22"
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
								"name": "MENACE BEACH PRG 512.",
								"size": "64k",
								"crc": "33D0282F",
								"sha1": "17FD38544A59B464541191905EA4124694846E6F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "MENACE BEACH VID 512.",
								"size": "64k",
								"crc": "38A92500",
								"sha1": "447D4C4239C67711ACB310F3D799754DA837DF2A"
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
