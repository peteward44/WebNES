this.NesDb = this.NesDb || {};

NesDb[ '0F90852C9BB9C47419153A262A23E83DF314DF5C' ] = {
	"$": {
		"name": "Maniac Mansion",
		"altname": "マニアックマンション",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "JF-18",
		"publisher": "Jaleco",
		"developer": "LucasFilm Games",
		"portdeveloper": "Jaleco",
		"region": "Japan",
		"players": "1",
		"date": "1988-09-13"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3DA2085E",
				"sha1": "0F90852C9BB9C47419153A262A23E83DF314DF5C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-08"
			},
			"board": [
				{
					"$": {
						"type": "JALECO-JF-18",
						"pcb": "JF-18",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "JF-18 MM",
								"size": "256k",
								"crc": "3DA2085E",
								"sha1": "0F90852C9BB9C47419153A262A23E83DF314DF5C"
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
