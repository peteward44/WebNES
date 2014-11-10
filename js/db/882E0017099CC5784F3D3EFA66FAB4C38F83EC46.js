this.NesDb = this.NesDb || {};

NesDb[ '882E0017099CC5784F3D3EFA66FAB4C38F83EC46' ] = {
	"$": {
		"name": "Famicom Wars",
		"altname": "ファミコンウォーズ",
		"class": "Licensed",
		"catalog": "HVC-FW",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "2",
		"date": "1988-08-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "0B",
				"crc": "9B547E05",
				"sha1": "882E0017099CC5784F3D3EFA66FAB4C38F83EC46",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-FJROM",
						"pcb": "HVC-FJROM-01",
						"mapper": "10"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-FW-0 PRG",
								"size": "128k",
								"crc": "C9CCE8F2",
								"sha1": "17A1FE80304159D529F2B96F035192D6063A8702"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-FW-0 CHR",
								"size": "64k",
								"crc": "C57D73DC",
								"sha1": "3576122B2642141719D548B541FA3AFDCFF75A20"
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
								"type": "MMC-4"
							}
						}
					]
				}
			]
		}
	]
};
