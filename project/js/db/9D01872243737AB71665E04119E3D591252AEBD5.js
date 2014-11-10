this.NesDb = this.NesDb || {};

NesDb[ '9D01872243737AB71665E04119E3D591252AEBD5' ] = {
	"$": {
		"name": "Predator",
		"altname": "プレデター",
		"class": "Licensed",
		"catalog": "PAC-PL",
		"publisher": "Pack-In-Video",
		"developer": "KLON",
		"region": "Japan",
		"players": "1",
		"date": "1988-03-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "4ED3C6F1",
				"sha1": "9D01872243737AB71665E04119E3D591252AEBD5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAC-PL-0 PRG",
								"size": "128k",
								"crc": "FE37B30D",
								"sha1": "16A7498236AC87C6BC13EDF1D35F1AD4BD3B9855"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAC-PL-0 CHR",
								"size": "128k",
								"crc": "DD7B0414",
								"sha1": "94D32ACCB556299F7E7FED40E4989FE8CBEFF94C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Infinite lives in jungle mode",
			"codes": [
				[
					"SZNGGXVK"
				]
			]
		},
		{
			"name": "Infinite lives in big mode",
			"codes": [
				[
					"SXXGZOVK"
				]
			]
		},
		{
			"name": "Start with double lives",
			"codes": [
				[
					"AAVKGPGE"
				]
			]
		},
		{
			"name": "Infinite life points in jungle mode",
			"codes": [
				[
					"AVUGVGSA"
				]
			]
		},
		{
			"name": "Mega-jumps in jungle mode",
			"codes": [
				[
					"AEOETOPE"
				]
			]
		},
		{
			"name": "Don't die if you fall down holes",
			"codes": [
				[
					"NTEENEGE",
					"ATOAEEOZ"
				]
			]
		},
		{
			"name": "Start each life with laser rifle",
			"codes": [
				[
					"LASEOELA",
					"XLSEUEVX"
				]
			]
		}
	]
};
