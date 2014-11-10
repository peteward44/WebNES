this.NesDb = this.NesDb || {};

NesDb[ 'EF849128916713A91A287660D819075059D39CBA' ] = {
	"$": {
		"name": "Wizardry II: Llylgamyn no Isan",
		"altname": "ウィザードリィII　リルガミンの遺産",
		"class": "Licensed",
		"catalog": "HSP-13",
		"publisher": "ASCII",
		"developer": "Sir-Tech Software",
		"portdeveloper": "Game Studio",
		"region": "Japan",
		"players": "1",
		"date": "1989-02-21"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "turbofile",
						"name": "TurboFile"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "55397DB3",
				"sha1": "EF849128916713A91A287660D819075059D39CBA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "HSP-13-0 PRG",
								"size": "128k",
								"crc": "50EC5E8B",
								"sha1": "721128AFB15DCBE455D4834E82828AEDD814B4ED"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HSP-13-0 CHR",
								"size": "128k",
								"crc": "109BCED8",
								"sha1": "39C7C6E8357B8C62B05D6EAE7533B30F85BE20E8"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3A"
							}
						}
					]
				}
			]
		}
	]
};
