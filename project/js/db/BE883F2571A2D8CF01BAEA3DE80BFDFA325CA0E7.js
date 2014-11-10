this.NesDb = this.NesDb || {};

NesDb[ 'BE883F2571A2D8CF01BAEA3DE80BFDFA325CA0E7' ] = {
	"$": {
		"name": "Hollywood Squares",
		"class": "Licensed",
		"catalog": "NES-HL-USA",
		"publisher": "GameTek",
		"developer": "Rare",
		"region": "USA",
		"players": "2",
		"date": "1989-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "3869E598",
				"sha1": "BE883F2571A2D8CF01BAEA3DE80BFDFA325CA0E7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-29"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-08",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-HL-0 PRG",
								"size": "128k",
								"crc": "3869E598",
								"sha1": "BE883F2571A2D8CF01BAEA3DE80BFDFA325CA0E7"
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
