this.NesDb = this.NesDb || {};

NesDb[ '32473799F96406D73AA37D5CF66E0E27F1F339DA' ] = {
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
				"prototype": "1",
				"crc": "D7794AFC",
				"sha1": "32473799F96406D73AA37D5CF66E0E27F1F339DA",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKEPROM",
						"pcb": "NES-TKEPROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"id": "0",
								"name": "NES KR-P-1",
								"size": "128k",
								"crc": "269EA29D",
								"sha1": "FDEEEB85AB250C49028E6907A767722D0D367426"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "NES KR-P-2",
								"size": "128k",
								"crc": "FF7E9E56",
								"sha1": "4A8B29866C4BBF00B411FAF1E604DAA67F36ACC4"
							}
						},
						{
							"$": {
								"id": "2",
								"name": "NES KR-P-3",
								"size": "128k",
								"crc": "E332DD37",
								"sha1": "928D9251CEFDEDE47E651A381C88880649571E08"
							}
						},
						{
							"$": {
								"id": "3",
								"name": "NES KR-P-4",
								"size": "128k",
								"crc": "5C575DE9",
								"sha1": "97B03D59FF62CADABE7BE4C7E632B2542E69B9C8"
							}
						}
					],
					"chr": [
						{
							"$": {
								"id": "0",
								"name": "NES KR-C-1",
								"size": "128k",
								"crc": "6F6D6A41",
								"sha1": "1CC1F86F74CCDEA24F85F817DAD195D47930E42E"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "NES KR-C-2",
								"size": "128k",
								"crc": "6F467E00",
								"sha1": "5E7099A752F53C004382963A87165EA3A9421455"
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
								"type": "74xx139"
							}
						},
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "D7794AFC",
				"sha1": "32473799F96406D73AA37D5CF66E0E27F1F339DA",
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
								"name": "NES-KR-0 PRG",
								"size": "512k",
								"crc": "9077A623",
								"sha1": "A7F735DFDC103C0A98327EDD2908626EDDC3AE2F"
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
