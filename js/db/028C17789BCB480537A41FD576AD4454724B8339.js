this.NesDb = this.NesDb || {};

NesDb[ '028C17789BCB480537A41FD576AD4454724B8339' ] = {
	"$": {
		"name": "Isaki Shuugorou no Keiba Hisshou Gaku",
		"altname": "井崎脩五郎の競馬必勝学",
		"class": "Licensed",
		"catalog": "IMA-EK",
		"publisher": "Imagineer",
		"developer": "C-lab.",
		"region": "Japan",
		"players": "1",
		"date": "1990-03-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "18D44BBA",
				"sha1": "028C17789BCB480537A41FD576AD4454724B8339",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-09-12"
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
								"name": "IMA-EK-0 PRG",
								"size": "256k",
								"crc": "18D44BBA",
								"sha1": "028C17789BCB480537A41FD576AD4454724B8339"
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
