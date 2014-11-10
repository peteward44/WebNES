this.NesDb = this.NesDb || {};

NesDb[ 'AC3F180C7CCB6EA35D24658B315E5AFA72904F74' ] = {
	"$": {
		"name": "Blues Brothers, The",
		"class": "Licensed",
		"catalog": "NES-4Z-USA",
		"publisher": "Titus",
		"developer": "Titus",
		"region": "USA",
		"players": "2",
		"date": "1992-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "9F2EEF20",
				"sha1": "AC3F180C7CCB6EA35D24658B315E5AFA72904F74",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-24"
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
								"name": "NES-4Z-0 PRG",
								"size": "128k",
								"crc": "9F2EEF20",
								"sha1": "AC3F180C7CCB6EA35D24658B315E5AFA72904F74"
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
