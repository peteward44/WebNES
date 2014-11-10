this.NesDb = this.NesDb || {};

NesDb[ '7D28FF707DF69A62E0ACF40464C2F35E2523EB0C' ] = {
	"$": {
		"name": "Bible Adventures",
		"class": "Unlicensed",
		"subclass": "Multi-cart",
		"catalog": "WT-BC-6",
		"publisher": "Wisdom Tree",
		"developer": "Wisdom Tree",
		"region": "USA",
		"players": "1",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "1.2",
				"crc": "7F24EFC0",
				"sha1": "7D28FF707DF69A62E0ACF40464C2F35E2523EB0C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-02-20"
			},
			"board": [
				{
					"$": {
						"type": "COLORDREAMS-74*377",
						"pcb": "UNK-COLORDREAMS-REVB",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"name": "B-ADVENTURES PRG 512K",
								"size": "64k",
								"crc": "3B73C254",
								"sha1": "D2E9796040302F37651548387620826A996D0F91"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "B-ADVENTURES VID 512K",
								"size": "64k",
								"crc": "BC62F3F3",
								"sha1": "C10BEA5762C5B44118A4DF49DB2121AFAE39642C"
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
