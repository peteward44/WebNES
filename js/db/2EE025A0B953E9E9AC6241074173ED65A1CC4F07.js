this.NesDb = this.NesDb || {};

NesDb[ '2EE025A0B953E9E9AC6241074173ED65A1CC4F07' ] = {
	"$": {
		"name": "Rollerball",
		"class": "Licensed",
		"catalog": "NES-RH-AUS",
		"publisher": "HAL Laboratory",
		"developer": "HAL Laboratory",
		"region": "Australia",
		"players": "2",
		"date": "1992-03-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "A99016C6",
				"sha1": "2EE025A0B953E9E9AC6241074173ED65A1CC4F07",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-01-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-SFROM",
						"pcb": "NES-SFROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-RH-0 PRG",
								"size": "128k",
								"crc": "954C5ACB",
								"sha1": "90EC4FB7AB66D52F9356EA5549654C9803F56B5B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-RH-0 CHR",
								"size": "32k",
								"crc": "38B4820D",
								"sha1": "3220C79624EF5FA7B1DACB9D0258F81F4C8C474C"
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
			"name": "All players start with only 1 ball",
			"codes": [
				[
					"PANGIPLA"
				]
			]
		},
		{
			"name": "Infinite balls for all players",
			"codes": [
				[
					"SZKGPXVS"
				]
			]
		}
	]
};
