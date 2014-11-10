this.NesDb = this.NesDb || {};

NesDb[ '8A49FE60B6A151C055A63639894CD366935A7EE9' ] = {
	"$": {
		"name": "Crystalis",
		"class": "Licensed",
		"catalog": "NES-G0-USA",
		"publisher": "SNK",
		"developer": "SNK",
		"region": "USA",
		"players": "1",
		"date": "1990-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "1335CB05",
				"sha1": "8A49FE60B6A151C055A63639894CD366935A7EE9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-17"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-G0-0 PRG",
								"size": "256k",
								"crc": "630BE870",
								"sha1": "F06B5725AC276B37BB578DD9D1B3EEE67E5D38BD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-G0-0 CHR",
								"size": "128k",
								"crc": "864F0C1B",
								"sha1": "3C292D865C06A884609B1ABE61CFDEC8CB428B3D"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
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
			"name": "Start with some gold",
			"codes": [
				[
					"VVOGUOSE"
				]
			]
		},
		{
			"name": "First pupil gives you more gold",
			"codes": [
				[
					"NYVSPZGV"
				]
			]
		},
		{
			"name": "Magic doesn't use up M.P.",
			"codes": [
				[
					"SXNOVXSE"
				]
			]
		},
		{
			"name": "Immune to poison",
			"codes": [
				[
					"AASVVNYA"
				]
			]
		},
		{
			"name": "Immune to paralysis",
			"codes": [
				[
					"AEKTSNYA"
				]
			]
		},
		{
			"name": "Stronger poison",
			"codes": [
				[
					"TEOTVYGA"
				]
			]
		},
		{
			"name": "Weaker poison",
			"codes": [
				[
					"ZEOTVYGA"
				]
			]
		},
		{
			"name": "Don't get charged for boarding at Inn",
			"codes": [
				[
					"SZUOIVSE",
					"SZKPLVSE"
				]
			]
		},
		{
			"name": "Don't get charged for items in shops",
			"codes": [
				[
					"SXVPUOSE",
					"SXVOOOSE"
				]
			]
		}
	]
};
