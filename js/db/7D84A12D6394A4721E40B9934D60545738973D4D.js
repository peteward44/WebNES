this.NesDb = this.NesDb || {};

NesDb[ '7D84A12D6394A4721E40B9934D60545738973D4D' ] = {
	"$": {
		"name": "Power Blade 2",
		"class": "Licensed",
		"catalog": "NES-PB-USA",
		"publisher": "Taito",
		"developer": "Natsume",
		"region": "USA",
		"players": "1",
		"date": "1992-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "D273B409",
				"sha1": "7D84A12D6394A4721E40B9934D60545738973D4D",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-03-11"
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
								"name": "NES-PB-0 PRG",
								"size": "128k",
								"crc": "1BEBF407",
								"sha1": "D75FE3C10666AECC40539D136478F65B116CA99D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-PB-0 CHR",
								"size": "128k",
								"crc": "96ADC4A9",
								"sha1": "479B29022E06A2C7AA1E37DC5361D2CAC4022144"
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
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AEKEPTZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IEKEPTZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEKEPTZE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"GZSILAVG"
				]
			]
		},
		{
			"name": "Infinite energy--except for spikes",
			"codes": [
				[
					"OVSLZLSV"
				]
			]
		},
		{
			"name": "Stop timer",
			"codes": [
				[
					"ATKKXZSZ"
				]
			]
		},
		{
			"name": "Speed up timer",
			"codes": [
				[
					"YPKGNXYU"
				]
			]
		},
		{
			"name": "Slow down timer",
			"codes": [
				[
					"YYKGNXYU"
				]
			]
		},
		{
			"name": "Infinite life tanks",
			"codes": [
				[
					"GXEVXTVG"
				]
			]
		},
		{
			"name": "Infinite energy tanks",
			"codes": [
				[
					"GZEIPLVG"
				]
			]
		},
		{
			"name": "Throw meter doesn't decrease when boomerang is thrown",
			"codes": [
				[
					"SAKSZZSZ"
				]
			]
		},
		{
			"name": "Take minimal damage",
			"codes": [
				[
					"OVSLZLSV",
					"PESLLLAA"
				]
			]
		},
		{
			"name": "Maximum throwing ability on pick-up",
			"codes": [
				[
					"OZVULSOK",
					"SANLZIVT"
				]
			]
		}
	]
};
