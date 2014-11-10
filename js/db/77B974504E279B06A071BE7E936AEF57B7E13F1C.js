this.NesDb = this.NesDb || {};

NesDb[ '77B974504E279B06A071BE7E936AEF57B7E13F1C' ] = {
	"$": {
		"name": "Metal Gear",
		"altname": "メタルギア",
		"class": "Licensed",
		"catalog": "KDS-ME",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1987-12-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "805F81BC",
				"sha1": "77B974504E279B06A071BE7E936AEF57B7E13F1C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-UNROM",
						"pcb": "350489",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "RC824J0P",
								"size": "128k",
								"crc": "805F81BC",
								"sha1": "77B974504E279B06A071BE7E936AEF57B7E13F1C"
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
	],
	"gameGenieCodes": [
		{
			"name": "Don't take hits from bullets",
			"codes": [
				[
					"SZUYPZVG"
				]
			]
		},
		{
			"name": "No hits taken in hand-to-hand fights",
			"codes": [
				[
					"SXVTXZVG"
				]
			]
		},
		{
			"name": "Mystery location 1",
			"codes": [
				[
					"ZASILYPA"
				]
			]
		},
		{
			"name": "Mystery location 2",
			"codes": [
				[
					"GASILYPA"
				]
			]
		},
		{
			"name": "Start with an energy boost",
			"codes": [
				[
					"XZVSAYVZ",
					"PAVSPNTT",
					"AEKSZYIE"
				]
			]
		},
		{
			"name": "Start with a super energy boost",
			"codes": [
				[
					"XZVSAYVZ",
					"PAVSPNTT",
					"GEKSZYIE"
				]
			]
		}
	]
};
