this.NesDb = this.NesDb || {};

NesDb[ '36DE100A55828576264B449895EF3EBC4BBBEC3F' ] = {
	"$": {
		"name": "Dragon Ball",
		"class": "Licensed",
		"catalog": "NES-B8-EEC",
		"publisher": "Bandai",
		"developer": "TOSE Software",
		"region": "Europe",
		"players": "1",
		"date": "1990-07-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "4F3B2E57",
				"sha1": "36DE100A55828576264B449895EF3EBC4BBBEC3F",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-04-30"
			},
			"board": [
				{
					"$": {
						"type": "NES-GNROM",
						"pcb": "NES-GNROM-05",
						"mapper": "66"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-B8-0 PRG",
								"size": "128k",
								"crc": "68231A85",
								"sha1": "B493BDD843627D63353F73B846D120723149D59D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-B8-0 CHR",
								"size": "32k",
								"crc": "9E1295E7",
								"sha1": "7921AC711D7225D798A45856BECDC2D9CD2394CD"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
