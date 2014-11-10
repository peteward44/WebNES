this.NesDb = this.NesDb || {};

NesDb[ '9904A7DA9852C302F0DF9181948F9AE9225FD2AB' ] = {
	"$": {
		"name": "Swamp Thing",
		"class": "Licensed",
		"catalog": "NES-SW-NOE",
		"publisher": "THQ",
		"developer": "Imagineering",
		"region": "Germany",
		"players": "1",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "AAA985D7",
				"sha1": "9904A7DA9852C302F0DF9181948F9AE9225FD2AB",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2007-08-03"
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
								"name": "PAL-SW-0 PRG",
								"size": "128k",
								"crc": "877D0183",
								"sha1": "CCE85825E0B504306DFB6481F1160D2F03318028"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-SW-0 CHR",
								"size": "128k",
								"crc": "05147932",
								"sha1": "F0274FAEDECD17633FCE980F7F04248369B039D4"
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
