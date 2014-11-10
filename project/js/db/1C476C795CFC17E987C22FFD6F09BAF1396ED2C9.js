this.NesDb = this.NesDb || {};

NesDb[ '1C476C795CFC17E987C22FFD6F09BAF1396ED2C9' ] = {
	"$": {
		"name": "Family Circuit '91",
		"altname": "ファミリーサーキット’９１",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-FC91-7800",
		"publisher": "Namco",
		"developer": "Game Studio",
		"region": "Japan",
		"players": "2",
		"date": "1991-07-19"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C247CC80",
				"sha1": "1C476C795CFC17E987C22FFD6F09BAF1396ED2C9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-07-08"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-340",
						"pcb": "60-25",
						"mapper": "19"
					},
					"prg": [
						{
							"$": {
								"size": "512k",
								"crc": "B62A7B71",
								"sha1": "AE790AB9F5F8A2BA8E3AE24C404CFAF50B03E1AB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "128k",
								"crc": "717336B9",
								"sha1": "0008E468517E2F2C82D9962C7FE4C535710DBA39"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "<340>"
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
