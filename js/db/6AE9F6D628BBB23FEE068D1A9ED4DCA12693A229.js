this.NesDb = this.NesDb || {};

NesDb[ '6AE9F6D628BBB23FEE068D1A9ED4DCA12693A229' ] = {
	"$": {
		"name": "Elevator Action",
		"altname": "エレベーターアクション",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-EA-4900-04",
		"publisher": "Taito",
		"developer": "Taito",
		"portdeveloper": "Micronics / Khaos",
		"region": "Japan",
		"players": "2",
		"date": "1985-06-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "FCDACA80",
				"sha1": "6AE9F6D628BBB23FEE068D1A9ED4DCA12693A229",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-02-17"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-NROM-256",
						"pcb": "FC008",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "ELEVATORACTION",
								"size": "32k",
								"crc": "A6DE7024",
								"sha1": "2070D3241F5F29DE74B004C9A6237CEC17951F9A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "ELEVATORACTION",
								"size": "8k",
								"crc": "FAC01D0F",
								"sha1": "F4C30BB45E92398088BAABAB04BC5650066781FC"
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
			"name": "Player 1 has infinite lives",
			"codes": [
				[
					"GXEUOUVK"
				]
			]
		},
		{
			"name": "Player 1 starts with 1 life",
			"codes": [
				[
					"AAULNLZA"
				]
			]
		},
		{
			"name": "Player 1 starts with 6 lives",
			"codes": [
				[
					"IAULNLZA"
				]
			]
		},
		{
			"name": "Player 1 starts with 9 lives",
			"codes": [
				[
					"AAULNLZE"
				]
			]
		},
		{
			"name": "Player 2 starts with 6 lives",
			"codes": [
				[
					"IEVUULZA"
				]
			]
		},
		{
			"name": "Player 2 starts with 9 lives",
			"codes": [
				[
					"AEVUULZE"
				]
			]
		},
		{
			"name": "Can only shoot one bullet",
			"codes": [
				[
					"GASTLPTA"
				]
			]
		},
		{
			"name": "Slower man",
			"codes": [
				[
					"PESIAYLA",
					"NNUSZNSN"
				]
			]
		},
		{
			"name": "Faster man",
			"codes": [
				[
					"IESIAYLA",
					"XNUSZNSN"
				]
			]
		},
		{
			"name": "Faster bullets",
			"codes": [
				[
					"ZAVTLOAE",
					"VYVTYOEY"
				]
			]
		},
		{
			"name": "Slower bullets",
			"codes": [
				[
					"GAVTLOAA",
					"KYVTYOEN"
				]
			]
		},
		{
			"name": "Faster enemy",
			"codes": [
				[
					"GEONGPZA",
					"XNXNGOVN"
				]
			]
		},
		{
			"name": "Slower enemy",
			"codes": [
				[
					"PEONGPZA",
					"NNXNGOVN"
				]
			]
		}
	]
};
