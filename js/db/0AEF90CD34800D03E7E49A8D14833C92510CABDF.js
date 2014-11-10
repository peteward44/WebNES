this.NesDb = this.NesDb || {};

NesDb[ '0AEF90CD34800D03E7E49A8D14833C92510CABDF' ] = {
	"$": {
		"name": "Maharaja",
		"altname": "マハラジャ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "SUN-MHA-6200",
		"publisher": "Sunsoft",
		"developer": "Bothtec (Quest)",
		"region": "Japan",
		"players": "1",
		"date": "1989-09-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "98CCC9AB",
				"sha1": "0AEF90CD34800D03E7E49A8D14833C92510CABDF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-03"
			},
			"board": [
				{
					"$": {
						"type": "SUNSOFT-4",
						"pcb": "UNK-SUNSOFT-MHA",
						"mapper": "68"
					},
					"prg": [
						{
							"$": {
								"name": "MHA-PRG",
								"size": "128k",
								"crc": "FDE79681",
								"sha1": "4EC7CD65520D37467088A9CC726156C030A307CA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "MHA-CHR",
								"size": "128k",
								"crc": "FE011FB9",
								"sha1": "0F40639F1079585EAE08944E8A31D2C8C5F2BD4C"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "Sunsoft-4"
							}
						}
					]
				}
			]
		}
	]
};
