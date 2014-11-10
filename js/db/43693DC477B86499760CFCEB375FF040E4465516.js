this.NesDb = this.NesDb || {};

NesDb[ '43693DC477B86499760CFCEB375FF040E4465516' ] = {
	"$": {
		"name": "R.B.I. Baseball 2",
		"class": "Unlicensed",
		"catalog": "TGN-016-RB2",
		"publisher": "Tengen",
		"developer": "Tengen",
		"region": "USA",
		"players": "2",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "96DFC776",
				"sha1": "43693DC477B86499760CFCEB375FF040E4465516",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-07-09"
			},
			"board": [
				{
					"$": {
						"type": "TENGEN-800030",
						"pcb": "800030-01 REV A",
						"mapper": "206"
					},
					"prg": [
						{
							"$": {
								"name": "335016-1011 RB2PR",
								"size": "128k",
								"crc": "093311AA",
								"sha1": "F97EA2ED1E800D27B68A875BB03C453C983E3014"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "335016-1012 RB2CH",
								"size": "64k",
								"crc": "8585D41C",
								"sha1": "22E01150578FFF75F71697D3B29D43B0C68E1975"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "337001"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "337002"
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
