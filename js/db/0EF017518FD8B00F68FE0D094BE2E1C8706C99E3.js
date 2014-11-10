this.NesDb = this.NesDb || {};

NesDb[ '0EF017518FD8B00F68FE0D094BE2E1C8706C99E3' ] = {
	"$": {
		"name": "President no Sentaku",
		"altname": "プレジデントの選択",
		"class": "Licensed",
		"catalog": "GAM-B3-06",
		"publisher": "HOT・B",
		"developer": "Another",
		"region": "Japan",
		"players": "1",
		"date": "1990-03-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "4640EBE0",
				"sha1": "0EF017518FD8B00F68FE0D094BE2E1C8706C99E3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-09-08"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-09",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "GAM-B3-0 PRG",
								"size": "256k",
								"crc": "4640EBE0",
								"sha1": "0EF017518FD8B00F68FE0D094BE2E1C8706C99E3"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
