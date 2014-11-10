this.NesDb = this.NesDb || {};

NesDb[ 'B5691E6297AE8A2557DD35E53E08AFFA8BA22C66' ] = {
	"$": {
		"name": "Terra Cresta",
		"class": "Licensed",
		"catalog": "NES-TQ-USA",
		"publisher": "Vic Tokai",
		"developer": "Nichibutsu",
		"region": "USA",
		"players": "2",
		"date": "1990-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2A46B57F",
				"sha1": "B5691E6297AE8A2557DD35E53E08AFFA8BA22C66",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
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
								"name": "NES-TQ-0 PRG",
								"size": "128k",
								"crc": "2A46B57F",
								"sha1": "B5691E6297AE8A2557DD35E53E08AFFA8BA22C66"
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
