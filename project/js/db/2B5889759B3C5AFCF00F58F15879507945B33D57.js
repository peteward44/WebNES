this.NesDb = this.NesDb || {};

NesDb[ '2B5889759B3C5AFCF00F58F15879507945B33D57' ] = {
	"$": {
		"name": "Gorby no Pipeline Daisakusen",
		"altname": "ゴルビーのパイプライン大作戦",
		"class": "Licensed",
		"catalog": "GTS-4G",
		"publisher": "Tokuma Shoten",
		"developer": "Compile",
		"region": "Japan",
		"players": "1",
		"date": "1991-04-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "1829616A",
				"sha1": "2B5889759B3C5AFCF00F58F15879507945B33D57",
				"dump": "ok",
				"dumper": "aodinets",
				"datedumped": "2012-03-05"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "HVC-CNROM-2",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "GTS-4G-0 PRG",
								"size": "32k",
								"crc": "196F05DD",
								"sha1": "5FCC96872EB79B1FA63335B5A7D1586F92FF06EA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "GTS-4G-0 CHR",
								"size": "32k",
								"crc": "941F8BDE",
								"sha1": "9F6C0C63E8AE2F1F56CD86A870D7B6817CDB3DE1"
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
