this.NesDb = this.NesDb || {};

NesDb[ '7174874846725B03591619946CDCC125EB382C72' ] = {
	"$": {
		"name": "Noah's Ark",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "NES-NH-USA",
		"publisher": "Konami",
		"developer": "Source",
		"region": "USA",
		"players": "1",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "81B2A3CD",
				"sha1": "7174874846725B03591619946CDCC125EB382C72",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-16"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKEPROM",
						"pcb": "NES-TKEPROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "RP100 P",
								"size": "128k",
								"crc": "B99085CE",
								"sha1": "F0A801EC059E217D8BD1B9B97CE8434C3136829D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RP100 C",
								"size": "128k",
								"crc": "7836C636",
								"sha1": "07E5C7064A27B16BB52F1586A3585377954C1B40"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx139"
							}
						},
						{
							"$": {
								"type": "MMC3B"
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
