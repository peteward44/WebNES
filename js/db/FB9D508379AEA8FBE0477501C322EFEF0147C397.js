this.NesDb = this.NesDb || {};

NesDb[ 'FB9D508379AEA8FBE0477501C322EFEF0147C397' ] = {
	"$": {
		"name": "F-15 Strike Eagle",
		"class": "Licensed",
		"catalog": "NES-8F-ITA",
		"publisher": "Microprose",
		"developer": "Microprose",
		"region": "Italy",
		"players": "1",
		"date": "1993-02-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "FA74F656",
				"sha1": "FB9D508379AEA8FBE0477501C322EFEF0147C397",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2007-09-23"
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
								"name": "ITA-8F-0 PRG",
								"size": "256k",
								"crc": "68AD57AB",
								"sha1": "EE7E9CE18F7B5742424B21BCBE819D4F918A40E1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "ITA-8F-0 CHR",
								"size": "256k",
								"crc": "727F8BC3",
								"sha1": "4D07E4D97B6DC084552E751F56817201D33DA278"
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
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	]
};
