this.NesDb = this.NesDb || {};

NesDb[ '085FB03A2990257D37FCE143FC7407E201765076' ] = {
	"$": {
		"name": "Four Players' Tennis",
		"class": "Licensed",
		"catalog": "NES-74-FRG",
		"publisher": "Nintendo",
		"developer": "Home Data",
		"region": "Germany",
		"players": "4",
		"date": "1992-07"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "fourplayer",
						"name": "4-Player Adapter"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "48B8EE58",
				"sha1": "085FB03A2990257D37FCE143FC7407E201765076",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-09-04"
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
								"name": "PAL-74-0 PRG",
								"size": "128k",
								"crc": "E16F25CC",
								"sha1": "18354250BBF03AA0869CB40B44F5611193312D8D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-74-0 CHR",
								"size": "128k",
								"crc": "2B32EE96",
								"sha1": "9C1F7D1529E7CA3B991A460121332B0AB52F8E66"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
