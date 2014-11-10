this.NesDb = this.NesDb || {};

NesDb[ 'CFF9FE0D8F2E9490E1DA787A93FCEF88D83153CA' ] = {
	"$": {
		"name": "Golf Grand Slam",
		"altname": "ゴルフグランドスラム",
		"class": "Licensed",
		"catalog": "HCT-7G/009",
		"publisher": "Hect",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "4",
		"date": "1991-01-31"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3F0C8136",
				"sha1": "CFF9FE0D8F2E9490E1DA787A93FCEF88D83153CA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HCT-7G-0 PRG",
								"size": "128k",
								"crc": "7876E439",
								"sha1": "EF97FD24BFFC0494C91D413DD80BDC79210B3FAE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HCT-7G-0 CHR",
								"size": "128k",
								"crc": "E384A2F3",
								"sha1": "55C109B8106E916F9F203F1AC3F53E9435EE7928"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Strokes aren't recorded",
			"codes": [
				[
					"SXEZGYSA"
				]
			]
		},
		{
			"name": "Some shots can be done more accurately",
			"codes": [
				[
					"PEXTETIA"
				]
			]
		},
		{
			"name": "Wind always at 9",
			"codes": [
				[
					"OZOIPGIX",
					"PAOIZKAX",
					"SXSZZYSA"
				]
			]
		}
	]
};
