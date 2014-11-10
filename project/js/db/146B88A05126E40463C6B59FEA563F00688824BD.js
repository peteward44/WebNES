this.NesDb = this.NesDb || {};

NesDb[ '146B88A05126E40463C6B59FEA563F00688824BD' ] = {
	"$": {
		"name": "Pocket Zaurus: Juu Ouken no Nazo",
		"altname": "ポケットザウルス 十王剣の謎",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "BA-PZ",
		"publisher": "Bandai",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1987-02-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "B1A94B82",
				"sha1": "146B88A05126E40463C6B59FEA563F00688824BD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-28"
			},
			"board": [
				{
					"$": {
						"type": "BANDAI-74*161/161/32",
						"pcb": "BA ワラ",
						"mapper": "152"
					},
					"prg": [
						{
							"$": {
								"name": "BANDAI 87 PZ PR",
								"size": "128k",
								"crc": "8CE99FE4",
								"sha1": "721F484D52221E96FF89C1EAF171FDC7D938A97E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BANDAI 87 BZCH",
								"size": "128k",
								"crc": "A59B0F6F",
								"sha1": "AD24E51FCCE23241E281BB3A51D77BEF633E1C14"
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
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					]
				}
			]
		}
	]
};
