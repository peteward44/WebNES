this.NesDb = this.NesDb || {};

NesDb[ 'C7476483A506635CD0110D325D487F3A974DAA08' ] = {
	"$": {
		"name": "Insector X",
		"altname": "インセクターＸ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-IS-5900-33",
		"publisher": "Taito",
		"developer": "Soft Machine",
		"region": "Japan",
		"players": "2",
		"date": "1990-09-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F80BDC50",
				"sha1": "C7476483A506635CD0110D325D487F3A974DAA08",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-02"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-TC0190FMC",
						"pcb": "J9100205A",
						"mapper": "33"
					},
					"prg": [
						{
							"$": {
								"name": "C52-01",
								"size": "128k",
								"crc": "A71C3452",
								"sha1": "E847DFF8415EF57B34A158ED05E890C5B6852CCA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "C52-02",
								"size": "128k",
								"crc": "8A351A69",
								"sha1": "0DA0A80C7BB01F9A6EBA38050113543A5A50AE48"
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
