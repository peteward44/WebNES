this.NesDb = this.NesDb || {};

NesDb[ '3CB2C31F2F7E3A0F254353C4B88190103254703E' ] = {
	"$": {
		"name": "Bard's Tale, The: Tales of the Unknown",
		"class": "Licensed",
		"catalog": "NES-ET-USA",
		"publisher": "FCI",
		"developer": "Interplay",
		"portdeveloper": "Atelier Double",
		"region": "USA",
		"players": "1",
		"date": "1991-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "9B821A83",
				"sha1": "3CB2C31F2F7E3A0F254353C4B88190103254703E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-SNROM",
						"pcb": "NES-SNROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-ET-0 PRG",
								"size": "128k",
								"crc": "9B821A83",
								"sha1": "3CB2C31F2F7E3A0F254353C4B88190103254703E"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
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
