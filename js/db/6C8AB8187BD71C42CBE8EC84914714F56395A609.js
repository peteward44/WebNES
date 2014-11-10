this.NesDb = this.NesDb || {};

NesDb[ '6C8AB8187BD71C42CBE8EC84914714F56395A609' ] = {
	"$": {
		"name": "Akira",
		"altname": "アキラ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-AK-6800-21",
		"publisher": "Taito",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1988-12-24"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8A7D0ABE",
				"sha1": "6C8AB8187BD71C42CBE8EC84914714F56395A609",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-13"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-TC0190FMC",
						"pcb": "AKIRA-A",
						"mapper": "33"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "CE90983A",
								"sha1": "EF2D1410F78E4B64C3C18ADBCCD7CE6229441C18"
							}
						}
					],
					"chr": [
						{
							"$": {
								"id": "0",
								"size": "128k",
								"crc": "765EE887",
								"sha1": "1E79FBF676D88D35716877D8164192CDE24B5549"
							}
						},
						{
							"$": {
								"id": "1",
								"size": "128k",
								"crc": "8F31C807",
								"sha1": "AB8D067B94B0128AD2B00EC5A962171DAF3A963F"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx139"
							}
						},
						{
							"$": {
								"type": "TC0190FMC"
							}
						}
					]
				}
			]
		}
	]
};
