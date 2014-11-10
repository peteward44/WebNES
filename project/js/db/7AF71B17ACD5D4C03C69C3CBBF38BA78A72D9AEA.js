this.NesDb = this.NesDb || {};

NesDb[ '7AF71B17ACD5D4C03C69C3CBBF38BA78A72D9AEA' ] = {
	"$": {
		"name": "Ide Yousuke Meijin no Jissen Mahjong",
		"altname": "井出洋介名人の実戦麻雀",
		"class": "Licensed",
		"catalog": "CAP-IM",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "1",
		"date": "1987-09-24"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "mahjong",
						"name": "Mahjong Controller"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "9FAE4D46",
				"sha1": "7AF71B17ACD5D4C03C69C3CBBF38BA78A72D9AEA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-15"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-03",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "CAP-IM-1 PRG",
								"size": "128k",
								"crc": "9FAE4D46",
								"sha1": "7AF71B17ACD5D4C03C69C3CBBF38BA78A72D9AEA"
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
		},
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "9FAE4D46",
				"sha1": "7AF71B17ACD5D4C03C69C3CBBF38BA78A72D9AEA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-20"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "CAP-IM-1 PRG",
								"size": "128k",
								"crc": "9FAE4D46",
								"sha1": "7AF71B17ACD5D4C03C69C3CBBF38BA78A72D9AEA"
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
	]
};
