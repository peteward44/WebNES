this.NesDb = this.NesDb || {};

NesDb[ 'B5EB3572FCA1FB005BA00C45EEBAA9754C3FA4CB' ] = {
	"$": {
		"name": "Rad Racer",
		"class": "Licensed",
		"catalog": "NES-RC-CAN",
		"publisher": "Nintendo",
		"developer": "Square",
		"region": "Canada",
		"players": "1",
		"date": "1988-01-19"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "3dglasses",
						"name": "3-D Glasses"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "8B9D3E9C",
				"sha1": "B5EB3572FCA1FB005BA00C45EEBAA9754C3FA4CB",
				"dump": "ok",
				"dumper": "_zane",
				"datedumped": "2007-12-30"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-RC-0 PRG",
								"size": "128k",
								"crc": "8B9D3E9C",
								"sha1": "B5EB3572FCA1FB005BA00C45EEBAA9754C3FA4CB"
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
								"type": "MMC1A"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Less time to finish each stage",
			"codes": [
				[
					"GZXIUVIZ"
				]
			]
		},
		{
			"name": "More time to finish each stage",
			"codes": [
				[
					"GLXIUVIX"
				]
			]
		},
		{
			"name": "Turbo acceleration",
			"codes": [
				[
					"ALXGAIAA"
				]
			]
		},
		{
			"name": "Super Turbo acceleration",
			"codes": [
				[
					"YYUKGIAU"
				]
			]
		},
		{
			"name": "Ultra Turbo acceleration",
			"codes": [
				[
					"PEEGPIAA"
				]
			]
		},
		{
			"name": "Start at stage 2",
			"codes": [
				[
					"PAXKPAAA",
					"GXKGKTSA"
				]
			]
		},
		{
			"name": "Start at stage 3",
			"codes": [
				[
					"ZAXKPAAA",
					"GXKGKTSA"
				]
			]
		},
		{
			"name": "Start at stage 4",
			"codes": [
				[
					"LAXKPAAA",
					"GXKGKTSA"
				]
			]
		},
		{
			"name": "Start at stage 5",
			"codes": [
				[
					"GAXKPAAA",
					"GXKGKTSA"
				]
			]
		},
		{
			"name": "Start at stage 6",
			"codes": [
				[
					"IAXKPAAA",
					"GXKGKTSA"
				]
			]
		}
	]
};
