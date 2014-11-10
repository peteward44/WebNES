this.NesDb = this.NesDb || {};

NesDb[ '2B6CDE1D114FDD1DF91CAFC8D5947966A3BC1FC5' ] = {
	"$": {
		"name": "Sword Master",
		"class": "Licensed",
		"catalog": "NES-8S-SCN",
		"publisher": "Activision",
		"developer": "Athena",
		"region": "Scandinavia",
		"players": "1",
		"date": "1993-01-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "66066326",
				"sha1": "2B6CDE1D114FDD1DF91CAFC8D5947966A3BC1FC5",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-26"
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
								"name": "PAL-8S-0 PRG",
								"size": "128k",
								"crc": "36002ED2",
								"sha1": "7E9F47C52DC23E957D89501036B99C155247843D"
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
								"type": "MMC3C"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
