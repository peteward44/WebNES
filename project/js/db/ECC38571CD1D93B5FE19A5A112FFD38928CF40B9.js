this.NesDb = this.NesDb || {};

NesDb[ 'ECC38571CD1D93B5FE19A5A112FFD38928CF40B9' ] = {
	"$": {
		"name": "Willow",
		"class": "Licensed",
		"catalog": "NES-WI-FRG",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Germany",
		"players": "1",
		"date": "1993-04-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "D9323EE6",
				"sha1": "ECC38571CD1D93B5FE19A5A112FFD38928CF40B9",
				"dump": "ok",
				"dumper": "Bregalad",
				"datedumped": "2007-08-02"
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
								"name": "PAL-WI-0 PRG",
								"size": "128k",
								"crc": "8777D399",
								"sha1": "AAB665BB7C6E6C0B4D8CECEC7F70CB9554B37017"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-WI-0 CHR",
								"size": "128k",
								"crc": "30EA1A32",
								"sha1": "1E0ACD4F01EA1C6FD1D6CB5C6881BCA3E471AA26"
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
	],
	"gameGenieCodes": [
		{
			"name": "Infinite magic",
			"codes": [
				[
					"ZASEGOUI"
				]
			]
		},
		{
			"name": "Don't take any hits",
			"codes": [
				[
					"TGNILGSA"
				]
			]
		},
		{
			"name": "Start with all items",
			"codes": [
				[
					"XZKYILKP",
					"AVUOXSOZ"
				]
			]
		},
		{
			"name": "Start at experience Level 5",
			"codes": [
				[
					"GEKISVZA",
					"PNKINTSL"
				]
			]
		},
		{
			"name": "Start at experience Level 10",
			"codes": [
				[
					"PEKISVZE",
					"PNKINTSL"
				]
			]
		},
		{
			"name": "Start at experience Level 15",
			"codes": [
				[
					"TEKISVZE",
					"PNKINTSL"
				]
			]
		}
	]
};
