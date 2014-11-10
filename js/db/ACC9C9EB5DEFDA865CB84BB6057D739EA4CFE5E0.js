this.NesDb = this.NesDb || {};

NesDb[ 'ACC9C9EB5DEFDA865CB84BB6057D739EA4CFE5E0' ] = {
	"$": {
		"name": "Miracle Piano Teaching System, The",
		"class": "Licensed",
		"catalog": "NES-9M-FRA",
		"publisher": "Mindscape",
		"developer": "The Software Toolworks",
		"region": "France",
		"players": "1",
		"date": "1991-12-06"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "miraclepiano",
						"name": "Miracle Piano"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "9DF58E80",
				"sha1": "ACC9C9EB5DEFDA865CB84BB6057D739EA4CFE5E0",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-29"
			},
			"board": [
				{
					"$": {
						"type": "NES-SJROM",
						"pcb": "NES-SJROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "FRA-9M-0 PRG",
								"size": "256k",
								"crc": "4DA4D863",
								"sha1": "B0EB752AE1C5D14280EC8C67BC88BBACDEDF31A7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "FRA-9M-0 CHR",
								"size": "64k",
								"crc": "5227C221",
								"sha1": "A883B42B960CCA57B1FB28A8FA74281200EADDB3"
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
								"type": "MMC1B3"
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
	]
};
