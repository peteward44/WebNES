this.NesDb = this.NesDb || {};

NesDb[ 'F671AFB307E14D08419E55512D82D38F7F1DA6A8' ] = {
	"$": {
		"name": "Stadium Events",
		"class": "Licensed",
		"catalog": "NES-SD-USA",
		"publisher": "Bandai",
		"developer": "Human Entertainment",
		"region": "USA",
		"players": "2",
		"date": "1987-09"
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
				"crc": "FCE71311",
				"sha1": "F671AFB307E14D08419E55512D82D38F7F1DA6A8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-03-16"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-02",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-SD-0 PRG",
								"size": "32k",
								"crc": "DD978A90",
								"sha1": "D4B5DFBF82236203119931F65157501700AD4028"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-SD-0 CHR",
								"size": "32k",
								"crc": "36FFC41F",
								"sha1": "BF94E6B28F1E702838838A7F367B54BB6D98FD9A"
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
								"type": "3193A"
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
