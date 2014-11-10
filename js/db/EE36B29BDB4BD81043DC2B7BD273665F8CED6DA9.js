this.NesDb = this.NesDb || {};

NesDb[ 'EE36B29BDB4BD81043DC2B7BD273665F8CED6DA9' ] = {
	"$": {
		"name": "Space Shuttle Project",
		"class": "Licensed",
		"catalog": "NES-6A-USA",
		"publisher": "Absolute",
		"developer": "Imagineering",
		"region": "USA",
		"players": "1",
		"date": "1991-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2220E14A",
				"sha1": "EE36B29BDB4BD81043DC2B7BD273665F8CED6DA9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-6A-0 PRG",
								"size": "256k",
								"crc": "2220E14A",
								"sha1": "EE36B29BDB4BD81043DC2B7BD273665F8CED6DA9"
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
