this.NesDb = this.NesDb || {};

NesDb[ 'C444DF09D81B20BA54E2F0A8AA01702FFE5F5C68' ] = {
	"$": {
		"name": "Rainbow Islands",
		"class": "Licensed",
		"catalog": "NES-RL-USA",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "USA",
		"players": "2",
		"date": "1991-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "9EA1DC76",
				"sha1": "C444DF09D81B20BA54E2F0A8AA01702FFE5F5C68",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-10-09"
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
								"name": "NES-RL-0 PRG",
								"size": "128k",
								"crc": "9EA1DC76",
								"sha1": "C444DF09D81B20BA54E2F0A8AA01702FFE5F5C68"
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
