this.NesDb = this.NesDb || {};

NesDb[ '84CDE9618CB026B98C2FFFF36DDC2326099C3155' ] = {
	"$": {
		"name": "Maniac Mansion",
		"class": "Licensed",
		"catalog": "NES-JM-NOE",
		"publisher": "Jaleco",
		"developer": "LucasFilm Games",
		"region": "Germany",
		"players": "1",
		"date": "1991-10-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "60EA98A0",
				"sha1": "84CDE9618CB026B98C2FFFF36DDC2326099C3155",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2006-07-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-SNROM",
						"pcb": "NES-SNROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "FRG-JM-0 PRG",
								"size": "256k",
								"crc": "60EA98A0",
								"sha1": "84CDE9618CB026B98C2FFFF36DDC2326099C3155"
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
