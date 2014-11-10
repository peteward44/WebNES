this.NesDb = this.NesDb || {};

NesDb[ '15D67872A0E9D99FBCD388CB8DCD54226A5108D0' ] = {
	"$": {
		"name": "JJ Tobidase Daisakusen Part 2",
		"altname": "ジェイ ジェイ とびだせ大作戦パート２",
		"class": "Licensed",
		"catalog": "SQF-JJ",
		"publisher": "Square",
		"developer": "Square",
		"region": "Japan",
		"players": "1",
		"date": "1987-12-07"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "3dglasses",
						"name": "3-D Glasses"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "B39A3F5B",
				"sha1": "15D67872A0E9D99FBCD388CB8DCD54226A5108D0",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-03",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "SQF-JJ-0 PRG",
								"size": "128k",
								"crc": "B39A3F5B",
								"sha1": "15D67872A0E9D99FBCD388CB8DCD54226A5108D0"
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
