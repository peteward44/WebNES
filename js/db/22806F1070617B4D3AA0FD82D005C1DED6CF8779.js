this.NesDb = this.NesDb || {};

NesDb[ '22806F1070617B4D3AA0FD82D005C1DED6CF8779' ] = {
	"$": {
		"name": "World Class Track Meet",
		"class": "Licensed",
		"catalog": "NES-WT-USA",
		"publisher": "Nintendo",
		"developer": "Human Entertainment",
		"region": "USA",
		"players": "2",
		"date": "1988-08"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "powerpad",
						"name": "Power Pad"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5734EB9E",
				"sha1": "22806F1070617B4D3AA0FD82D005C1DED6CF8779",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-08"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-05",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-WT-0 PRG",
								"size": "32k",
								"crc": "1A43BFA9",
								"sha1": "EA29A585E2991A6DE4ED19C1D30FA06680E8A04A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-WT-0 CHR",
								"size": "32k",
								"crc": "6AB36671",
								"sha1": "D05E9BF4CB9494D995B4BF683575D6B1EC1CBB91"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
