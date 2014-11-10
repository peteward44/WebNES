this.NesDb = this.NesDb || {};

NesDb[ 'D2899308F62272D0547E8D42240BD1D20C61F4E7' ] = {
	"$": {
		"name": "Baby Boomer",
		"class": "Unlicensed",
		"catalog": "CDR-BR-81000",
		"publisher": "Color Dreams",
		"developer": "Color Dreams",
		"region": "USA",
		"players": "2",
		"date": "1989"
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
				"crc": "BBE40DC4",
				"sha1": "D2899308F62272D0547E8D42240BD1D20C61F4E7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-17"
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
								"crc": "FB69C131",
								"sha1": "0E80F67E83DF532B09B75A4C91935B5EA092A387"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "16k",
								"crc": "45FE3114",
								"sha1": "BAA3D240F1ACD3A364530AE6F6DC6F8506D8B9C6"
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
