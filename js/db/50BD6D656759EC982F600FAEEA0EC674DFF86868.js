this.NesDb = this.NesDb || {};

NesDb[ '50BD6D656759EC982F600FAEEA0EC674DFF86868' ] = {
	"$": {
		"name": "Tetris 2",
		"class": "Licensed",
		"catalog": "NES-TS-UKV",
		"publisher": "Nintendo",
		"developer": "TOSE Software",
		"region": "United Kingdom",
		"players": "2",
		"date": "1993"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "5D2B1962",
				"sha1": "50BD6D656759EC982F600FAEEA0EC674DFF86868",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-10"
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
								"name": "PAL-TS-0 PRG",
								"size": "128k",
								"crc": "CD8B279F",
								"sha1": "30375817DD08D97517AA88035973F72D4E8A27D9"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-TS-0 CHR",
								"size": "128k",
								"crc": "9C4DB593",
								"sha1": "AC16761A9E3DFD10384EF680283EA9C3FABE9B53"
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
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "1 player: Speed doesn't increase",
			"codes": [
				[
					"AAUEUSSO"
				]
			]
		},
		{
			"name": "1 player: Speed increases much faster",
			"codes": [
				[
					"VNUEUSSO"
				]
			]
		},
		{
			"name": "1 player: Start and stay at speed of 25",
			"codes": [
				[
					"TEXAKYPA"
				]
			]
		},
		{
			"name": "1 player: Max speed is 2",
			"codes": [
				[
					"ZEKESSPP",
					"PESAOSAP"
				]
			]
		},
		{
			"name": "1 player: Max speed is 10",
			"codes": [
				[
					"ZEKESSPO",
					"PESAOSAO"
				]
			]
		},
		{
			"name": "1 player: Max speed is 15",
			"codes": [
				[
					"YEKESSPO",
					"TESAOSAO"
				]
			]
		},
		{
			"name": "1 player: Max speed is 20",
			"codes": [
				[
					"GOKESSPP",
					"LOSAOSAP"
				]
			]
		},
		{
			"name": "1 player vs 2 player or 1 player vs CPU: Every round starts with 4 fixed blocks",
			"codes": [
				[
					"OZNETPOU",
					"PANEYPAA"
				]
			]
		},
		{
			"name": "1 player vs 2 player or 1 player vs CPU: Every round starts with 10 fixed blocks",
			"codes": [
				[
					"OZNETPOU",
					"YANEYPAA"
				]
			]
		},
		{
			"name": "1 player vs 2 player or 1 player vs CPU: Every round starts with 15 fixed blocks",
			"codes": [
				[
					"OZNETPOU",
					"GANEYPAE"
				]
			]
		},
		{
			"name": "1 player vs 2 player or 1 player vs CPU: Every round starts with 20 fixed blocks",
			"codes": [
				[
					"OZNETPOU",
					"PPNEYPAA"
				]
			]
		},
		{
			"name": "Cannot pause game with START button",
			"codes": [
				[
					"AAVZVYEA"
				]
			]
		},
		{
			"name": "Don't hide remaining pieces during pause",
			"codes": [
				[
					"AVEXOYXZ"
				]
			]
		}
	]
};
