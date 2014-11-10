this.NesDb = this.NesDb || {};

NesDb[ '18E2415A94532AA583C80F2E1F8906646E1CC1FA' ] = {
	"$": {
		"name": "Classic Concentration",
		"class": "Licensed",
		"catalog": "NES-C8-USA",
		"publisher": "GameTek",
		"developer": "Softie",
		"region": "USA",
		"players": "2",
		"date": "1990-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "A3C0D49F",
				"sha1": "18E2415A94532AA583C80F2E1F8906646E1CC1FA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-05-27"
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
								"name": "NES-C8-0 PRG",
								"size": "128k",
								"crc": "A3C0D49F",
								"sha1": "18E2415A94532AA583C80F2E1F8906646E1CC1FA"
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
