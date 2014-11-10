this.NesDb = this.NesDb || {};

NesDb[ '003B7F1315F5EE0DC60C5F9D989EC8BAB0811ED4' ] = {
	"$": {
		"name": "Crazy Climber",
		"altname": "クレイジークライマー",
		"class": "Licensed",
		"catalog": "NBF-CY (04)",
		"publisher": "Nichibutsu",
		"developer": "Nichibutsu",
		"region": "Japan",
		"players": "2",
		"date": "1986-12-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C68363F6",
				"sha1": "003B7F1315F5EE0DC60C5F9D989EC8BAB0811ED4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM+74HC08",
						"pcb": "HVC-UNROM-02",
						"mapper": "180"
					},
					"prg": [
						{
							"$": {
								"name": "NBF-CY-0 PRG",
								"size": "128k",
								"crc": "C68363F6",
								"sha1": "003B7F1315F5EE0DC60C5F9D989EC8BAB0811ED4"
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
								"type": "74xx08"
							}
						},
						{
							"$": {
								"type": "74xx161"
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
