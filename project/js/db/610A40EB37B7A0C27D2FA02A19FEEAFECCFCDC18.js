this.NesDb = this.NesDb || {};

NesDb[ '610A40EB37B7A0C27D2FA02A19FEEAFECCFCDC18' ] = {
	"$": {
		"name": "Super Chinese",
		"altname": "スーパーチャイニーズ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-NSC-4900-15",
		"publisher": "Namco",
		"developer": "Culture Brain",
		"region": "Japan",
		"players": "2",
		"date": "1986-06-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "711C2B0E",
				"sha1": "610A40EB37B7A0C27D2FA02A19FEEAFECCFCDC18",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-17"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-3407",
						"pcb": "3407",
						"mapper": "206"
					},
					"prg": [
						{
							"$": {
								"name": "NAMCOT SC PRG",
								"size": "32k",
								"crc": "51C7C66A",
								"sha1": "4A86A2ADC5CC3B5378F0E1EE63169785B6AD1A21"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAMCOT SC CHR",
								"size": "16k",
								"crc": "F85AC7E5",
								"sha1": "2A3255820A41F0EEA1196E91B84BB3A7AFFF0C2F"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "108"
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
