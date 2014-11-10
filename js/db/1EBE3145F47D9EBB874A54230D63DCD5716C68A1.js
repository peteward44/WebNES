this.NesDb = this.NesDb || {};

NesDb[ '1EBE3145F47D9EBB874A54230D63DCD5716C68A1' ] = {
	"$": {
		"name": "Freedom Force",
		"class": "Licensed",
		"catalog": "NES-FE-USA",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "USA",
		"players": "1",
		"date": "1988-04"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "zapper",
						"name": "Zapper Light Gun"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "3E58A87E",
				"sha1": "1EBE3145F47D9EBB874A54230D63DCD5716C68A1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-30"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-FE-0 PRG",
								"size": "128k",
								"crc": "59E3343F",
								"sha1": "A7796BBFD442DE7784C7028A1C52101DB35BEE30"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-FE-0 CHR",
								"size": "128k",
								"crc": "8CB86BAE",
								"sha1": "55BABAA4C39680F5590F3256C982382D90FCBD2E"
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
			"name": "Start with half ammo",
			"codes": [
				[
					"ZOOTYTGZ"
				]
			]
		},
		{
			"name": "Infinite ammo",
			"codes": [
				[
					"AEUTLYZZ"
				]
			]
		},
		{
			"name": "Fewer errors allowed",
			"codes": [
				[
					"LEOVAYTA"
				]
			]
		},
		{
			"name": "Infinite errors allowed",
			"codes": [
				[
					"OXOTYNOK"
				]
			]
		},
		{
			"name": "Start at level 2",
			"codes": [
				[
					"ZAUTLTPA"
				]
			]
		},
		{
			"name": "Start at level 3",
			"codes": [
				[
					"LAUTLTPA"
				]
			]
		},
		{
			"name": "Start at level 4",
			"codes": [
				[
					"GAUTLTPA"
				]
			]
		},
		{
			"name": "Start at level 5",
			"codes": [
				[
					"IAUTLTPA"
				]
			]
		},
		{
			"name": "Start with half health",
			"codes": [
				[
					"GAKVYVAO"
				]
			]
		},
		{
			"name": "Infinite health",
			"codes": [
				[
					"GZVAYLSA"
				]
			]
		}
	]
};
