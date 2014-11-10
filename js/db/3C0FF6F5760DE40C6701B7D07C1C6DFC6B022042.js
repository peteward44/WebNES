this.NesDb = this.NesDb || {};

NesDb[ '3C0FF6F5760DE40C6701B7D07C1C6DFC6B022042' ] = {
	"$": {
		"name": "Monster Truck Rally",
		"class": "Licensed",
		"catalog": "NES-LU-USA",
		"publisher": "INTV",
		"developer": "Realtime Associates",
		"region": "USA",
		"players": "4",
		"date": "1991-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2F698C4D",
				"sha1": "3C0FF6F5760DE40C6701B7D07C1C6DFC6B022042",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-07",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-LU-0 PRG",
								"size": "32k",
								"crc": "F7F9785A",
								"sha1": "CEA8C09DE4B20DEC64D8A113F597C38C1060844D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-LU-0 CHR",
								"size": "32k",
								"crc": "A0B2249B",
								"sha1": "D28DD315A7F0F1D1FDDD6AA0917112E4ACE2D696"
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
