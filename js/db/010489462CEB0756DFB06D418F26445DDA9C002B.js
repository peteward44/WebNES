this.NesDb = this.NesDb || {};

NesDb[ '010489462CEB0756DFB06D418F26445DDA9C002B' ] = {
	"$": {
		"name": "Chessmaster, The",
		"class": "Licensed",
		"catalog": "NES-EM-USA",
		"publisher": "Hi Tech Expressions",
		"developer": "The Software Toolworks",
		"region": "USA",
		"players": "2",
		"date": "1990-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "D7F6320C",
				"sha1": "010489462CEB0756DFB06D418F26445DDA9C002B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-SJROM",
						"pcb": "NES-SJROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-EM-0 PRG",
								"size": "128k",
								"crc": "3484AB0C",
								"sha1": "44D85C30DC942EF6939C427B7801AF7FE32925A8"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-EM-0 CHR",
								"size": "32k",
								"crc": "DDCFE401",
								"sha1": "689DF9ECE70E581CFA26DA2F784B088803ED435B"
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
								"type": "MMC1B2"
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
