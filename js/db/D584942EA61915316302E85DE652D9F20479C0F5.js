this.NesDb = this.NesDb || {};

NesDb[ 'D584942EA61915316302E85DE652D9F20479C0F5' ] = {
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
				"revision": "1.4",
				"crc": "680DA78D",
				"sha1": "D584942EA61915316302E85DE652D9F20479C0F5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "COLORDREAMS-74*377",
						"pcb": "BC6",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"name": "D-ADVENTURES PRG 512 14",
								"size": "64k",
								"crc": "E571615D",
								"sha1": "1E8BAF59DAE9182A7F5A66B0B745032F70F2F229"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "D-ADVENTURES VID 512 14",
								"size": "64k",
								"crc": "1C05428A",
								"sha1": "C7901459D6B67A74A471C2ECB8280F744C0D5D35"
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
								"type": "7660"
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
