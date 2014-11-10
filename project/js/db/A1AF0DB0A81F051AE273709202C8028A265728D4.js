this.NesDb = this.NesDb || {};

NesDb[ 'A1AF0DB0A81F051AE273709202C8028A265728D4' ] = {
	"$": {
		"name": "Castle Excellent",
		"altname": "キャッスルエクセレント",
		"class": "Licensed",
		"catalog": "HSP-05",
		"publisher": "ASCII",
		"developer": "Bits Laboratory",
		"region": "Japan",
		"players": "1",
		"date": "1986-11-28"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "turbofile",
						"name": "TurboFile"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "7FA2CC55",
				"sha1": "A1AF0DB0A81F051AE273709202C8028A265728D4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
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
								"name": "HSP-05-0 PRG",
								"size": "32k",
								"crc": "9FA1C11F",
								"sha1": "099B3B7E1B3F335ABCD29CD3AA013894D745BEB2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HSP-05-0 CHR",
								"size": "32k",
								"crc": "04A8FF2E",
								"sha1": "E6C57329C079EFF1FD7FA66EB1A65DC02F4B5A7A"
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
