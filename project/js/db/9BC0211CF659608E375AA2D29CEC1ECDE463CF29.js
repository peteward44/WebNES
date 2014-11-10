this.NesDb = this.NesDb || {};

NesDb[ '9BC0211CF659608E375AA2D29CEC1ECDE463CF29' ] = {
	"$": {
		"name": "Prince of Persia",
		"class": "Licensed",
		"catalog": "NES-PA-USA",
		"publisher": "Virgin Games",
		"developer": "Motivetime",
		"region": "USA",
		"players": "1",
		"date": "1992-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "70CE3771",
				"sha1": "9BC0211CF659608E375AA2D29CEC1ECDE463CF29",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-25"
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
								"name": "NES-PA-0 PRG",
								"size": "128k",
								"crc": "70CE3771",
								"sha1": "9BC0211CF659608E375AA2D29CEC1ECDE463CF29"
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
