this.NesDb = this.NesDb || {};

NesDb[ 'D84C1C88FD0D5B0A65F6D8F28B1CA37A5AD36C91' ] = {
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
				"revision": "1.3",
				"crc": "73140EEF",
				"sha1": "D84C1C88FD0D5B0A65F6D8F28B1CA37A5AD36C91",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-09-02"
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
								"name": "BR-003 PRG 512K 1.3",
								"size": "64k",
								"crc": "9B8E02C0",
								"sha1": "5D4B2130FDF32D87043E8D71C0013537C5891108"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BR-003 VID 512K 1.3",
								"size": "64k",
								"crc": "B0A8C32A",
								"sha1": "1820C78A1F0F0F197640077260FD1D77D8B02A3E"
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
