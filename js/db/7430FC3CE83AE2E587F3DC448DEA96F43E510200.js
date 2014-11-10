this.NesDb = this.NesDb || {};

NesDb[ '7430FC3CE83AE2E587F3DC448DEA96F43E510200' ] = {
	"$": {
		"name": "Terra Cresta",
		"altname": "テラクレスタ",
		"class": "Licensed",
		"catalog": "NBF-TC (03)",
		"publisher": "Nichibutsu",
		"developer": "Nichibutsu",
		"region": "Japan",
		"players": "2",
		"date": "1986-09-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "6D65CAC6",
				"sha1": "7430FC3CE83AE2E587F3DC448DEA96F43E510200",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-31"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-01",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NBF-TC-0 PRG",
								"size": "128k",
								"crc": "6D65CAC6",
								"sha1": "7430FC3CE83AE2E587F3DC448DEA96F43E510200"
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
								"h": "0",
								"v": "1"
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
					"SZKVPTVG"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AAKSPGZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IAKSPGZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AAKSPGZE"
				]
			]
		},
		{
			"name": "Infinite \"ship formation\" splits",
			"codes": [
				[
					"SXSTULVG"
				]
			]
		},
		{
			"name": "Indestructible!",
			"codes": [
				[
					"KTKSLGAZ"
				]
			]
		},
		{
			"name": "A secret mega-weapon",
			"codes": [
				[
					"AEVKNYLA"
				]
			]
		},
		{
			"name": "9 \"ship formation\" splits",
			"codes": [
				[
					"PEOTEALE",
					"PEKGETLE"
				]
			]
		}
	]
};
