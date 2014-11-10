this.NesDb = this.NesDb || {};

NesDb[ 'A47FB03C1CF990124FD576BD947800B733C0A07E' ] = {
	"$": {
		"name": "Esper Bouken Tai",
		"altname": "エスパ冒険隊 魔王の砦",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "JF-15",
		"publisher": "Jaleco",
		"developer": "NMK",
		"region": "Japan",
		"players": "1",
		"date": "1987-10-13"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "7B0A41B9",
				"sha1": "A47FB03C1CF990124FD576BD947800B733C0A07E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-03"
			},
			"board": [
				{
					"$": {
						"type": "JALECO-JF-15",
						"pcb": "JF-15",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "JF-15 PRG",
								"size": "256k",
								"crc": "7B0A41B9",
								"sha1": "A47FB03C1CF990124FD576BD947800B733C0A07E"
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
