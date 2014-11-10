this.NesDb = this.NesDb || {};

NesDb[ 'CA7AE22E8934A9ACA0853406D4A074F1807D58E7' ] = {
	"$": {
		"name": "World Champ",
		"class": "Licensed",
		"catalog": "NES-5E-NOE",
		"publisher": "Taito",
		"developer": "Pixel",
		"region": "Germany",
		"players": "2",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "9B05B278",
				"sha1": "CA7AE22E8934A9ACA0853406D4A074F1807D58E7",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2007-02-03"
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
								"name": "PAL-5E-0 PRG",
								"size": "128k",
								"crc": "8F61E80D",
								"sha1": "D0B67FFC0849C18013253965BA497B6B76D8CCFD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-5E-0 CHR",
								"size": "128k",
								"crc": "4074E87E",
								"sha1": "AC7B325049FED0023AB9E3DD69860B505B27D4A6"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
