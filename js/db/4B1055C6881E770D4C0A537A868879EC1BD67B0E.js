this.NesDb = this.NesDb || {};

NesDb[ '4B1055C6881E770D4C0A537A868879EC1BD67B0E' ] = {
	"$": {
		"name": "Aussie Rules Footy",
		"class": "Licensed",
		"catalog": "NES-28-AUS",
		"publisher": "Beam Software",
		"developer": "Beam Software",
		"region": "Australia",
		"players": "2",
		"date": "1992-03-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "D630EE8F",
				"sha1": "4B1055C6881E770D4C0A537A868879EC1BD67B0E",
				"dump": "ok",
				"dumper": "_zane",
				"datedumped": "2008-01-04"
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
								"name": "PAL-28-0 PRG",
								"size": "128k",
								"crc": "C004915A",
								"sha1": "ECF2C2D371A6385731F7D84E8AE251CE8C4D49BC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-28-0 CHR",
								"size": "128k",
								"crc": "C7B1C4B3",
								"sha1": "97EEECAA64AD6FE3A0067F97D699C39EE8954DF0"
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
