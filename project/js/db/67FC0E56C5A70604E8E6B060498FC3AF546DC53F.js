this.NesDb = this.NesDb || {};

NesDb[ '67FC0E56C5A70604E8E6B060498FC3AF546DC53F' ] = {
	"$": {
		"name": "Starship Hector",
		"class": "Licensed",
		"catalog": "NES-HH-USA",
		"publisher": "Hudson Soft",
		"developer": "Hudson Soft",
		"region": "USA",
		"players": "1",
		"date": "1990-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "9F432594",
				"sha1": "67FC0E56C5A70604E8E6B060498FC3AF546DC53F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-02"
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
								"name": "NES-HH-0 PRG",
								"size": "128k",
								"crc": "9F432594",
								"sha1": "67FC0E56C5A70604E8E6B060498FC3AF546DC53F"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SZKIOGVG"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AANSOGZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IANSOGZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AANSOGZE"
				]
			]
		},
		{
			"name": "Extra energy from capsules",
			"codes": [
				[
					"GEVVGIPA"
				]
			]
		},
		{
			"name": "Start at stage 2",
			"codes": [
				[
					"PENYGIAA"
				]
			]
		},
		{
			"name": "Start at stage 3",
			"codes": [
				[
					"ZENYGIAA"
				]
			]
		},
		{
			"name": "Start at stage 4",
			"codes": [
				[
					"LENYGIAA"
				]
			]
		},
		{
			"name": "Start at stage 5",
			"codes": [
				[
					"GENYGIAA"
				]
			]
		},
		{
			"name": "Take minimum damage",
			"codes": [
				[
					"OVUYEGSV",
					"PEUYOGTA"
				]
			]
		}
	]
};
