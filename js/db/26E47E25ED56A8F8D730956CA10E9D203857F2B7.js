this.NesDb = this.NesDb || {};

NesDb[ '26E47E25ED56A8F8D730956CA10E9D203857F2B7' ] = {
	"$": {
		"name": "Battle Storm",
		"altname": "バトルストーム",
		"class": "Licensed",
		"catalog": "YZW-9Y",
		"publisher": "Party Room 21",
		"developer": "Bullet-Proof Software",
		"region": "Japan",
		"players": "2",
		"date": "1991-12-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8E373118",
				"sha1": "26E47E25ED56A8F8D730956CA10E9D203857F2B7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
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
								"name": "YZW-9Y-0 PRG",
								"size": "128k",
								"crc": "88739ADF",
								"sha1": "8C6DDA76E8C93A48C4C101D867605CD4B222B816"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "YZW-9Y-0 CHR",
								"size": "128k",
								"crc": "F957A5E7",
								"sha1": "062857F1EE12B7A05A307A7678C2580D0C0D68E6"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B3"
							}
						}
					]
				}
			]
		}
	]
};
