this.NesDb = this.NesDb || {};

NesDb[ 'FCD1984D4CB3E0AB4D626ED2561C8E6D57198B76' ] = {
	"$": {
		"name": "Dig Dug",
		"altname": "ディグダグ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-NDD-4500-06",
		"publisher": "Namco",
		"developer": "Namco",
		"region": "Japan",
		"players": "2",
		"date": "1985-06-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "B174B680",
				"sha1": "FCD1984D4CB3E0AB4D626ED2561C8E6D57198B76",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-07-06"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-3301",
						"pcb": "3301",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "NAMCOT DD PRG",
								"size": "16k",
								"crc": "82132616",
								"sha1": "DA1F8C17C785672089E57397AFBCE9744E8AA8D1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAMCOT DD CHR",
								"size": "8k",
								"crc": "2DABC198",
								"sha1": "79F1E65EEA2A2841DC47916CB86FBF992B936BD5"
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
