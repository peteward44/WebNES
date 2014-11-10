this.NesDb = this.NesDb || {};

NesDb[ '928A82D58C203BDF5D05150D891A236E3E3293E7' ] = {
	"$": {
		"name": "Star Force",
		"altname": "スターフォース",
		"class": "Licensed",
		"catalog": "HFC-SF",
		"publisher": "Hudson Soft",
		"developer": "Tecmo",
		"region": "Japan",
		"players": "1",
		"date": "1985-06-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C67865A2",
				"sha1": "928A82D58C203BDF5D05150D891A236E3E3293E7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-NROM-128",
						"pcb": "HVC-NROM-03",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-SF-0 PRG",
								"size": "16k",
								"crc": "FD7DD2B0",
								"sha1": "E8335B0B24D8FE3C25E91D761C3477F270AFDB72"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-SF-0 CHR",
								"size": "8k",
								"crc": "B6128566",
								"sha1": "6CED5C98086E29E25FDE990001EE14B925040D9E"
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
					"SZKEVTVG"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AEUAUIZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IEUAUIZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEUAUIZE"
				]
			]
		},
		{
			"name": "Turbo speed",
			"codes": [
				[
					"VYVEGONN"
				]
			]
		}
	]
};
