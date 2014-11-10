this.NesDb = this.NesDb || {};

NesDb[ 'A75903006B1AD7E0CB1DD18F9E59DBCF1B24B50E' ] = {
	"$": {
		"name": "Star Force",
		"class": "Licensed",
		"catalog": "NES-FO-EEC",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Europe",
		"players": "1",
		"date": "1990-04-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "5CE55F5B",
				"sha1": "A75903006B1AD7E0CB1DD18F9E59DBCF1B24B50E",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-07-28"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-07",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-FO-0 PRG",
								"size": "32k",
								"crc": "10F6B265",
								"sha1": "43558458B5FD320899576D0CF73DD7C3899786A5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-FO-0 CHR",
								"size": "32k",
								"crc": "52F1754E",
								"sha1": "ABD97A7F092680E302C356F28F0A3D325315BD26"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
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
