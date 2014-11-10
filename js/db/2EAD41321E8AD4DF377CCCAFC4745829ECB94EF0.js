this.NesDb = this.NesDb || {};

NesDb[ '2EAD41321E8AD4DF377CCCAFC4745829ECB94EF0' ] = {
	"$": {
		"name": "Best Keiba: Derby Stallion",
		"altname": "ベスト競馬ダービースタリオン",
		"class": "Licensed",
		"catalog": "HSP-46",
		"publisher": "ASCII",
		"developer": "ASCII",
		"region": "Japan",
		"players": "1",
		"date": "1991-12-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "83EAF3B1",
				"sha1": "2EAD41321E8AD4DF377CCCAFC4745829ECB94EF0",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HSP-46-1 PRG",
								"size": "128k",
								"crc": "9C94A0EC",
								"sha1": "F5650471A1B3121E7BAB77DF2399CCE157C1D91C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HSP-46-0 CHR",
								"size": "128k",
								"crc": "3EF776BD",
								"sha1": "EF9518C623E2BCBCF5BEA2BDFC405301788EE790"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
