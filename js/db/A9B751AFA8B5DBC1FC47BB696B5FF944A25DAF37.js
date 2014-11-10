this.NesDb = this.NesDb || {};

NesDb[ 'A9B751AFA8B5DBC1FC47BB696B5FF944A25DAF37' ] = {
	"$": {
		"name": "Street Cop",
		"class": "Licensed",
		"catalog": "NES-EC-USA",
		"publisher": "Bandai",
		"developer": "Human Entertainment",
		"region": "USA",
		"players": "1",
		"date": "1989-06"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "powerpad",
						"name": "Power Pad"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "61D86167",
				"sha1": "A9B751AFA8B5DBC1FC47BB696B5FF944A25DAF37",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-EC-0 PRG",
								"size": "128k",
								"crc": "987DCDA3",
								"sha1": "CF5143726CD014F3F1F2BF3AEA37863F7D3DAC99"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-EC-0 CHR",
								"size": "128k",
								"crc": "D189C808",
								"sha1": "9F757837B63F7C57ECC210DBE6A4FE23E20DC5BC"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B1-H"
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
			"name": "Less time on the timer",
			"codes": [
				[
					"TAOVTXPA"
				]
			]
		},
		{
			"name": "More time on the timer",
			"codes": [
				[
					"ZPOVTXPA"
				]
			]
		},
		{
			"name": "Stop timer",
			"codes": [
				[
					"SZSNTAVG"
				]
			]
		},
		{
			"name": "Immune to damage",
			"codes": [
				[
					"GXESTZST"
				]
			]
		},
		{
			"name": "Start with less energy",
			"codes": [
				[
					"AONGNAAU"
				]
			]
		},
		{
			"name": "Start with more energy",
			"codes": [
				[
					"AVNGNAAL"
				]
			]
		},
		{
			"name": "Start at level 2",
			"codes": [
				[
					"PAXTPPAA"
				]
			]
		},
		{
			"name": "Start at level 3",
			"codes": [
				[
					"ZAXTPPAA"
				]
			]
		},
		{
			"name": "Start at level 4",
			"codes": [
				[
					"LAXTPPAA"
				]
			]
		},
		{
			"name": "Take minimum damage",
			"codes": [
				[
					"OVESTZSV",
					"PEESYZAP"
				]
			]
		}
	]
};
