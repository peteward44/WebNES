this.NesDb = this.NesDb || {};

NesDb[ '98A0ADEA6B0FDA9FEC6A949E026DC24E3A4EE7B5' ] = {
	"$": {
		"name": "Hoops",
		"class": "Licensed",
		"catalog": "NES-2B-AUS",
		"publisher": "Jaleco",
		"developer": "Aicom",
		"region": "Australia",
		"players": "2",
		"date": "1989"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "3DBD6DAF",
				"sha1": "98A0ADEA6B0FDA9FEC6A949E026DC24E3A4EE7B5",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-13"
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
								"name": "PAL-2B-0 PRG",
								"size": "128k",
								"crc": "67392913",
								"sha1": "FD3648B4BA162B665D6AA28A0BC12AF8860CE488"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-2B-0 CHR",
								"size": "128k",
								"crc": "4BA913D0",
								"sha1": "2724A1EED2A995337E974E40D7B140795DF0EA7C"
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
	]
};
