this.NesDb = this.NesDb || {};

NesDb[ 'F8B38262C2AC00CF4E3E653F2987BDADC86F839E' ] = {
	"$": {
		"name": "Makaimura",
		"altname": "魔界村",
		"class": "Licensed",
		"catalog": "CAP-MK",
		"publisher": "Capcom",
		"developer": "Capcom",
		"portdeveloper": "Micronics / Khaos",
		"region": "Japan",
		"players": "2",
		"date": "1986-06-13"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "BF3635CF",
				"sha1": "F8B38262C2AC00CF4E3E653F2987BDADC86F839E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-01",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "CAP-MK-0 PRG",
								"size": "128k",
								"crc": "BF3635CF",
								"sha1": "F8B38262C2AC00CF4E3E653F2987BDADC86F839E"
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
