this.NesDb = this.NesDb || {};

NesDb[ '4CC68474658B796954402FCA71DA5F2FF8BAF5AE' ] = {
	"$": {
		"name": "Infiltrator",
		"class": "Licensed",
		"catalog": "NES-IF-USA",
		"publisher": "Mindscape",
		"developer": "Gray Matter",
		"region": "USA",
		"players": "1",
		"date": "1990-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "DF64963B",
				"sha1": "4CC68474658B796954402FCA71DA5F2FF8BAF5AE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-27"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-IF-0 PRG",
								"size": "128k",
								"crc": "32A33BD1",
								"sha1": "D3D9CA09A85DDC98BAB5795CC19F25AC64108F36"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-IF-0 CHR",
								"size": "128k",
								"crc": "20AF8F97",
								"sha1": "6EAD747C24F7AECD138AC179CCAEE1D718907D82"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
			"name": "Start with more Grenades",
			"codes": [
				[
					"ZPSLPXZA"
				]
			]
		},
		{
			"name": "Start with fewer Grenades",
			"codes": [
				[
					"IASLPXZA"
				]
			]
		},
		{
			"name": "Start with no Grenades",
			"codes": [
				[
					"AASLPXZA"
				]
			]
		},
		{
			"name": "Start with less Spray",
			"codes": [
				[
					"LPKUIZTZ"
				]
			]
		},
		{
			"name": "Start with no Spray",
			"codes": [
				[
					"AAKUIZTZ"
				]
			]
		},
		{
			"name": "Never lose Grenades outside buildings",
			"codes": [
				[
					"SXKXXIVG"
				]
			]
		},
		{
			"name": "Never lose Grenades inside buildings",
			"codes": [
				[
					"SZVKAIVG"
				]
			]
		},
		{
			"name": "Never lose Spray outside buildings",
			"codes": [
				[
					"SXUXKIVG"
				]
			]
		},
		{
			"name": "Never lose Spray inside buildings",
			"codes": [
				[
					"SZUKYIVG"
				]
			]
		},
		{
			"name": "Stop timer",
			"codes": [
				[
					"SZKLIKVK"
				]
			]
		},
		{
			"name": "Start with less time",
			"codes": [
				[
					"ILOULXPL"
				]
			]
		}
	]
};
