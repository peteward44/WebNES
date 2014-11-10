this.NesDb = this.NesDb || {};

NesDb[ '1A63EFF5D4544473E2BBEC23D9DC0089EBF083FF' ] = {
	"$": {
		"name": "Star Soldier",
		"class": "Licensed",
		"catalog": "NES-SO-USA",
		"publisher": "Taxan",
		"developer": "Hudson Soft",
		"region": "USA",
		"players": "1",
		"date": "1989-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "262B5A1D",
				"sha1": "1A63EFF5D4544473E2BBEC23D9DC0089EBF083FF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-08"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-05",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-SO-0 PRG",
								"size": "32k",
								"crc": "766727B2",
								"sha1": "FA84561EE53F96C416822B50C945975DC23165B1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-SO-0 CHR",
								"size": "32k",
								"crc": "F35C2AB4",
								"sha1": "32EAE541F06D307AA6F21A3BC64BE90C80246D61"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
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
					"SZOEAPVG"
				]
			]
		},
		{
			"name": "Start with laser",
			"codes": [
				[
					"PEOAPPAA"
				]
			]
		},
		{
			"name": "Infinite shield power",
			"codes": [
				[
					"GXVPXTVG"
				]
			]
		},
		{
			"name": "Double shield power",
			"codes": [
				[
					"ZAOOOYIE",
					"ZENOGLIE"
				]
			]
		}
	]
};
