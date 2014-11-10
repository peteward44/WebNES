this.NesDb = this.NesDb || {};

NesDb[ '4C9C05FAD6F6F33A92A27C2EDC1E7DE12D7F216D' ] = {
	"$": {
		"name": "Seicross",
		"altname": "セクロス",
		"class": "Licensed",
		"catalog": "NBF-SE (02)",
		"publisher": "Nichibutsu",
		"developer": "Nichibutsu",
		"region": "Japan",
		"players": "2",
		"date": "1986-05-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "2.0",
				"crc": "0F05FF0A",
				"sha1": "4C9C05FAD6F6F33A92A27C2EDC1E7DE12D7F216D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-12-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM+SECURITY",
						"pcb": "HVC-CNROM-256K-01",
						"mapper": "185"
					},
					"prg": [
						{
							"$": {
								"name": "NBE-SE-0 PRG",
								"size": "32k",
								"crc": "A03C98A7",
								"sha1": "ACDEA623B61D065EBEB750432BDB9ADBE6BDB50B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NBE-SE-0 CHR",
								"size": "8k",
								"crc": "DBA2082A",
								"sha1": "CA002F56FD2AE4E5C5B8C1A6C6597D1E9FF98C73"
							},
							"pin": [
								{
									"$": {
										"number": "26",
										"function": "/CE"
									}
								},
								{
									"$": {
										"number": "27",
										"function": "/CE"
									}
								}
							]
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
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
