this.NesDb = this.NesDb || {};

NesDb[ 'E8079FCA43A14A78D97EDF90DEFD4E822D4ECB8C' ] = {
	"$": {
		"name": "Felix the Cat",
		"class": "Licensed",
		"catalog": "NES-FC-FRA",
		"publisher": "Hudson Soft",
		"developer": "Shimada Kikaku",
		"region": "France",
		"players": "1",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "FBD48274",
				"sha1": "E8079FCA43A14A78D97EDF90DEFD4E822D4ECB8C",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2007-02-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-08",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-FC-0 PRG",
								"size": "128k",
								"crc": "DC549BD3",
								"sha1": "B77D5956303DE39773017C99ED5CEE441B8494F2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-FC-0 CHR",
								"size": "128k",
								"crc": "60171742",
								"sha1": "936DB96102F5D2306C80C584D154E3D928B01363"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"APUGAGZO"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IPUGAGZP"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"APUGAGZP"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"AEUYKPPA"
				]
			]
		},
		{
			"name": "Hearts can't be replenished from bottles",
			"codes": [
				[
					"AAEENAZA"
				]
			]
		},
		{
			"name": "Bottles replenish more hearts",
			"codes": [
				[
					"GAEENAZA"
				]
			]
		},
		{
			"name": "Bottles replenish even more hearts",
			"codes": [
				[
					"AAEENAZE"
				]
			]
		},
		{
			"name": "Never lose current weapon + Invincible",
			"codes": [
				[
					"GZUKOSVK"
				]
			]
		},
		{
			"name": "Pick up 1 head and get 2!",
			"codes": [
				[
					"ZAOSOZPA",
					"APNSOXPO"
				]
			]
		}
	]
};
