this.NesDb = this.NesDb || {};

NesDb[ 'AEE6BB2338E71CC9390FBB845225C19E194CDD21' ] = {
	"$": {
		"name": "Space Harrier",
		"altname": "スペースハリアー",
		"class": "Licensed",
		"catalog": "TFC-SO",
		"publisher": "Takara",
		"developer": "Sega",
		"region": "Japan",
		"players": "1",
		"date": "1989-01-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "43539A3C",
				"sha1": "AEE6BB2338E71CC9390FBB845225C19E194CDD21",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-27"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SGROM",
						"pcb": "HVC-SGROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "TFC-SO-0 PRG",
								"size": "128k",
								"crc": "43539A3C",
								"sha1": "AEE6BB2338E71CC9390FBB845225C19E194CDD21"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
