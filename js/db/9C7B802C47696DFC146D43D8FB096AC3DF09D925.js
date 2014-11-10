this.NesDb = this.NesDb || {};

NesDb[ '9C7B802C47696DFC146D43D8FB096AC3DF09D925' ] = {
	"$": {
		"name": "Bram Stoker's Dracula",
		"class": "Licensed",
		"catalog": "NES-DR-USA",
		"publisher": "Sony (CSG) Imagesoft",
		"developer": "Probe",
		"region": "USA",
		"players": "1",
		"date": "1993-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "DFA111F1",
				"sha1": "9C7B802C47696DFC146D43D8FB096AC3DF09D925",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-24"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-08",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-DR-0 PRG",
								"size": "128k",
								"crc": "042C6F99",
								"sha1": "402E6FBDDD15398E03684D4F7E01E6F833501BF4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-DR-0 CHR",
								"size": "128k",
								"crc": "692B357D",
								"sha1": "BB4624313D5CB082F18EC4D61D5F36CA3DEBD3C1"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
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
			"name": "Infinite lives",
			"codes": [
				[
					"NUNTZUKU"
				]
			]
		},
		{
			"name": "Infinite energy--Except falling off cliffs",
			"codes": [
				[
					"SUXLISVS"
				]
			]
		},
		{
			"name": "Infinite time",
			"codes": [
				[
					"AEVGPPPA"
				]
			]
		},
		{
			"name": "Faster timer",
			"codes": [
				[
					"ZEVGPPPA"
				]
			]
		},
		{
			"name": "Infinite weapons--Except scene 1 daytime",
			"codes": [
				[
					"UUETEIZE"
				]
			]
		},
		{
			"name": "Disable axe",
			"codes": [
				[
					"NNSNGPZE"
				]
			]
		}
	]
};
