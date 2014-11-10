this.NesDb = this.NesDb || {};

NesDb[ 'D1BA76E93F14E66D98543EE1599475DD0E79A4A4' ] = {
	"$": {
		"name": "Pinball Quest",
		"class": "Licensed",
		"catalog": "NES-P9-AUS",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "Australia",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "9F119033",
				"sha1": "D1BA76E93F14E66D98543EE1599475DD0E79A4A4",
				"dump": "ok",
				"dumper": "B00daW",
				"datedumped": "2008-10-21"
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
								"name": "PAL-P9-0 PRG",
								"size": "128k",
								"crc": "1AC18056",
								"sha1": "BA2F1F2BDBA107800922CCB43FFA07A3B6618453"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-P9-0 CHR",
								"size": "128k",
								"crc": "6F452964",
								"sha1": "21C7CFF43A013C91B758786E17E7F1B7F1AADEB6"
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
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	]
};
