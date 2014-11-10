this.NesDb = this.NesDb || {};

NesDb[ '23C4DAFCC17FA75E8D682931702277659CD59735' ] = {
	"$": {
		"name": "Castlevania III: Dracula's Curse",
		"class": "Licensed",
		"catalog": "NES-VN-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "1",
		"date": "1990-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "ED2465BE",
				"sha1": "23C4DAFCC17FA75E8D682931702277659CD59735",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-09-18"
			},
			"board": [
				{
					"$": {
						"type": "NES-ELROM",
						"pcb": "NES-ELROM-01",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "NES-VN-0 PRG",
								"size": "256k",
								"crc": "95CA9EC7",
								"sha1": "91A93F59A92955AF2448A2F519EE254CE49C679D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-VN-0 CHR",
								"size": "128k",
								"crc": "1B448E0A",
								"sha1": "0CE93C7E536BA5EF3B09D2255AF093E95622DEE2"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC5"
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
