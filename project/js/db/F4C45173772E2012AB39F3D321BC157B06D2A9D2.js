this.NesDb = this.NesDb || {};

NesDb[ 'F4C45173772E2012AB39F3D321BC157B06D2A9D2' ] = {
	"$": {
		"name": "Sansuu 3 Nen: Keisan Game",
		"altname": "けいさんゲーム 算数３年",
		"class": "Licensed",
		"catalog": "TKS-S3",
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
				"crc": "87DA4BD0",
				"sha1": "F4C45173772E2012AB39F3D321BC157B06D2A9D2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
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
								"name": "TKS-S3-0 PRG",
								"size": "32k",
								"crc": "73DE64AD",
								"sha1": "D053D923BF9252F4DBFB288A4F2706D3DBD45261"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TKS-S3-0 CHR",
								"size": "8k",
								"crc": "1A1B6292",
								"sha1": "5892331AEA5DDE26753345B506D1508EB1443442"
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
