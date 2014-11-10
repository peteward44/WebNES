this.NesDb = this.NesDb || {};

NesDb[ '5B4615452F8219DA66EDD1D9103178BEFCA3AD0A' ] = {
	"$": {
		"name": "Mendel Palace",
		"class": "Licensed",
		"catalog": "NES-6H-USA",
		"publisher": "Hudson Soft",
		"developer": "Game Freak",
		"region": "USA",
		"players": "2",
		"date": "1990-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "12078AFD",
				"sha1": "5B4615452F8219DA66EDD1D9103178BEFCA3AD0A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-25"
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
								"name": "NES-6H-0 PRG",
								"size": "128k",
								"crc": "E5703FC4",
								"sha1": "5AA94562961ED40E7665C14483DF901A3A62B951"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-6H-0 CHR",
								"size": "128k",
								"crc": "34145D12",
								"sha1": "59D0E20E43F5AB33B9B7A652B2FC466CED0FB15B"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SLSIXXVS"
				]
			]
		},
		{
			"name": "1 life",
			"codes": [
				[
					"AAVZLPZA"
				]
			]
		},
		{
			"name": "5 lives",
			"codes": [
				[
					"IAVZLPZA"
				]
			]
		},
		{
			"name": "9 lives",
			"codes": [
				[
					"AAVZLPZE"
				]
			]
		},
		{
			"name": "Player 1 has more lives",
			"codes": [
				[
					"KEXLXKSE"
				]
			]
		},
		{
			"name": "Player 2 has more lives",
			"codes": [
				[
					"KEXLSKSE"
				]
			]
		},
		{
			"name": "Pick up more stars",
			"codes": [
				[
					"IEXIAIPA"
				]
			]
		},
		{
			"name": "Player 1 gains player 2's speed-ups",
			"codes": [
				[
					"SZUIOOSU",
					"VTUSEOVN"
				]
			]
		}
	]
};
