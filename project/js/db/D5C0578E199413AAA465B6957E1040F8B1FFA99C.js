this.NesDb = this.NesDb || {};

NesDb[ 'D5C0578E199413AAA465B6957E1040F8B1FFA99C' ] = {
	"$": {
		"name": "CrackOut",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-37-USA",
		"publisher": "Palcom",
		"developer": "Konami",
		"region": "USA",
		"players": "1",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "7E9BCA05",
				"sha1": "D5C0578E199413AAA465B6957E1040F8B1FFA99C",
				"dump": "ok",
				"dumper": "kevtris",
				"datedumped": "2012-04-16"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-UNROM",
						"pcb": "351258",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "RP047 P0.1P",
								"size": "128k",
								"crc": "7E9BCA05",
								"sha1": "D5C0578E199413AAA465B6957E1040F8B1FFA99C"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
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
								"type": "74xx32"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
