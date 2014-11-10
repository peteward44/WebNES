this.NesDb = this.NesDb || {};

NesDb[ '166E1D076E3552F14F762F540FC04F1E05E85E20' ] = {
	"$": {
		"name": "Guerrilla War",
		"class": "Licensed",
		"catalog": "NES-GW-AUS",
		"publisher": "SNK",
		"developer": "SNK",
		"region": "Australia",
		"players": "2",
		"date": "1989"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "622E054A",
				"sha1": "166E1D076E3552F14F762F540FC04F1E05E85E20",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-16"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-GW-0 PRG",
								"size": "128k",
								"crc": "AECDBE24",
								"sha1": "16326F34EFB3CBF5B8FD7076B06A7D9965A1FBC0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-GW-0 CHR",
								"size": "128k",
								"crc": "DE1B8EA3",
								"sha1": "67B5841D31F916410CE627CB1E1F2C566DBDBFD5"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Both players have infinite lives",
			"codes": [
				[
					"SLTKOV"
				]
			]
		},
		{
			"name": "Both players start with 1 life",
			"codes": [
				[
					"AELGVP"
				]
			]
		},
		{
			"name": "Both players start with 6 lives",
			"codes": [
				[
					"IELGVP"
				]
			]
		},
		{
			"name": "Both players start with 9 lives",
			"codes": [
				[
					"PELGVO"
				]
			]
		}
	]
};
