this.NesDb = this.NesDb || {};

NesDb[ 'A253DF603C207866373BE55076A5616E3BCAD2EB' ] = {
	"$": {
		"name": "Fisher-Price: I Can Remember",
		"class": "Licensed",
		"catalog": "NES-F5-USA",
		"publisher": "GameTek",
		"developer": "Beam Software",
		"region": "USA",
		"players": "1",
		"date": "1990-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "267DE4CC",
				"sha1": "A253DF603C207866373BE55076A5616E3BCAD2EB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-17"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-07",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-F5-0 PRG",
								"size": "32k",
								"crc": "619BFD3E",
								"sha1": "FCFED4888979D21C053CCCA27E0CF13A24F4C3A0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-F5-0 CHR",
								"size": "32k",
								"crc": "D62175D7",
								"sha1": "A5BD77C21DFF7AD2ED46C8C76244F66880EC4A23"
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
								"type": "6113B1"
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
