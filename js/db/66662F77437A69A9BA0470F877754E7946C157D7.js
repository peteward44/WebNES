this.NesDb = this.NesDb || {};

NesDb[ '66662F77437A69A9BA0470F877754E7946C157D7' ] = {
	"$": {
		"name": "Shinobi",
		"class": "Unlicensed",
		"catalog": "TGN-010-SH",
		"publisher": "Tengen",
		"developer": "Sega",
		"region": "USA",
		"players": "1",
		"date": "1989"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "EB0BDA7E",
				"sha1": "66662F77437A69A9BA0470F877754E7946C157D7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-27"
			},
			"board": [
				{
					"$": {
						"type": "TENGEN-800032",
						"pcb": "800032 REV A",
						"mapper": "64"
					},
					"prg": [
						{
							"$": {
								"name": "335010-1011 SHPRG",
								"size": "128k",
								"crc": "DC270779",
								"sha1": "BC362DE87ED1A83F821C0B758AFFE14FBC845AC5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "335010-1012 SHCHR",
								"size": "128k",
								"crc": "AAE9F037",
								"sha1": "B7BF3B99DB7039AB0EC21976D89576D9A170A24C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "337006"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "337006"
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
					"SZEOLXVK"
				]
			]
		},
		{
			"name": "1 life",
			"codes": [
				[
					"AANOLAZA"
				]
			]
		},
		{
			"name": "6 lives",
			"codes": [
				[
					"IANOLAZA"
				]
			]
		},
		{
			"name": "9 lives",
			"codes": [
				[
					"AANOLAZE"
				]
			]
		},
		{
			"name": "Infinite life energy",
			"codes": [
				[
					"SZNIPNVK"
				]
			]
		},
		{
			"name": "Turbo running",
			"codes": [
				[
					"IEKONILA"
				]
			]
		},
		{
			"name": "Start with double normal energy",
			"codes": [
				[
					"GAXOTATE",
					"GENPGPTE"
				]
			]
		}
	]
};
