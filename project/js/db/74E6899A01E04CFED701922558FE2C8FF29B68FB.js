this.NesDb = this.NesDb || {};

NesDb[ '74E6899A01E04CFED701922558FE2C8FF29B68FB' ] = {
	"$": {
		"name": "Over Horizon",
		"class": "Licensed",
		"catalog": "NES-Z6-NOE",
		"publisher": "Takara",
		"developer": "Pixel",
		"region": "Germany",
		"players": "1",
		"date": "1992-09-13"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "9237B447",
				"sha1": "74E6899A01E04CFED701922558FE2C8FF29B68FB",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-11-05"
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
								"name": "PAL-Z6-0 PRG",
								"size": "128k",
								"crc": "9D07708D",
								"sha1": "92525AE69BC2C9725DDC547765877EC4EEEB2FF3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-Z6-0 CHR",
								"size": "128k",
								"crc": "CFF1A7BF",
								"sha1": "2148882B2ED6ED589E124D8AF23D48AEF236129C"
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
	]
};
