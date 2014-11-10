this.NesDb = this.NesDb || {};

NesDb[ 'F1FFBECBC99558EEF25E8C6DB1EEB9C408E2F33E' ] = {
	"$": {
		"name": "Aladdin, Disney's",
		"class": "Licensed",
		"catalog": "NES-AJ-FRA",
		"publisher": "Virgin Games",
		"developer": "NMS Software",
		"region": "France",
		"players": "1",
		"date": "1994-12-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "41D32FD7",
				"sha1": "F1FFBECBC99558EEF25E8C6DB1EEB9C408E2F33E",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-AOROM",
						"pcb": "NES-AOROM-03",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-AJ-0 PRG",
								"size": "256k",
								"crc": "41D32FD7",
								"sha1": "F1FFBECBC99558EEF25E8C6DB1EEB9C408E2F33E"
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
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
