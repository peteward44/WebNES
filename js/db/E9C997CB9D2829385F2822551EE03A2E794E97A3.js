this.NesDb = this.NesDb || {};

NesDb[ 'E9C997CB9D2829385F2822551EE03A2E794E97A3' ] = {
	"$": {
		"name": "Stunt Kids",
		"class": "Unlicensed",
		"catalog": "CAM-SK",
		"publisher": "Camerica",
		"developer": "Codemasters",
		"region": "USA",
		"players": "2",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "3A990EE0",
				"sha1": "E9C997CB9D2829385F2822551EE03A2E794E97A3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-11-05"
			},
			"board": [
				{
					"$": {
						"type": "CAMERICA-BF9093",
						"pcb": "BIC-48",
						"mapper": "71"
					},
					"prg": [
						{
							"$": {
								"name": "ICROS 74090-SK",
								"size": "128k",
								"crc": "3A990EE0",
								"sha1": "E9C997CB9D2829385F2822551EE03A2E794E97A3"
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
								"type": "BF9093"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
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
			"name": "Start with 1 life instead of 3",
			"codes": [
				[
					"AESGNZZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IESGNZZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PESGNZZE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SZSZSKVK"
				]
			]
		},
		{
			"name": "Start with 0 turbos instead of 3",
			"codes": [
				[
					"AEESPALA"
				]
			]
		},
		{
			"name": "Start with 6 turbos",
			"codes": [
				[
					"TEESPALA"
				]
			]
		},
		{
			"name": "Start with 9 turbos",
			"codes": [
				[
					"PEESPALE"
				]
			]
		},
		{
			"name": "Always have 9 coins after a race",
			"codes": [
				[
					"VANILVKE"
				]
			]
		},
		{
			"name": "Coins worth nothing on pick up",
			"codes": [
				[
					"SZKOEOVV"
				]
			]
		},
		{
			"name": "Infinite time--player 1",
			"codes": [
				[
					"SLNOYXVS"
				]
			]
		},
		{
			"name": "Infinite time--player 2",
			"codes": [
				[
					"SLXOYUVS"
				]
			]
		}
	]
};
