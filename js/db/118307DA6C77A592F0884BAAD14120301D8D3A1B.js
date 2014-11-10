this.NesDb = this.NesDb || {};

NesDb[ '118307DA6C77A592F0884BAAD14120301D8D3A1B' ] = {
	"$": {
		"name": "Kirby's Adventure",
		"class": "Licensed",
		"catalog": "NES-KR-USA",
		"publisher": "Nintendo",
		"developer": "HAL Laboratory",
		"region": "USA",
		"players": "1",
		"date": "1993-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "5ED6F221",
				"sha1": "118307DA6C77A592F0884BAAD14120301D8D3A1B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-14"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-10",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-KR-1 PRG",
								"size": "512k",
								"crc": "8FFF3F32",
								"sha1": "23D5FDAAE2C56A2D0B09D8366ECF5B4E04DC4462"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-KR-0 CHR",
								"size": "256k",
								"crc": "7EDAE6F3",
								"sha1": "9D769FD0D5E0D4804AC7CB41C201E65B8301393D"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
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
			"name": "Start with 2 lives",
			"codes": [
				[
					"PEVXIYGA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEVXIYGE"
				]
			]
		},
		{
			"name": "Start with 17 lives",
			"codes": [
				[
					"AOVXIYGA"
				]
			]
		},
		{
			"name": "Less energy from 'pep drinks'",
			"codes": [
				[
					"ZAKLLXAA"
				]
			]
		},
		{
			"name": "More energy from 'pep drinks'",
			"codes": [
				[
					"APKLLXAA"
				]
			]
		},
		{
			"name": "Full energy from 'pep drinks'",
			"codes": [
				[
					"YZKLLXAE"
				]
			]
		},
		{
			"name": "Start with less energy",
			"codes": [
				[
					"YONZZNYX"
				]
			]
		},
		{
			"name": "Start with more energy",
			"codes": [
				[
					"YKNZZNYX"
				]
			]
		},
		{
			"name": "Infinite energy",
			"codes": [
				[
					"SZEPSVSE"
				]
			]
		}
	]
};
