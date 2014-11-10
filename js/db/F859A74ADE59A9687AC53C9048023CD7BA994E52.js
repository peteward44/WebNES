this.NesDb = this.NesDb || {};

NesDb[ 'F859A74ADE59A9687AC53C9048023CD7BA994E52' ] = {
	"$": {
		"name": "Win, Lose or Draw",
		"class": "Licensed",
		"catalog": "NES-IL-USA",
		"publisher": "Hi Tech Expressions",
		"developer": "Rocket Science Productions",
		"region": "USA",
		"players": "2",
		"date": "1990-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F74DFC91",
				"sha1": "F859A74ADE59A9687AC53C9048023CD7BA994E52",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-12"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-IL-0 PRG",
								"size": "128k",
								"crc": "F74DFC91",
								"sha1": "F859A74ADE59A9687AC53C9048023CD7BA994E52"
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
