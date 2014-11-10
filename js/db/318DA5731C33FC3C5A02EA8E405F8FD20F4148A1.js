this.NesDb = this.NesDb || {};

NesDb[ '318DA5731C33FC3C5A02EA8E405F8FD20F4148A1' ] = {
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
				"revision": "A",
				"crc": "B0BC46D1",
				"sha1": "318DA5731C33FC3C5A02EA8E405F8FD20F4148A1",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-03-09"
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
								"name": "PAL-B8-1 PRG",
								"size": "128k",
								"crc": "E2AB39A2",
								"sha1": "2338059AB6DC540E59283EDEE65714BCD94AC188"
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
