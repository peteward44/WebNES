this.NesDb = this.NesDb || {};

NesDb[ 'B0E798176E49A8BA3F533FE75EA4149BF41D77E3' ] = {
	"$": {
		"name": "Castlevania III: Dracula's Curse",
		"class": "Licensed",
		"catalog": "NES-VN-FRG",
		"publisher": "Palcom",
		"developer": "Konami",
		"region": "Germany",
		"players": "1",
		"date": "1992-12-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "671F23A8",
				"sha1": "B0E798176E49A8BA3F533FE75EA4149BF41D77E3",
				"dump": "ok",
				"dumper": "Bregalad",
				"datedumped": "2007-04-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-ELROM",
						"pcb": "NES-ELROM-01",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-VN-0 PRG",
								"size": "256k",
								"crc": "637E366A",
								"sha1": "B573CF562201B83B85515A64F668604A48514792"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-VN-0 CHR",
								"size": "128k",
								"crc": "9423BB72",
								"sha1": "D181F422A6A4421702545A792DBACFDD6F085D1C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC5"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
