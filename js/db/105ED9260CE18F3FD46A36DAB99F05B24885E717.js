this.NesDb = this.NesDb || {};

NesDb[ '105ED9260CE18F3FD46A36DAB99F05B24885E717' ] = {
	"$": {
		"name": "WWF WrestleMania",
		"class": "Licensed",
		"catalog": "NES-HN-ESP",
		"publisher": "Acclaim",
		"developer": "Rare",
		"region": "Spain",
		"players": "6",
		"date": "1992-04-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "6C4A9735",
				"sha1": "105ED9260CE18F3FD46A36DAB99F05B24885E717",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-ANROM",
						"pcb": "NES-ANROM-03",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-HN-0 PRG",
								"size": "128k",
								"crc": "6C4A9735",
								"sha1": "105ED9260CE18F3FD46A36DAB99F05B24885E717"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx02"
							}
						},
						{
							"$": {
								"type": "74xx161"
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
			"name": "1-minute tournament rounds",
			"codes": [
				[
					"PAXGXPLA"
				]
			]
		},
		{
			"name": "6-minute tournament rounds",
			"codes": [
				[
					"TAXGXPLA"
				]
			]
		},
		{
			"name": "9-minute tournament rounds",
			"codes": [
				[
					"PAXGXPLE"
				]
			]
		}
	]
};
