this.NesDb = this.NesDb || {};

NesDb[ 'E5E04E9E56AC9F0B7079AB6286E2D3A0F2D12E05' ] = {
	"$": {
		"name": "Paperboy",
		"altname": "ペーパーボーイ",
		"class": "Licensed",
		"catalog": "ALT-7B",
		"publisher": "Altron",
		"developer": "Tengen",
		"region": "Japan",
		"players": "2",
		"date": "1991-01-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "2C043781",
				"sha1": "E5E04E9E56AC9F0B7079AB6286E2D3A0F2D12E05",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-02-07"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "CN-04B",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "C14FA6B6",
								"sha1": "F58E64DC04DB46BC165410C36B9BEC3A91902368"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "0BE52C9E",
								"sha1": "47B0170AF89FF38B4F0055CB6B350A3235287EDC"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SXSEVZVG"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PAUOEIGA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TAUOEIGA"
				]
			]
		},
		{
			"name": "Infinite papers",
			"codes": [
				[
					"OZNOKAVK"
				]
			]
		},
		{
			"name": "Start with 20 papers",
			"codes": [
				[
					"GOXAUOZA"
				]
			]
		},
		{
			"name": "Gain 20 papers on pick-up",
			"codes": [
				[
					"GPUONUZA"
				]
			]
		}
	]
};
