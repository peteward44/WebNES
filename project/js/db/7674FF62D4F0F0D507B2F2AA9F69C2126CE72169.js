this.NesDb = this.NesDb || {};

NesDb[ '7674FF62D4F0F0D507B2F2AA9F69C2126CE72169' ] = {
	"$": {
		"name": "Raid on Bungeling Bay",
		"altname": "バンゲリング ベイ",
		"class": "Licensed",
		"catalog": "HFC-RB",
		"publisher": "Hudson Soft",
		"developer": "Will Wright",
		"portdeveloper": "Hudson Soft",
		"region": "Japan",
		"players": "2",
		"date": "1985-02-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "A547A6EC",
				"sha1": "7674FF62D4F0F0D507B2F2AA9F69C2126CE72169",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-31"
			},
			"board": [
				{
					"$": {
						"type": "HVC-NROM-128",
						"pcb": "HVC-NROM-02",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-RB-1 PRG",
								"size": "16k",
								"crc": "87B2A02C",
								"sha1": "F8E5DB37B777A828AC54FE45C359A5B4F337B380"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-RB-0 CHR",
								"size": "8k",
								"crc": "E4D3B716",
								"sha1": "44290DB0DC1EEC4315473AE1F3F27659CD817149"
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
			"name": "Start with 9 lives",
			"codes": [
				[
					"PENGZYIE"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PENGZYIA"
				]
			]
		},
		{
			"name": "Infinite bombs",
			"codes": [
				[
					"SXSIASVK"
				]
			]
		},
		{
			"name": "Take no damage from anything",
			"codes": [
				[
					"SXVVPIAX"
				]
			]
		},
		{
			"name": "Start on round 3",
			"codes": [
				[
					"LEVKTYPA"
				]
			]
		},
		{
			"name": "Start on round 6",
			"codes": [
				[
					"TEVKTYPA"
				]
			]
		},
		{
			"name": "Start on round 9",
			"codes": [
				[
					"PEVKTYPE"
				]
			]
		},
		{
			"name": "You can only carry 5 bombs",
			"codes": [
				[
					"AZOIIEGX"
				]
			]
		}
	]
};
