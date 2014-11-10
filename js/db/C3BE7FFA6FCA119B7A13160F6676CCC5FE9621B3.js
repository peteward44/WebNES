this.NesDb = this.NesDb || {};

NesDb[ 'C3BE7FFA6FCA119B7A13160F6676CCC5FE9621B3' ] = {
	"$": {
		"name": "Mario & Yoshi",
		"class": "Licensed",
		"catalog": "NES-YM-NOE",
		"publisher": "Nintendo",
		"developer": "Game Freak",
		"region": "Germany",
		"players": "2",
		"date": "1992-09-13"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "836685C4",
				"sha1": "C3BE7FFA6FCA119B7A13160F6676CCC5FE9621B3",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-SFROM",
						"pcb": "NES-SFROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-YM-0 PRG",
								"size": "128k",
								"crc": "1406783D",
								"sha1": "51F5BCFD9F43F4EB013044CECA523562008F86D9"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-YM-0 CHR",
								"size": "32k",
								"crc": "FC0BBA23",
								"sha1": "F46C2469E90B0DA28B22463C1C9111BD75C081E1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B3"
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
