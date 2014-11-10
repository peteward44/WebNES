this.NesDb = this.NesDb || {};

NesDb[ '4B0A6F62A5DF2B6022357AA0C18978798299459B' ] = {
	"$": {
		"name": "Double Dare",
		"class": "Licensed",
		"catalog": "NES-2D-USA",
		"publisher": "GameTek",
		"developer": "Rare",
		"region": "USA",
		"players": "2",
		"date": "1990-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2B378D11",
				"sha1": "4B0A6F62A5DF2B6022357AA0C18978798299459B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-AOROM",
						"pcb": "NES-AOROM-03",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "NES-2D-0 PRG",
								"size": "256k",
								"crc": "2B378D11",
								"sha1": "4B0A6F62A5DF2B6022357AA0C18978798299459B"
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
								"type": "74xx161"
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
	]
};
