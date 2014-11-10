this.NesDb = this.NesDb || {};

NesDb[ '7D10C6DD141DA35A1672F127791639B5816C692D' ] = {
	"$": {
		"name": "Hebereke",
		"altname": "へべれけ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "SUN-HEB-6200",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "Japan",
		"players": "1",
		"date": "1991-09-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "72928698",
				"sha1": "7D10C6DD141DA35A1672F127791639B5816C692D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-04"
			},
			"board": [
				{
					"$": {
						"type": "SUNSOFT-5A",
						"pcb": "BAT-E301",
						"mapper": "69"
					},
					"prg": [
						{
							"$": {
								"name": "HEB-PRG",
								"size": "128k",
								"crc": "70E0B7D8",
								"sha1": "64F18CA61861B6C4070B1450135D3160D8468F43"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HEB-CHR",
								"size": "128k",
								"crc": "8953EEDF",
								"sha1": "5010BDBECE12FD0D19D2CB34F88EF3A5C05DC196"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "FME-7"
							}
						}
					]
				}
			]
		}
	]
};
