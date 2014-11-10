this.NesDb = this.NesDb || {};

NesDb[ 'EBA237B45A775D4ACB2DD7CDF2B8CD3489D571D3' ] = {
	"$": {
		"name": "Kickle Cubicle",
		"class": "Licensed",
		"catalog": "NES-QC-USA",
		"publisher": "Irem",
		"developer": "Irem",
		"region": "USA",
		"players": "1",
		"date": "1990-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "CD10DCE2",
				"sha1": "EBA237B45A775D4ACB2DD7CDF2B8CD3489D571D3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-25"
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
								"name": "NES-QC-0 PRG",
								"size": "128k",
								"crc": "A8B0CFCE",
								"sha1": "C9A4B897D8C0EC4B7EB0A2CB2B977979C9F12FA2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-QC-0 CHR",
								"size": "128k",
								"crc": "7B8A4209",
								"sha1": "4D26ED36C2233B0321E63233A2761A4DD2602ACF"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SXEAATVG"
				]
			]
		},
		{
			"name": "Stop timer",
			"codes": [
				[
					"SXNGSVVK"
				]
			]
		},
		{
			"name": "Faster timer",
			"codes": [
				[
					"YENKXVZA"
				]
			]
		},
		{
			"name": "Slower timer",
			"codes": [
				[
					"YENKXVZE"
				]
			]
		},
		{
			"name": "Start on land 2",
			"codes": [
				[
					"GZKATXSE",
					"GZUISOSE",
					"PAUIOPAA"
				]
			]
		},
		{
			"name": "Start on land 3",
			"codes": [
				[
					"GZKATXSE",
					"GZUISOSE",
					"ZAUIOPAA"
				]
			]
		},
		{
			"name": "Start on land 4",
			"codes": [
				[
					"GZKATXSE",
					"GZUISOSE",
					"LAUIOPAA"
				]
			]
		}
	]
};
