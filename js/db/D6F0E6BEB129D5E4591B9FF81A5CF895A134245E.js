this.NesDb = this.NesDb || {};

NesDb[ 'D6F0E6BEB129D5E4591B9FF81A5CF895A134245E' ] = {
	"$": {
		"name": "Caesars Palace",
		"class": "Licensed",
		"catalog": "NES-C9-USA",
		"publisher": "Virgin Games",
		"developer": "Realtime Associates",
		"region": "USA",
		"players": "1",
		"date": "1992-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "DB1D03E5",
				"sha1": "D6F0E6BEB129D5E4591B9FF81A5CF895A134245E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-07"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-10",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-C9-0 PRG",
								"size": "128k",
								"crc": "DB1D03E5",
								"sha1": "D6F0E6BEB129D5E4591B9FF81A5CF895A134245E"
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
