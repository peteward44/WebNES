this.NesDb = this.NesDb || {};

NesDb[ '27CA5BA9E920C21A6906F57E266A253C39FFADB6' ] = {
	"$": {
		"name": "Othello",
		"class": "Licensed",
		"catalog": "NES-OH-USA",
		"publisher": "Acclaim",
		"developer": "Kawada",
		"region": "USA",
		"players": "2",
		"date": "1988-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "699FA085",
				"sha1": "27CA5BA9E920C21A6906F57E266A253C39FFADB6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-18"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-256",
						"pcb": "NES-NROM-256-04",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "NES-OH-0 PRG",
								"size": "32k",
								"crc": "248E7693",
								"sha1": "B41C9D75EA6DCDEB39FB30DBD59F9FD744F43F2F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-OH-0 CHR",
								"size": "8k",
								"crc": "3361FBF1",
								"sha1": "B5C0FA507E495439C14B841B5B596A2F9B04C7D5"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
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
