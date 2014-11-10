this.NesDb = this.NesDb || {};

NesDb[ '0D8166E5EEEA84524F9711094F5F325A682C4E56' ] = {
	"$": {
		"name": "Seicross",
		"class": "Licensed",
		"catalog": "NES-SE-USA",
		"publisher": "FCI",
		"developer": "Nichibutsu",
		"region": "USA",
		"players": "2",
		"date": "1988-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "27AA3933",
				"sha1": "0D8166E5EEEA84524F9711094F5F325A682C4E56",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-06-21"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-256",
						"pcb": "NES-NROM-256-04",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "NES-SE-0 PRG",
								"size": "32k",
								"crc": "256CFB05",
								"sha1": "A385119CE85DAAAB7AAD7FB823BA0E9FBD2271E2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-SE-0 CHR",
								"size": "8k",
								"crc": "87BF6288",
								"sha1": "BD9D8D102D90DB21B3F83B0AC9357F3C8B9C1122"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113A"
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "27AA3933",
				"sha1": "0D8166E5EEEA84524F9711094F5F325A682C4E56",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-256",
						"pcb": "NES-NROM-256-04",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "NES-SE-0 PRG",
								"size": "32k",
								"crc": "256CFB05",
								"sha1": "A385119CE85DAAAB7AAD7FB823BA0E9FBD2271E2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-SE-0 CHR",
								"size": "8k",
								"crc": "87BF6288",
								"sha1": "BD9D8D102D90DB21B3F83B0AC9357F3C8B9C1122"
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
					"SUTEEX"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PELAGA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TELAGA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PELAGE"
				]
			]
		},
		{
			"name": "Slow motion",
			"codes": [
				[
					"PEGEUG"
				]
			]
		}
	]
};
