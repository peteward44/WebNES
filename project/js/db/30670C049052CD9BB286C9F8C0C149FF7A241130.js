this.NesDb = this.NesDb || {};

NesDb[ '30670C049052CD9BB286C9F8C0C149FF7A241130' ] = {
	"$": {
		"name": "Total Recall",
		"class": "Licensed",
		"catalog": "NES-L4-EEC",
		"publisher": "Acclaim",
		"developer": "Interplay",
		"region": "Europe",
		"players": "1",
		"date": "1991-03-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "FC3236D1",
				"sha1": "30670C049052CD9BB286C9F8C0C149FF7A241130",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-03-09"
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
								"name": "PAL-L4-0 PRG",
								"size": "128k",
								"crc": "FC3236D1",
								"sha1": "30670C049052CD9BB286C9F8C0C149FF7A241130"
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
			"name": "Infinite energy!",
			"codes": [
				[
					"AVNVOAKZ"
				]
			]
		},
		{
			"name": "Most enemies easier to kill",
			"codes": [
				[
					"GXUIIXSO"
				]
			]
		},
		{
			"name": "Take less damage",
			"codes": [
				[
					"PENVKEGE"
				]
			]
		},
		{
			"name": "Gain maximum energy from canisters",
			"codes": [
				[
					"XYUVNUXT"
				]
			]
		},
		{
			"name": "Start with less energy",
			"codes": [
				[
					"OZNKEPSX",
					"ALNKOOLZ"
				]
			]
		},
		{
			"name": "Start with more energy",
			"codes": [
				[
					"OZNKEPSX",
					"NYNKOOLX"
				]
			]
		}
	]
};
