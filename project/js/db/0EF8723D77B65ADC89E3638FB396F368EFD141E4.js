this.NesDb = this.NesDb || {};

NesDb[ '0EF8723D77B65ADC89E3638FB396F368EFD141E4' ] = {
	"$": {
		"name": "Exploding Fist",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-EF-USA",
		"publisher": "Tradewest",
		"developer": "Beam Software",
		"region": "USA",
		"players": "3",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "1C31DD60",
				"sha1": "0EF8723D77B65ADC89E3638FB396F368EFD141E4",
				"dump": "ok",
				"dumper": "Skrybe",
				"datedumped": "2012-04-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-04",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "FIST PROM 22/5/90",
								"size": "32k",
								"crc": "1C63E706",
								"sha1": "1FF1395E4CD78E29BD8D0A86C851D9C2D8CD505D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "FIST GROM 22/5/90",
								"size": "32k",
								"crc": "4A4DCC7E",
								"sha1": "A6859293E5182F2C2FC8F65B515C201F00E2F0A6"
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
								"type": "6113"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
