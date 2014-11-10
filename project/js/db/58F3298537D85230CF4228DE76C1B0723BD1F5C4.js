this.NesDb = this.NesDb || {};

NesDb[ '58F3298537D85230CF4228DE76C1B0723BD1F5C4' ] = {
	"$": {
		"name": "Sword Master",
		"class": "Licensed",
		"catalog": "NES-8S-USA",
		"publisher": "Activision",
		"developer": "Athena",
		"region": "USA",
		"players": "1",
		"date": "1992-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "465E5483",
				"sha1": "58F3298537D85230CF4228DE76C1B0723BD1F5C4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-01-15"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-8S-0 PRG",
								"size": "128k",
								"crc": "458936EF",
								"sha1": "1E257ABF2E436EC02B6F8A9B343A08B785FB4484"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-8S-0 CHR",
								"size": "128k",
								"crc": "5170E390",
								"sha1": "61510B8CEFF48966D2AF691C04418F4E501F0449"
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
