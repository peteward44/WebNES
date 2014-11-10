this.NesDb = this.NesDb || {};

NesDb[ '250FD2FFE1C7565E1469055147B67C4D4C799E56' ] = {
	"$": {
		"name": "Silent Service",
		"class": "Licensed",
		"catalog": "NES-IV-EEC",
		"publisher": "Konami",
		"developer": "Rare",
		"region": "Europe",
		"players": "1",
		"date": "1990-11-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "FA014BA1",
				"sha1": "250FD2FFE1C7565E1469055147B67C4D4C799E56",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-15"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-IV-0 PRG",
								"size": "128k",
								"crc": "FA014BA1",
								"sha1": "250FD2FFE1C7565E1469055147B67C4D4C799E56"
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
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
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
			"name": "Start with 50 deck gun shells",
			"codes": [
				[
					"ZLEPOIAI"
				]
			]
		},
		{
			"name": "Start with 99 deck gun shells",
			"codes": [
				[
					"LTEPOIAI"
				]
			]
		},
		{
			"name": "Infinite deck gun shells",
			"codes": [
				[
					"SZXVOPVG"
				]
			]
		},
		{
			"name": "Infinite bow torpedoes",
			"codes": [
				[
					"SZSVUPVG"
				]
			]
		},
		{
			"name": "Infinite aft torpedoes",
			"codes": [
				[
					"SXETUPVG"
				]
			]
		}
	]
};
