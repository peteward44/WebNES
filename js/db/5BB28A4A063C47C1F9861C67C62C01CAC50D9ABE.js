this.NesDb = this.NesDb || {};

NesDb[ '5BB28A4A063C47C1F9861C67C62C01CAC50D9ABE' ] = {
	"$": {
		"name": "Blaster Master",
		"class": "Licensed",
		"catalog": "NES-VM-EEC",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "Europe",
		"players": "1",
		"date": "1991-04-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "8106E694",
				"sha1": "5BB28A4A063C47C1F9861C67C62C01CAC50D9ABE",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-03"
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
								"name": "PAL-VM-0 PRG",
								"size": "128k",
								"crc": "B40870A2",
								"sha1": "474E1B29D0E03EC937755728D6D1D29D030D3E13"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-VM-0 CHR",
								"size": "128k",
								"crc": "F2C24999",
								"sha1": "84C210E7E5167D7F6B1B57CBF16B9DB0CFF76DC8"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SZUGYIVG"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AAEGZLZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IAEGZLZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AAEGZLZE"
				]
			]
		},
		{
			"name": "Infinite homing missiles",
			"codes": [
				[
					"GZSOEEVK"
				]
			]
		},
		{
			"name": "Infinite Thunderbreaks",
			"codes": [
				[
					"GXKPEOVK"
				]
			]
		},
		{
			"name": "Infinite multi-warheads",
			"codes": [
				[
					"GXSOVXVK"
				]
			]
		},
		{
			"name": "Start with 5 of each weapon",
			"codes": [
				[
					"IAEKPLAA"
				]
			]
		},
		{
			"name": "Start with 10 of each weapon",
			"codes": [
				[
					"ZAEKPLAE"
				]
			]
		},
		{
			"name": "Start with 15 of each weapon",
			"codes": [
				[
					"YAEKPLAE"
				]
			]
		}
	]
};
