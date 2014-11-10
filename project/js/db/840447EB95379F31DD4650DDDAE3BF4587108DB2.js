this.NesDb = this.NesDb || {};

NesDb[ '840447EB95379F31DD4650DDDAE3BF4587108DB2' ] = {
	"$": {
		"name": "Airwolf",
		"class": "Licensed",
		"catalog": "NES-AF-USA",
		"publisher": "Acclaim",
		"developer": "Imagineering",
		"region": "USA",
		"players": "1",
		"date": "1989-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "489EF6A2",
				"sha1": "840447EB95379F31DD4650DDDAE3BF4587108DB2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-08"
			},
			"board": [
				{
					"$": {
						"type": "NES-SH1ROM",
						"pcb": "NES-SH1ROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-AF-0 PRG",
								"size": "32k",
								"crc": "AA174BC6",
								"sha1": "A9A8083A26F70F9AD4CB9095045AB1BE75F6567B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-AF-0 CHR",
								"size": "128k",
								"crc": "BCC72636",
								"sha1": "12AA2068A55F8786515A0952B44825E1DB5E1E59"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
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
			"name": "Start with 1 life",
			"codes": [
				[
					"PAUGVILA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TAUGVILA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PAUGVILE"
				]
			]
		},
		{
			"name": "Start at last mission reached",
			"codes": [
				[
					"PVXKKKLI"
				]
			]
		},
		{
			"name": "Start with 30 missiles",
			"codes": [
				[
					"TPVAPXYE"
				]
			]
		},
		{
			"name": "Start with 45 missiles",
			"codes": [
				[
					"IZVAPXYE"
				]
			]
		},
		{
			"name": "Start with infinite missiles",
			"codes": [
				[
					"GXSZAPVG"
				]
			]
		},
		{
			"name": "Sets missiles to 5 when you refuel",
			"codes": [
				[
					"IEVAISYA"
				]
			]
		},
		{
			"name": "Sets missiles to 30 when you refuel",
			"codes": [
				[
					"TOVAISYE"
				]
			]
		}
	]
};
