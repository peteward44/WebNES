this.NesDb = this.NesDb || {};

NesDb[ 'D2327AC8751BA04B09E420B6E259BA21B3FFFF81' ] = {
	"$": {
		"name": "Sqoon",
		"class": "Licensed",
		"catalog": "NES-SQ-USA",
		"publisher": "Irem",
		"developer": "Home Data",
		"region": "USA",
		"players": "1",
		"date": "1987-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "44F34172",
				"sha1": "D2327AC8751BA04B09E420B6E259BA21B3FFFF81",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-256",
						"pcb": "NES-NROM-256-03",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "NES-SQ-0 PRG",
								"size": "32k",
								"crc": "1808061A",
								"sha1": "18B0C0B7803EBA7296AE5022B9750EA770225C24"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-SQ-0 CHR",
								"size": "8k",
								"crc": "467148ED",
								"sha1": "69146D42CCDFD62D7412593C8541F7CD32304AEC"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3193A"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
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
					"AEEAAIPA"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AEUESLZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IEUESLZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEUESLZE"
				]
			]
		},
		{
			"name": "Start at phase 3",
			"codes": [
				[
					"LASEXLPA"
				]
			]
		},
		{
			"name": "Start at phase 5",
			"codes": [
				[
					"IASEXLPA"
				]
			]
		},
		{
			"name": "Start at phase 8",
			"codes": [
				[
					"AASEXLPE"
				]
			]
		},
		{
			"name": "Never lose your special weapon",
			"codes": [
				[
					"SZEEOSVK"
				]
			]
		},
		{
			"name": "Gain main weapon on rescuing 9 humans",
			"codes": [
				[
					"ZEOOEYPA"
				]
			]
		},
		{
			"name": "Never lose humans on dying",
			"codes": [
				[
					"GXEAKKSE",
					"GXSUZXSE"
				]
			]
		}
	]
};
