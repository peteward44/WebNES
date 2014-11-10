this.NesDb = this.NesDb || {};

NesDb[ '99CF6CA63B173A2B86125F16BBE11885EF1AC377' ] = {
	"$": {
		"name": "Aoki Ookami to Shiroki Mejika: Genchou Hishi",
		"altname": "蒼き狼と白き牝鹿元朝秘史",
		"class": "Licensed",
		"catalog": "KOE-GG",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "Japan",
		"players": "1",
		"date": "1993-03-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "6F4E4312",
				"sha1": "99CF6CA63B173A2B86125F16BBE11885EF1AC377",
				"dump": "ok",
				"dumper": "jpx72",
				"datedumped": "2012-03-05"
			},
			"board": [
				{
					"$": {
						"type": "HVC-EWROM",
						"pcb": "HVC-EWROM-03",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "KOE-GG-0 PRG",
								"size": "512k",
								"crc": "F4120E58",
								"sha1": "254F44D573B8CF59767CF4CB67CB4C8E7DF08A53"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KOE-GG-0 CHR",
								"size": "256k",
								"crc": "28E1A2C7",
								"sha1": "3C644D6D11F7EEF992C314D7822216CD00DE9293"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "32k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC5A"
							}
						}
					]
				}
			]
		}
	]
};
