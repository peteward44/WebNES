this.NesDb = this.NesDb || {};

NesDb[ '9DC360FA868D61FF1AEAF39A41E43B93157B317E' ] = {
	"$": {
		"name": "Silent Service",
		"class": "Licensed",
		"catalog": "NES-IV-USA",
		"publisher": "Ultra Games",
		"developer": "Rare",
		"region": "USA",
		"players": "1",
		"date": "1989-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "B843EB84",
				"sha1": "9DC360FA868D61FF1AEAF39A41E43B93157B317E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-29"
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
								"name": "NES-IV-1 PRG",
								"size": "128k",
								"crc": "B843EB84",
								"sha1": "9DC360FA868D61FF1AEAF39A41E43B93157B317E"
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
								"type": "6113B1"
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
			"name": "Start with 50 deck gun shells",
			"codes": [
				[
					"ZLEPOIAI"
				]
			]
		},
		{
			"name": "Start with 99 deck gun shells",
			"codes": [
				[
					"LTEPOIAI"
				]
			]
		},
		{
			"name": "Infinite deck gun shells",
			"codes": [
				[
					"SZXVOPVG"
				]
			]
		},
		{
			"name": "Infinite bow torpedoes",
			"codes": [
				[
					"SZSVUPVG"
				]
			]
		},
		{
			"name": "Infinite aft torpedoes",
			"codes": [
				[
					"SXETUPVG"
				]
			]
		}
	]
};
