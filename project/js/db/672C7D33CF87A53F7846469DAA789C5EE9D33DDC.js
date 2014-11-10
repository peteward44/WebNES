this.NesDb = this.NesDb || {};

NesDb[ '672C7D33CF87A53F7846469DAA789C5EE9D33DDC' ] = {
	"$": {
		"name": "Days of Thunder",
		"class": "Licensed",
		"catalog": "NES-YH-EEC",
		"publisher": "Mindscape",
		"developer": "Beam Software",
		"region": "Europe",
		"players": "2",
		"date": "1991-04-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "FA73D3A2",
				"sha1": "672C7D33CF87A53F7846469DAA789C5EE9D33DDC",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-03-22"
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
								"name": "PAL-YH-0 PRG",
								"size": "128k",
								"crc": "58BDB483",
								"sha1": "2343358138D3D436634B7FD8E0F25BB3C9702300"
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
								"type": "3195A"
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
