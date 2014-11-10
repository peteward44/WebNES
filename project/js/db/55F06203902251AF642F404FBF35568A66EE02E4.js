this.NesDb = this.NesDb || {};

NesDb[ '55F06203902251AF642F404FBF35568A66EE02E4' ] = {
	"$": {
		"name": "Side Pocket",
		"class": "Licensed",
		"catalog": "NES-PK-USA",
		"publisher": "Data East",
		"developer": "Data East",
		"region": "USA",
		"players": "1",
		"date": "1987-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "DC4DA5D4",
				"sha1": "55F06203902251AF642F404FBF35568A66EE02E4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-PK-0 PRG",
								"size": "128k",
								"crc": "DC4DA5D4",
								"sha1": "55F06203902251AF642F404FBF35568A66EE02E4"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
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
