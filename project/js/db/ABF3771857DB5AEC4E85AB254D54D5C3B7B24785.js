this.NesDb = this.NesDb || {};

NesDb[ 'ABF3771857DB5AEC4E85AB254D54D5C3B7B24785' ] = {
	"$": {
		"name": "Tiny Toon Adventures: Cartoon Workshop",
		"class": "Licensed",
		"catalog": "NES-CW-NOE",
		"publisher": "Konami",
		"developer": "Novotrade",
		"region": "Germany",
		"players": "1",
		"date": "1993-09-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "C8EBD977",
				"sha1": "ABF3771857DB5AEC4E85AB254D54D5C3B7B24785",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-12-03"
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
								"name": "PAL-CW-0 PRG",
								"size": "128k",
								"crc": "849B06DF",
								"sha1": "95CEE6809817AAF490F27D435E074C22773CC7E6"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-CW-0 CHR",
								"size": "128k",
								"crc": "F2160E9D",
								"sha1": "90EAAAC8CBA63ED32DBC8CF89430906FC8DB0802"
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
