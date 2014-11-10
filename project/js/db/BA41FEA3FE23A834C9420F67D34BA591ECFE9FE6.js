this.NesDb = this.NesDb || {};

NesDb[ 'BA41FEA3FE23A834C9420F67D34BA591ECFE9FE6' ] = {
	"$": {
		"name": "Tetsuwan Atom",
		"altname": "鉄腕アトム",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC827",
		"publisher": "Konami",
		"developer": "Home Data",
		"region": "Japan",
		"players": "1",
		"date": "1988-02-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "794CAAB6",
				"sha1": "BA41FEA3FE23A834C9420F67D34BA591ECFE9FE6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-07-01"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-1",
						"pcb": "350459",
						"mapper": "75"
					},
					"prg": [
						{
							"$": {
								"name": "RC827J0P",
								"size": "128k",
								"crc": "D8DB37CC",
								"sha1": "857E1492C44A6452A31EF4F87BB9A9D7292CF842"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC827J0C",
								"size": "128k",
								"crc": "0874FEA7",
								"sha1": "BF13DB9C43AA8D1CA39556DA412C1FDFF685E2B2"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "VRC1"
							}
						}
					]
				}
			]
		}
	]
};
