this.NesDb = this.NesDb || {};

NesDb[ '48D87B70D1703095B629BDBD5BAF98632CCAD082' ] = {
	"$": {
		"name": "Blaster Master",
		"class": "Licensed",
		"catalog": "NES-VM-USA",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "USA",
		"players": "1",
		"date": "1988-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "B683A856",
				"sha1": "48D87B70D1703095B629BDBD5BAF98632CCAD082",
				"dump": "ok",
				"dumper": "kevtris",
				"datedumped": "2012-04-15"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKEPROM",
						"pcb": "NES-SKEPROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PRG",
								"size": "128k",
								"crc": "7705CB0B",
								"sha1": "C4231D4DB07D6E22CB7921DFA7453EED132A2ACE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CHR",
								"size": "128k",
								"crc": "0908CA25",
								"sha1": "2ED2672E64C6C37A89E0D4BC2B561833FE9B578E"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3193A"
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
