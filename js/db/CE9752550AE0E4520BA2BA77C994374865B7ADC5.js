this.NesDb = this.NesDb || {};

NesDb[ 'CE9752550AE0E4520BA2BA77C994374865B7ADC5' ] = {
	"$": {
		"name": "Sansuu 4 Nen: Keisan Game",
		"altname": "けいさんゲーム 算数４年",
		"class": "Licensed",
		"catalog": "TKS-S4",
		"publisher": "Tokyo Shoseki",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1986-10-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8B4A2866",
				"sha1": "CE9752550AE0E4520BA2BA77C994374865B7ADC5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "HVC-CNROM-256K-01",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "TKS-S4-0 PRG",
								"size": "32k",
								"crc": "39B2ECDA",
								"sha1": "3649B7B2C7AC9E810214DFD86152534F172A8372"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TKS-S4-0 CHR",
								"size": "32k",
								"crc": "C9EC8AA4",
								"sha1": "0776A0B7A3C795D086BFCDD1D599B5D97A95C6C4"
							}
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
