this.NesDb = this.NesDb || {};

NesDb[ '51CBA10AE65105F1FBEAF00994244C5402878840' ] = {
	"$": {
		"name": "Thunderbirds",
		"altname": "サンダーバード",
		"class": "Licensed",
		"catalog": "PAC-T5",
		"publisher": "Pack-In-Video",
		"developer": "Pack-In-Video",
		"region": "Japan",
		"players": "1",
		"date": "1989-09-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "7B72FBA4",
				"sha1": "51CBA10AE65105F1FBEAF00994244C5402878840",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-27"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAC-T5-0 PRG",
								"size": "128k",
								"crc": "E9BC16FF",
								"sha1": "5D76F115F5865940359759E8A21C24BA1AB049BF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAC-T5-0 CHR",
								"size": "128k",
								"crc": "757D3DF5",
								"sha1": "971774CC60F36C05658B9734FB945D1A26496AE3"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Don't lose life points when colliding with enemy",
			"codes": [
				[
					"SXNTOVVK"
				]
			]
		},
		{
			"name": "Don't lose life points when hit",
			"codes": [
				[
					"SZUVUNVK"
				]
			]
		},
		{
			"name": "Don't lose energy points when colliding with enemy",
			"codes": [
				[
					"SXNVVVVK"
				]
			]
		},
		{
			"name": "Don't lose energy points when hit",
			"codes": [
				[
					"SZKVENVK"
				]
			]
		},
		{
			"name": "81 Days to defeat Hood",
			"codes": [
				[
					"PSEKIVGL"
				]
			]
		},
		{
			"name": "30 Days to defeat Hood",
			"codes": [
				[
					"TOEKIVGU"
				]
			]
		},
		{
			"name": "Limited forward movement",
			"codes": [
				[
					"ATXEANAA",
					"ATXEGNAA"
				]
			]
		},
		{
			"name": "Faster craft",
			"codes": [
				[
					"GEXETTZA",
					"GEXEZTZA"
				]
			]
		},
		{
			"name": "Full firepower on first pick up",
			"codes": [
				[
					"EZUAETEG",
					"XTUAKVEK"
				]
			]
		}
	]
};
