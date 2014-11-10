this.NesDb = this.NesDb || {};

NesDb[ 'CABE711271A3012BB6C37F33F07DB5A3D5B8C02F' ] = {
	"$": {
		"name": "Ghoul School",
		"class": "Licensed",
		"catalog": "NES-Y3-USA",
		"publisher": "Electro Brain",
		"developer": "Imagineering",
		"region": "USA",
		"players": "1",
		"date": "1992-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2BC25D5A",
				"sha1": "CABE711271A3012BB6C37F33F07DB5A3D5B8C02F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-Y3-0 PRG",
								"size": "128k",
								"crc": "4ED0D752",
								"sha1": "5441546E6076F83EDD91CB0D0F280B999490C87D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-Y3-0 CHR",
								"size": "128k",
								"crc": "5EEF4B54",
								"sha1": "84200F8B325F830B27B13F7020812C2243B7C9FD"
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
