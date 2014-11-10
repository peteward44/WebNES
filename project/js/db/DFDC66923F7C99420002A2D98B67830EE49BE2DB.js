this.NesDb = this.NesDb || {};

NesDb[ 'DFDC66923F7C99420002A2D98B67830EE49BE2DB' ] = {
	"$": {
		"name": "Operation Wolf",
		"altname": "オペレーションウルフ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-OW-5900-24",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "Japan",
		"players": "1",
		"date": "1989-03-31"
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
				"system": "Famicom",
				"crc": "2A6559A1",
				"sha1": "DFDC66923F7C99420002A2D98B67830EE49BE2DB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-02"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-TC0190FMC",
						"pcb": "J9100161A",
						"mapper": "33"
					},
					"prg": [
						{
							"$": {
								"name": "B76-01",
								"size": "128k",
								"crc": "42D893E4",
								"sha1": "9045EF6CFD67D2C3EE780E0D126B348B883E6618"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "B76-02",
								"size": "128k",
								"crc": "0A5402F9",
								"sha1": "90AE97E6A3A1F9A670B9547E8C707C26909CA0D9"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx245"
							}
						},
						{
							"$": {
								"type": "TC0190FMC"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Infinite continues",
			"codes": [
				[
					"IEVUNSPA"
				]
			]
		},
		{
			"name": "Never die",
			"codes": [
				[
					"AESSLZTL"
				]
			]
		},
		{
			"name": "Start on mission 2",
			"codes": [
				[
					"PESZIGAA"
				]
			]
		},
		{
			"name": "Start on mission 3",
			"codes": [
				[
					"ZESZIGAA"
				]
			]
		},
		{
			"name": "Start on mission 4",
			"codes": [
				[
					"LESZIGAA"
				]
			]
		},
		{
			"name": "Start on mission 5",
			"codes": [
				[
					"GESZIGAA"
				]
			]
		},
		{
			"name": "Start on mission 6",
			"codes": [
				[
					"IESZIGAA"
				]
			]
		},
		{
			"name": "Infinite magazines",
			"codes": [
				[
					"AAVSIIPA"
				]
			]
		},
		{
			"name": "Infinite grenades",
			"codes": [
				[
					"AAEIATPA"
				]
			]
		},
		{
			"name": "Double bullets in each magazine",
			"codes": [
				[
					"GANIYIZA"
				]
			]
		},
		{
			"name": "Heal completely between levels",
			"codes": [
				[
					"NNESZALE"
				]
			]
		},
		{
			"name": "Grenades inflict double damage",
			"codes": [
				[
					"GANULZZA"
				]
			]
		},
		{
			"name": "Super power drinks",
			"codes": [
				[
					"ZAELGPIE"
				]
			]
		},
		{
			"name": "Increase magazines",
			"codes": [
				[
					"PEVKVYYE",
					"PAVSIIIE"
				]
			]
		},
		{
			"name": "Increase grenades",
			"codes": [
				[
					"PENGXYIE",
					"PAVSIILE"
				]
			]
		}
	]
};
