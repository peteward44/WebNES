this.NesDb = this.NesDb || {};

NesDb[ 'CD61B3CAD9BE75A271D1BE164885CA0D8070A2C9' ] = {
	"$": {
		"name": "Faria: Fuuin no Tsurugi",
		"altname": "ファリア 封印の剣",
		"class": "Licensed",
		"catalog": "HSS-FA",
		"publisher": "Hi-Score Software",
		"developer": "Game Arts",
		"region": "Japan",
		"players": "1",
		"date": "1989-07-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F885D931",
				"sha1": "CD61B3CAD9BE75A271D1BE164885CA0D8070A2C9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HSF-FA-0 PRG",
								"size": "128k",
								"crc": "BF5E2513",
								"sha1": "7A91036E599784F51BE82325FE53EA7ACBF7E16C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HSF-FA-0 CHR",
								"size": "128k",
								"crc": "491385CC",
								"sha1": "520ABD750A2D82CCC70A32C512970CF7315BA10D"
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
								"type": "MMC1B1-H"
							}
						}
					]
				}
			]
		}
	]
};
