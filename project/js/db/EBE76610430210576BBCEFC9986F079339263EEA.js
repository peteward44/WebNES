this.NesDb = this.NesDb || {};

NesDb[ 'EBE76610430210576BBCEFC9986F079339263EEA' ] = {
	"$": {
		"name": "Eric Cantona Football Challenge Goal! 2",
		"class": "Licensed",
		"catalog": "NES-GT-FRA",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "France",
		"players": "2",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "D20BB617",
				"sha1": "EBE76610430210576BBCEFC9986F079339263EEA",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-14"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLSROM",
						"pcb": "NES-TLSROM-01",
						"mapper": "118"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-GT-0 PRG",
								"size": "128k",
								"crc": "C76FC363",
								"sha1": "6C2989151E613AD39F645973508651FDC947640C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-GT-0 CHR",
								"size": "128k",
								"crc": "6B731ABB",
								"sha1": "3D0F25112D9029938824066D68BA9F4EB8B10732"
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
