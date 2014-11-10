this.NesDb = this.NesDb || {};

NesDb[ '0C4E40E7BDD45C51BFBFEFA7CB75E375B78833FB' ] = {
	"$": {
		"name": "Sansuu 2 Nen: Keisan Game",
		"altname": "けいさんゲーム 算数２年",
		"class": "Licensed",
		"catalog": "TKS-S2",
		"publisher": "Tokyo Shoseki",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1986-04-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "892CBBC2",
				"sha1": "0C4E40E7BDD45C51BFBFEFA7CB75E375B78833FB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM+SECURITY",
						"pcb": "HVC-CNROM-256K-01",
						"mapper": "185"
					},
					"prg": [
						{
							"$": {
								"name": "TKS-S2-0 PRG",
								"size": "32k",
								"crc": "DAADEBFA",
								"sha1": "33E6C174C85C064A178FDC9BE1BCA8006A1996E6"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TKS-S2-0 CHR",
								"size": "8k",
								"crc": "BC6C9693",
								"sha1": "508DAFFA2F1687B4AD7D5936882FB9081D8A2C7E"
							},
							"pin": [
								{
									"$": {
										"number": "26",
										"function": "/CE"
									}
								},
								{
									"$": {
										"number": "27",
										"function": "CE"
									}
								}
							]
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
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
