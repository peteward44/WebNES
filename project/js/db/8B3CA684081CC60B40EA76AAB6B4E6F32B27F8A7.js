this.NesDb = this.NesDb || {};

NesDb[ '8B3CA684081CC60B40EA76AAB6B4E6F32B27F8A7' ] = {
	"$": {
		"name": "Tiny Toon Adventures: Cartoon Workshop",
		"class": "Licensed",
		"catalog": "NES-CW-USA",
		"publisher": "Konami",
		"developer": "Novotrade",
		"region": "USA",
		"players": "1",
		"date": "1992-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "9E6092A4",
				"sha1": "8B3CA684081CC60B40EA76AAB6B4E6F32B27F8A7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
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
								"name": "NES-CW-0 PRG",
								"size": "128k",
								"crc": "E0FE0A18",
								"sha1": "2C533293CFD4343C3A27F2440A78C9F6973B8DB3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-CW-0 CHR",
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
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
