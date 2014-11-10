this.NesDb = this.NesDb || {};

NesDb[ 'CC24E62E5354DF897BDBF101E470E5AEE6F023FE' ] = {
	"$": {
		"name": "Days of Thunder",
		"class": "Licensed",
		"catalog": "NES-YH-USA",
		"publisher": "Mindscape",
		"developer": "Beam Software",
		"region": "USA",
		"players": "2",
		"date": "1990-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "12748678",
				"sha1": "CC24E62E5354DF897BDBF101E470E5AEE6F023FE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-10"
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
								"name": "NES-YH-0 PRG",
								"size": "128k",
								"crc": "FA3BFC11",
								"sha1": "8D739B09D86BCA0A42793CC9E0514EA197B0450A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-YH-0 CHR",
								"size": "256k",
								"crc": "69827791",
								"sha1": "0EC4080823549B515F0B8448C68D86D000FC2145"
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
			"name": "Start with more fuel",
			"codes": [
				[
					"NYKNIUNO"
				]
			]
		},
		{
			"name": "Start with less fuel",
			"codes": [
				[
					"YIKNIUNO"
				]
			]
		},
		{
			"name": "Faster acceleration",
			"codes": [
				[
					"SXEYPUSU"
				]
			]
		},
		{
			"name": "Tires don't burst",
			"codes": [
				[
					"AAVOEXNY"
				]
			]
		},
		{
			"name": "Better left-hand cornering",
			"codes": [
				[
					"SNXOSKEY"
				]
			]
		},
		{
			"name": "Maximum acceleration",
			"codes": [
				[
					"IEUNLLLA",
					"SXEYPUSU"
				]
			]
		}
	]
};
