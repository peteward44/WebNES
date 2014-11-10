this.NesDb = this.NesDb || {};

NesDb[ '1DF12A7B72F3D2A0C506216ACF8ACC0A81B923F7' ] = {
	"$": {
		"name": "Strider",
		"class": "Licensed",
		"catalog": "NES-HX-USA",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "USA",
		"players": "1",
		"date": "1989-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "02EE3706",
				"sha1": "1DF12A7B72F3D2A0C506216ACF8ACC0A81B923F7",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2007-02-11"
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
								"name": "NES-HX-0 PRG",
								"size": "256k",
								"crc": "02EE3706",
								"sha1": "1DF12A7B72F3D2A0C506216ACF8ACC0A81B923F7"
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
								"type": "MMC1B2"
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "02EE3706",
				"sha1": "1DF12A7B72F3D2A0C506216ACF8ACC0A81B923F7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-27"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-HX-0 PRG",
								"size": "256k",
								"crc": "02EE3706",
								"sha1": "1DF12A7B72F3D2A0C506216ACF8ACC0A81B923F7"
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
								"type": "MMC1B2"
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
			"name": "More energy from small capsules (10)",
			"codes": [
				[
					"ZAUXEYPE"
				]
			]
		},
		{
			"name": "More energy from big capsules (20)",
			"codes": [
				[
					"GPUXXNZA"
				]
			]
		},
		{
			"name": "Health from small capsules (10)",
			"codes": [
				[
					"ZAUXKYPE"
				]
			]
		},
		{
			"name": "Health from big capsules (20)",
			"codes": [
				[
					"GPUXVNZA"
				]
			]
		},
		{
			"name": "Double health and energy from all capsules",
			"codes": [
				[
					"ZAEXVNAO"
				]
			]
		}
	]
};
