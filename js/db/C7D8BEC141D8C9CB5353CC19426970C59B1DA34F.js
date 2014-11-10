this.NesDb = this.NesDb || {};

NesDb[ 'C7D8BEC141D8C9CB5353CC19426970C59B1DA34F' ] = {
	"$": {
		"name": "Magic Darts",
		"class": "Licensed",
		"catalog": "NES-4R-USA",
		"publisher": "Romstar",
		"developer": "Seta",
		"region": "USA",
		"players": "4",
		"date": "1991-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5EB8E707",
				"sha1": "C7D8BEC141D8C9CB5353CC19426970C59B1DA34F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-11"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLRROM",
						"pcb": "NES-SLRROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-4R-0 PRG",
								"size": "128k",
								"crc": "C8A10B71",
								"sha1": "8309749506C804EBD9804326305419413DC75F18"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-4R-0 CHR",
								"size": "128k",
								"crc": "06E760D1",
								"sha1": "109E7ED6EC86355B712F49163D095A9DC2159B40"
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
