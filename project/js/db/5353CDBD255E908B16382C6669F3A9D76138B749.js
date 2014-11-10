this.NesDb = this.NesDb || {};

NesDb[ '5353CDBD255E908B16382C6669F3A9D76138B749' ] = {
	"$": {
		"name": "Double Dragon",
		"class": "Licensed",
		"catalog": "NES-WD-ESP",
		"publisher": "Nintendo",
		"developer": "Technos",
		"region": "Spain",
		"players": "2",
		"date": "1992-03-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "A1A0C13F",
				"sha1": "5353CDBD255E908B16382C6669F3A9D76138B749",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
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
								"name": "PAL-WD-0 PRG",
								"size": "128k",
								"crc": "144CA9E5",
								"sha1": "C5560ED90F4E2AB5E4CA05ADFEE40E1C0439C2C0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-WD-0 CHR",
								"size": "128k",
								"crc": "5EBE0FD0",
								"sha1": "4A948C9784433E051F1015A6B6E985A98B81B80D"
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
			"name": "Freeze the timer countdown",
			"codes": [
				[
					"AAUNYLPA"
				]
			]
		},
		{
			"name": "Start game with 1 life",
			"codes": [
				[
					"AEUTLZZA"
				]
			]
		},
		{
			"name": "Start game with 6 lives",
			"codes": [
				[
					"IEUTLZZA"
				]
			]
		},
		{
			"name": "Start game with 9 lives",
			"codes": [
				[
					"AEUTLZZE"
				]
			]
		},
		{
			"name": "More energy for player 2 or the CPU",
			"codes": [
				[
					"XTKNXEZK"
				]
			]
		},
		{
			"name": "More energy for player 1",
			"codes": [
				[
					"XTKYOEZK"
				]
			]
		},
		{
			"name": "Timer will count down fast",
			"codes": [
				[
					"AZUYZLAL"
				]
			]
		},
		{
			"name": "Timer will count down super-fast",
			"codes": [
				[
					"APUYZLAL"
				]
			]
		}
	]
};
