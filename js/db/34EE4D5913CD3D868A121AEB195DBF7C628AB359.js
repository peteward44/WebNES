this.NesDb = this.NesDb || {};

NesDb[ '34EE4D5913CD3D868A121AEB195DBF7C628AB359' ] = {
	"$": {
		"name": "Dungeon Kid",
		"altname": "ダンジョンキッド",
		"class": "Licensed",
		"catalog": "BTC-7D",
		"publisher": "Bothtec (Quest)",
		"developer": "Pixel",
		"region": "Japan",
		"players": "1",
		"date": "1990-08-31"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "turbofile",
						"name": "TurboFile"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D68A6F33",
				"sha1": "34EE4D5913CD3D868A121AEB195DBF7C628AB359",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-09",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "BTC-7D-0 PRG",
								"size": "128k",
								"crc": "D68A6F33",
								"sha1": "34EE4D5913CD3D868A121AEB195DBF7C628AB359"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
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
					]
				}
			]
		}
	]
};
