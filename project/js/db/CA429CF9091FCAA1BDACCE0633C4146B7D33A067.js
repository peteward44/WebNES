this.NesDb = this.NesDb || {};

NesDb[ 'CA429CF9091FCAA1BDACCE0633C4146B7D33A067' ] = {
	"$": {
		"name": "Airwolf",
		"altname": "エアーウルフ",
		"class": "Licensed",
		"catalog": "KYG-AX",
		"publisher": "Kyugo Boueki",
		"developer": "Shimada Kikaku",
		"region": "Japan",
		"players": "1",
		"date": "1988-12-24"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "FB8A9B80",
				"sha1": "CA429CF9091FCAA1BDACCE0633C4146B7D33A067",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-16"
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
								"name": "KYG-AX-0 PRG",
								"size": "128k",
								"crc": "5CB41FED",
								"sha1": "6DBB4048918D5DA4B0E21290B7F4854152616342"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KYG-AX-0 CHR",
								"size": "128k",
								"crc": "69CE0950",
								"sha1": "EA10D086AFE4F527CB589751791A9126808CBEE7"
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
