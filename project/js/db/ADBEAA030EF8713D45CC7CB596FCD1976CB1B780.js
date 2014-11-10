this.NesDb = this.NesDb || {};

NesDb[ 'ADBEAA030EF8713D45CC7CB596FCD1976CB1B780' ] = {
	"$": {
		"name": "Majin Eiyuuden Wataru Gaiden",
		"altname": "魔神英雄伝ワタル外伝",
		"class": "Licensed",
		"catalog": "HFC-V2",
		"publisher": "Hudson Soft",
		"developer": "Westone",
		"region": "Japan",
		"players": "1",
		"date": "1990-03-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D0CC5EC8",
				"sha1": "ADBEAA030EF8713D45CC7CB596FCD1976CB1B780",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-09",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HFC-V2-0 PRG",
								"size": "256k",
								"crc": "D0CC5EC8",
								"sha1": "ADBEAA030EF8713D45CC7CB596FCD1976CB1B780"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
