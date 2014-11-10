this.NesDb = this.NesDb || {};

NesDb[ 'F1B35EFDECC98F52A560B32ACB75EBD719CBC9DE' ] = {
	"$": {
		"name": "Booby Kids",
		"altname": "ブービーキッズ",
		"class": "Licensed",
		"catalog": "NBF-BB (05)",
		"publisher": "Nichibutsu",
		"developer": "Nichibutsu",
		"region": "Japan",
		"players": "2",
		"date": "1987-07-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "4178497A",
				"sha1": "F1B35EFDECC98F52A560B32ACB75EBD719CBC9DE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
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
								"name": "NBF-BB-0 PRG",
								"size": "128k",
								"crc": "4178497A",
								"sha1": "F1B35EFDECC98F52A560B32ACB75EBD719CBC9DE"
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
