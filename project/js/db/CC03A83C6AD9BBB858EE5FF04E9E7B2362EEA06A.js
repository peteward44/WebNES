this.NesDb = this.NesDb || {};

NesDb[ 'CC03A83C6AD9BBB858EE5FF04E9E7B2362EEA06A' ] = {
	"$": {
		"name": "Felix the Cat",
		"class": "Licensed",
		"catalog": "NES-FC-USA",
		"publisher": "Hudson Soft",
		"developer": "Shimada Kikaku",
		"region": "USA",
		"players": "1",
		"date": "1992-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2CAAE01C",
				"sha1": "CC03A83C6AD9BBB858EE5FF04E9E7B2362EEA06A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-23"
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
								"name": "NES-FC-0 PRG",
								"size": "128k",
								"crc": "F7E84558",
								"sha1": "32C513C4BF48824971860457BDAF5C15C88E0714"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-FC-0 CHR",
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
								"type": "6113B1"
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
