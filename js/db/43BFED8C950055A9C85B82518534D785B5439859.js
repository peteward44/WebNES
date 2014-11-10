this.NesDb = this.NesDb || {};

NesDb[ '43BFED8C950055A9C85B82518534D785B5439859' ] = {
	"$": {
		"name": "Hokkaidou Rensa Satsujin: Okhotsu ni Shoyu",
		"altname": "北海道連鎖殺人 オホーツクに消ゆ",
		"class": "Licensed",
		"catalog": "HSP-07",
		"publisher": "Login Soft",
		"developer": "Pax Softnica",
		"region": "Japan",
		"players": "1",
		"date": "1987-06-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "992AF039",
				"sha1": "43BFED8C950055A9C85B82518534D785B5439859",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SMROM",
						"pcb": "HVC-SMROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"id": "0",
								"name": "HSP-07-0 PR1",
								"size": "128k",
								"crc": "803519D0",
								"sha1": "28501A5E2EEFD29060C266CD05F7BDAA29A43996"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "HSP-07-0 PR2",
								"size": "128k",
								"crc": "51867A62",
								"sha1": "3E0287E44EFAD07BC8715BCC84D06B9180F1E401"
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
								"type": "MMC1"
							}
						}
					]
				}
			]
		}
	]
};
