this.NesDb = this.NesDb || {};

NesDb[ 'F82654BE44E4B01B3F9627D81232A086B1CF7599' ] = {
	"$": {
		"name": "Bomber King",
		"altname": "ボンバーキング",
		"class": "Licensed",
		"catalog": "HFC-BX",
		"publisher": "Hudson Soft",
		"developer": "Hudson Soft",
		"region": "Japan",
		"players": "1",
		"date": "1987-08-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "BD9D0E85",
				"sha1": "F82654BE44E4B01B3F9627D81232A086B1CF7599",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
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
								"name": "HFC-BX-0 PRG",
								"size": "128k",
								"crc": "BD9D0E85",
								"sha1": "F82654BE44E4B01B3F9627D81232A086B1CF7599"
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
