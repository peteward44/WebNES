this.NesDb = this.NesDb || {};

NesDb[ 'DFE253487159220F1A0E293A63B7B5045626FD19' ] = {
	"$": {
		"name": "Athena",
		"altname": "アテナ",
		"class": "Licensed",
		"catalog": "SFX-AT",
		"publisher": "SNK",
		"developer": "SNK",
		"portdeveloper": "Micronics / Khaos",
		"region": "Japan",
		"players": "1",
		"date": "1987-06-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8BCDE59A",
				"sha1": "DFE253487159220F1A0E293A63B7B5045626FD19",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
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
								"name": "SFX-AT-0 PRG",
								"size": "128k",
								"crc": "8BCDE59A",
								"sha1": "DFE253487159220F1A0E293A63B7B5045626FD19"
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
			"name": "Start with 1 life",
			"codes": [
				[
					"AEKNLPZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IEKNLPZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEKNLPZE"
				]
			]
		},
		{
			"name": "Don't take any damage (after first 2 units)",
			"codes": [
				[
					"GZUZLISA"
				]
			]
		},
		{
			"name": "Start with energy boost",
			"codes": [
				[
					"AXKNYOGA"
				]
			]
		},
		{
			"name": "Freeze timer",
			"codes": [
				[
					"AAULLYPA"
				]
			]
		},
		{
			"name": "Start with extra time",
			"codes": [
				[
					"YASVAYIA"
				]
			]
		},
		{
			"name": "Start with less time",
			"codes": [
				[
					"GASVAYIA"
				]
			]
		}
	]
};
