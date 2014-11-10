this.NesDb = this.NesDb || {};

NesDb[ 'E886869F2E50BED902133A3DDB8FD7E7853002EF' ] = {
	"$": {
		"name": "Immortal, Will Harvey Presents The",
		"class": "Licensed",
		"catalog": "NES-E8-USA",
		"publisher": "Electronic Arts",
		"developer": "Will Harvey",
		"region": "USA",
		"players": "1",
		"date": "1990-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "8889C564",
				"sha1": "E886869F2E50BED902133A3DDB8FD7E7853002EF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-07"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-E8-0 PRG",
								"size": "128k",
								"crc": "9BA777E1",
								"sha1": "C1E9429B9F9ADA1BF548F397AB6E1FA0729BD054"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-E8-0 CHR",
								"size": "256k",
								"crc": "080FE8EC",
								"sha1": "02713834525A4CD53DC4F1DD65B113061B31CB11"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
			"name": "Enemy's fatigue level doesn't go down",
			"codes": [
				[
					"GZOLIXVK"
				]
			]
		},
		{
			"name": "Your fatigue level doesn't go down",
			"codes": [
				[
					"GZOUIXVK"
				]
			]
		},
		{
			"name": "Your fatigue level goes down faster",
			"codes": [
				[
					"YLEUIXYN"
				]
			]
		},
		{
			"name": "Your fatigue level goes down slower",
			"codes": [
				[
					"NYEUIXYN"
				]
			]
		},
		{
			"name": "Don't lose energy from fighting!",
			"codes": [
				[
					"SZSLTXVK"
				]
			]
		},
		{
			"name": "Your fatigue level never rises",
			"codes": [
				[
					"SZNLPXVV"
				]
			]
		},
		{
			"name": "More damage from fireballs",
			"codes": [
				[
					"ZAKSIYPA"
				]
			]
		}
	]
};
