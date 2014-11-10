this.NesDb = this.NesDb || {};

NesDb[ '72AEF6054BF5E8B3301FEA396187C71454C2465D' ] = {
	"$": {
		"name": "Blades of Steel",
		"class": "Licensed",
		"catalog": "NES-VS-EEC",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Europe",
		"players": "2",
		"date": "1990-11-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "C0EDEDD0",
				"sha1": "72AEF6054BF5E8B3301FEA396187C71454C2465D",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2010-09-19"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-VS-0 PRG",
								"size": "128k",
								"crc": "C0EDEDD0",
								"sha1": "72AEF6054BF5E8B3301FEA396187C71454C2465D"
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
								"type": "3195A"
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
			"name": "Faster timer",
			"codes": [
				[
					"GEUGTTYA"
				]
			]
		},
		{
			"name": "Slower timer",
			"codes": [
				[
					"GOUGTTYA"
				]
			]
		},
		{
			"name": "Players can take only one punch",
			"codes": [
				[
					"PAXZLGIA"
				]
			]
		},
		{
			"name": "Player with puck doesn't slow down",
			"codes": [
				[
					"AAOSSAAZ"
				]
			]
		}
	]
};
