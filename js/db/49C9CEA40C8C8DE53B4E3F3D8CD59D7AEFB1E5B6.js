this.NesDb = this.NesDb || {};

NesDb[ '49C9CEA40C8C8DE53B4E3F3D8CD59D7AEFB1E5B6' ] = {
	"$": {
		"name": "Sqoon",
		"altname": "スクーン",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "IF-04",
		"publisher": "Irem",
		"developer": "Home Data",
		"region": "Japan",
		"players": "1",
		"date": "1986-06-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "4DFD949E",
				"sha1": "49C9CEA40C8C8DE53B4E3F3D8CD59D7AEFB1E5B6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-28"
			},
			"board": [
				{
					"$": {
						"type": "IREM-NROM-256",
						"pcb": "IREM-01-H",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "C4482B58",
								"sha1": "1C8CCFE4FFCB247C7A0D24B8B98F7426EDF4EDA5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "8k",
								"crc": "846C2BA4",
								"sha1": "34FCB740F0C8DF72E672619B2F412880FD7095DC"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
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
					"AEEAAIPA"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AEUESLZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IEUESLZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEUESLZE"
				]
			]
		},
		{
			"name": "Start at phase 3",
			"codes": [
				[
					"LASEXLPA"
				]
			]
		},
		{
			"name": "Start at phase 5",
			"codes": [
				[
					"IASEXLPA"
				]
			]
		},
		{
			"name": "Start at phase 8",
			"codes": [
				[
					"AASEXLPE"
				]
			]
		},
		{
			"name": "Never lose your special weapon",
			"codes": [
				[
					"SZEEOSVK"
				]
			]
		},
		{
			"name": "Gain main weapon on rescuing 9 humans",
			"codes": [
				[
					"ZEOOEYPA"
				]
			]
		},
		{
			"name": "Never lose humans on dying",
			"codes": [
				[
					"GXEAKKSE",
					"GXSUZXSE"
				]
			]
		}
	]
};
