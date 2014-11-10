this.NesDb = this.NesDb || {};

NesDb[ '7329A36D5C38270BBEBA4BC613A874550BE49CE8' ] = {
	"$": {
		"name": "Mike Tyson's Punch-Out!!",
		"class": "Licensed",
		"catalog": "NES-PT-EEC",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Europe",
		"players": "1",
		"date": "1987-12-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"revision": "A",
				"crc": "25551F3F",
				"sha1": "7329A36D5C38270BBEBA4BC613A874550BE49CE8",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-PNROM",
						"pcb": "NES-PNROM-05",
						"mapper": "9"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-PT-1 PRG",
								"size": "128k",
								"crc": "F2A43A8A",
								"sha1": "6F5BA7E9814853BFC4C28EB8BE560180010AECFD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-PT-0 CHR",
								"size": "128k",
								"crc": "570B48EA",
								"sha1": "33DE517B16B61625909D2EB5307C08B337B542C4"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC2-L"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
