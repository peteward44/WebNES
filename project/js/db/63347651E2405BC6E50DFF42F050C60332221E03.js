this.NesDb = this.NesDb || {};

NesDb[ '63347651E2405BC6E50DFF42F050C60332221E03' ] = {
	"$": {
		"name": "Gemfire",
		"class": "Licensed",
		"catalog": "NES-GE-USA",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "USA",
		"players": "2",
		"date": "1992-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "0EC6C023",
				"sha1": "63347651E2405BC6E50DFF42F050C60332221E03",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-17"
			},
			"board": [
				{
					"$": {
						"type": "NES-EKROM",
						"pcb": "NES-EKROM-01",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "NES-GE-0 PRG",
								"size": "256k",
								"crc": "E7C72DBB",
								"sha1": "03F0A3A41071FC445B3AFF63782A1C36C8A7DCBA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-GE-0 CHR",
								"size": "256k",
								"crc": "269ED2EE",
								"sha1": "5C63654DD188FB1F169214FD05E674C22FFA5D55"
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
