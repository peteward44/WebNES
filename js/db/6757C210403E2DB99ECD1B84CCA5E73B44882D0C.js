this.NesDb = this.NesDb || {};

NesDb[ '6757C210403E2DB99ECD1B84CCA5E73B44882D0C' ] = {
	"$": {
		"name": "Barker Bill's Trick Shooting",
		"class": "Licensed",
		"catalog": "NES-ZT-USA",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "USA",
		"players": "1",
		"date": "1990-08"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "zapper",
						"name": "Zapper Light Gun"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "4318A2F8",
				"sha1": "6757C210403E2DB99ECD1B84CCA5E73B44882D0C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-02"
			},
			"board": [
				{
					"$": {
						"type": "NES-SCROM",
						"pcb": "NES-SCROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-ZT-0 PRG",
								"size": "64k",
								"crc": "F2641AD0",
								"sha1": "1AB5CBD2036640D27B22C458218B6DC6366D3290"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-ZT-0 CHR",
								"size": "128k",
								"crc": "A0A5A968",
								"sha1": "49D41D257CD52C20A630B8FAEA64CB54B2D5E1E8"
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
