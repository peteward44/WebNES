this.NesDb = this.NesDb || {};

NesDb[ '78D21A1A73393C4C37322AE3373B3CE910386B49' ] = {
	"$": {
		"name": "North & South",
		"class": "Licensed",
		"catalog": "NES-N5-SCN",
		"publisher": "Infogrames",
		"developer": "Kemco",
		"region": "Scandinavia",
		"players": "2",
		"date": "1992-01-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "7BA3F8AE",
				"sha1": "78D21A1A73393C4C37322AE3373B3CE910386B49",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-08",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-N5-0 PRG",
								"size": "128k",
								"crc": "1D976949",
								"sha1": "1FBD350A89D3501D01721F574BC21B2F845D68FC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-N5-0 CHR",
								"size": "128k",
								"crc": "814CEFDF",
								"sha1": "B376F77F7E140C27D8382499BE962996BF304EC7"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Cannon has 5 shots",
			"codes": [
				[
					"IEUATOPA"
				]
			]
		},
		{
			"name": "Cannon has 15 shots",
			"codes": [
				[
					"YEUATOPE"
				]
			]
		},
		{
			"name": "Cannon has infinite shots",
			"codes": [
				[
					"SZXPYUVS"
				]
			]
		},
		{
			"name": "No cannons allowed!",
			"codes": [
				[
					"GXXATOSO"
				]
			]
		},
		{
			"name": "Only 2 daggers in the fortress",
			"codes": [
				[
					"ZAUAGPGA"
				]
			]
		},
		{
			"name": "Infinite daggers in the fortress",
			"codes": [
				[
					"GXXPLKVS"
				]
			]
		},
		{
			"name": "2 men in the fortress",
			"codes": [
				[
					"ZAUETOZA"
				]
			]
		},
		{
			"name": "5 men in the fortress",
			"codes": [
				[
					"IAUETOZA"
				]
			]
		},
		{
			"name": "2 men on the train",
			"codes": [
				[
					"ZASAGOZA"
				]
			]
		},
		{
			"name": "5 men on the train",
			"codes": [
				[
					"IASAGOZA"
				]
			]
		}
	]
};
