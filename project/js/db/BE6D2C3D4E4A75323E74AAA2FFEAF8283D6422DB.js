this.NesDb = this.NesDb || {};

NesDb[ 'BE6D2C3D4E4A75323E74AAA2FFEAF8283D6422DB' ] = {
	"$": {
		"name": "Takeshi no Sengoku Fuuunji",
		"altname": "たけしの戦国風雲児",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-TSF-5800-20",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "Japan",
		"players": "1",
		"date": "1988-11-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D920F9DF",
				"sha1": "BE6D2C3D4E4A75323E74AAA2FFEAF8283D6422DB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-13"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-TC0190FMC",
						"pcb": "J9100131A",
						"mapper": "33"
					},
					"prg": [
						{
							"$": {
								"name": "B57-01",
								"size": "128k",
								"crc": "5193FB54",
								"sha1": "99480601C18E9C0B2FB3CDDEE39F3C100E05E9F1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "B57-02",
								"size": "128k",
								"crc": "99700E35",
								"sha1": "7E046D804C8D8634D2C8B6B51E7E5E4B346B8A24"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx245"
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
