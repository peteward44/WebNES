this.NesDb = this.NesDb || {};

NesDb[ 'B64AC92C97B3ABCEC8C4DD35A3261D11B159AA34' ] = {
	"$": {
		"name": "Dr. Jekyll and Mr. Hyde",
		"class": "Licensed",
		"catalog": "NES-JH-USA",
		"publisher": "Bandai",
		"developer": "Advance Communication",
		"region": "USA",
		"players": "1",
		"date": "1989-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "4D3FBA78",
				"sha1": "B64AC92C97B3ABCEC8C4DD35A3261D11B159AA34",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-SFROM",
						"pcb": "NES-SFROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-JH-0 PRG",
								"size": "128k",
								"crc": "5E33B189",
								"sha1": "33F90F7E601892D0B61D1D8F3B6CA3C0FCFE9F3C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-JH-0 CHR",
								"size": "32k",
								"crc": "CC352649",
								"sha1": "2D8490A8C1187347359E7B1BE3C8557D61DC5F07"
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
			"name": "Start with 16 coins",
			"codes": [
				[
					"KENLKVSE"
				]
			]
		},
		{
			"name": "Keep coins from previous games",
			"codes": [
				[
					"GXNLKVSE"
				]
			]
		},
		{
			"name": "Instant game restart",
			"codes": [
				[
					"NXNSZEOO"
				]
			]
		},
		{
			"name": "Complete invincibility!",
			"codes": [
				[
					"GZXVTKVK",
					"GZXTTSVK"
				]
			]
		}
	]
};
