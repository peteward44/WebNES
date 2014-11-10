this.NesDb = this.NesDb || {};

NesDb[ '79FDB57EFD3B0BB77B88D8B926E977511B1B520F' ] = {
	"$": {
		"name": "Rampart",
		"class": "Licensed",
		"catalog": "NES-73-NOE",
		"publisher": "Jaleco",
		"developer": "Tengen",
		"portdeveloper": "Bitmasters",
		"region": "Germany",
		"players": "2",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "C115A022",
				"sha1": "79FDB57EFD3B0BB77B88D8B926E977511B1B520F",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-17"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-73-0 PRG",
								"size": "128k",
								"crc": "28EDFAD4",
								"sha1": "8015776A5E316721913D2DB996325FFBD5A67370"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-73-0 CHR",
								"size": "128k",
								"crc": "94A07125",
								"sha1": "50403E0F89E14368F687F09995CD1E3EED08CC9C"
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
