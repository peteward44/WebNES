this.NesDb = this.NesDb || {};

NesDb[ '7434AFE89BCAE2A5B73397CF5B7DB0B59D2953E0' ] = {
	"$": {
		"name": "Rad Racer II",
		"class": "Licensed",
		"catalog": "NES-QR-USA",
		"publisher": "Square",
		"developer": "Square",
		"region": "USA",
		"players": "1",
		"date": "1990-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "404B2E8B",
				"sha1": "7434AFE89BCAE2A5B73397CF5B7DB0B59D2953E0",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-26"
			},
			"board": [
				{
					"$": {
						"type": "NES-TVROM",
						"pcb": "NES-TVROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-QR-0 PRG",
								"size": "64k",
								"crc": "AB90E397",
								"sha1": "0956F7D9A216549DBD80B1DBF2653B36A320D0AB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-QR-0 CHR",
								"size": "64k",
								"crc": "07DF55D8",
								"sha1": "DD0FA0A79D30EB04917D7309A62ADFB037EF9CA5"
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
