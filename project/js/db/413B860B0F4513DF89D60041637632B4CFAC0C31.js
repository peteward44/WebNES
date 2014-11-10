this.NesDb = this.NesDb || {};

NesDb[ '413B860B0F4513DF89D60041637632B4CFAC0C31' ] = {
	"$": {
		"name": "Spelunker II: Yuusha e no Chousen",
		"altname": "スペランカーⅡ 勇者への挑戦",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "IF-06",
		"publisher": "Irem",
		"developer": "Now Production",
		"region": "Japan",
		"players": "1",
		"date": "1987-09-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C37F225C",
				"sha1": "413B860B0F4513DF89D60041637632B4CFAC0C31",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-03"
			},
			"board": [
				{
					"$": {
						"type": "IREM-UNROM",
						"pcb": "FC-00-002",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "IREM-SP-2",
								"size": "128k",
								"crc": "C37F225C",
								"sha1": "413B860B0F4513DF89D60041637632B4CFAC0C31"
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
