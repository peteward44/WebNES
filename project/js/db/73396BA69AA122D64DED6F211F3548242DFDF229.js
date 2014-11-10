this.NesDb = this.NesDb || {};

NesDb[ '73396BA69AA122D64DED6F211F3548242DFDF229' ] = {
	"$": {
		"name": "International Cricket",
		"class": "Licensed",
		"catalog": "NES-CC-AUS",
		"publisher": "Beam Software",
		"developer": "Beam Software",
		"region": "Australia",
		"players": "2",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "A66D5150",
				"sha1": "73396BA69AA122D64DED6F211F3548242DFDF229",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-18"
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
								"name": "PAL-CC-0 PRG",
								"size": "128k",
								"crc": "2640DE27",
								"sha1": "4034D9E4E89B72AB1545E3AEF325B59F61FA961C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-CC-0 CHR",
								"size": "128k",
								"crc": "8DDB599E",
								"sha1": "1560DAEA710D2DEDAC32579C15A5051DD0A60ACD"
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
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	]
};
