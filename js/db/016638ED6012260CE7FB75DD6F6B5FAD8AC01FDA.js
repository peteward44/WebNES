this.NesDb = this.NesDb || {};

NesDb[ '016638ED6012260CE7FB75DD6F6B5FAD8AC01FDA' ] = {
	"$": {
		"name": "Tecmo World Cup Soccer",
		"altname": "テクモワールドカップサッカー",
		"class": "Licensed",
		"catalog": "TCF-WC",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Japan",
		"players": "2",
		"date": "1990-12-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8A5BC0D3",
				"sha1": "016638ED6012260CE7FB75DD6F6B5FAD8AC01FDA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-31"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TBROM",
						"pcb": "HVC-TBROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "TCF-WC-0 PRG",
								"size": "64k",
								"crc": "22F1CA9E",
								"sha1": "1AD39B8367E2AE049789402F627F37DE22AED78B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TCF-WC-0 CHR",
								"size": "64k",
								"crc": "6D3AD901",
								"sha1": "F123CD285F1DEFA5A748E6D1D755A34180768827"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Never lose guts",
			"codes": [
				[
					"OXUEPTOO"
				]
			]
		},
		{
			"name": "Everyone has more guts",
			"codes": [
				[
					"ASNIEIAZ",
					"TENIOILA"
				]
			]
		}
	]
};
