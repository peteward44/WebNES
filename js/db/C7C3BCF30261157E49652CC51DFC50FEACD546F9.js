this.NesDb = this.NesDb || {};

NesDb[ 'C7C3BCF30261157E49652CC51DFC50FEACD546F9' ] = {
	"$": {
		"name": "Quinty",
		"altname": "クインティ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-QT-4900",
		"publisher": "Namco",
		"developer": "Game Freak",
		"region": "Japan",
		"players": "2",
		"date": "1989-06-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "13DA2122",
				"sha1": "C7C3BCF30261157E49652CC51DFC50FEACD546F9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-17"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-3443",
						"pcb": "3443",
						"mapper": "88"
					},
					"prg": [
						{
							"$": {
								"name": "NAMCOT QT PRG",
								"size": "128k",
								"crc": "D9803A35",
								"sha1": "7EFF416A03AE5E33F5ABF074A1C3553B6F3A53C0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAMCOT QT CHR",
								"size": "128k",
								"crc": "D275F70D",
								"sha1": "67E0C415CFF42DA794A7B61EAA84F769DD7C9966"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "118"
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
