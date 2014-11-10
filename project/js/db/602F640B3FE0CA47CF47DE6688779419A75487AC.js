this.NesDb = this.NesDb || {};

NesDb[ '602F640B3FE0CA47CF47DE6688779419A75487AC' ] = {
	"$": {
		"name": "Wario's Woods",
		"class": "Licensed",
		"catalog": "NES-WB-USA",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "USA",
		"players": "2",
		"date": "1994-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "F79A75D7",
				"sha1": "602F640B3FE0CA47CF47DE6688779419A75487AC",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-23"
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
								"id": "0",
								"name": "NES-WB PRG 1",
								"size": "128k",
								"crc": "F8FDE432",
								"sha1": "D96194DF4EA2E5D9BF583024992DE6E065596851"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "NES-WB PRG 2",
								"size": "128k",
								"crc": "B166F043",
								"sha1": "35362EAE21E89AD3998C471AD5A112B6DB34CAAD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"id": "0",
								"name": "NES-WB CHR 1",
								"size": "128k",
								"crc": "C6CD95F9",
								"sha1": "CF19B3AB9533494BC43C5472B47BADCE36253439"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "NES-WB CHR 2",
								"size": "128k",
								"crc": "B25679E2",
								"sha1": "10F0D5D9E1E9248CC291E3788FE08A450A41568E"
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F79A75D7",
				"sha1": "602F640B3FE0CA47CF47DE6688779419A75487AC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-10",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-WB-0 PRG",
								"size": "256k",
								"crc": "1AFB26D7",
								"sha1": "673E60B90A67211089D4CC23D607154477BE094D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-WB-0 CHR",
								"size": "256k",
								"crc": "EB133A6D",
								"sha1": "EDCF76BE623DC9A917067416BA09CA72DAA785D4"
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
					"chip": [
						{
							"$": {
								"type": "MMC3C"
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
