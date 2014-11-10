this.NesDb = this.NesDb || {};

NesDb[ '3B7C9A0988F6246D253379D5DE725602A202F68E' ] = {
	"$": {
		"name": "Hokuto no Ken 3: Shinseiki Souzou: Seiken Retsuden",
		"altname": "北斗の拳３ 新世紀創造 凄拳列伝",
		"class": "Licensed",
		"catalog": "TDF-K3",
		"publisher": "Toei Animation",
		"developer": "Shouei System",
		"region": "Japan",
		"players": "1",
		"date": "1989-10-19"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "771CE357",
				"sha1": "3B7C9A0988F6246D253379D5DE725602A202F68E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
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
								"name": "TDF-K3-0 PRG",
								"size": "256k",
								"crc": "771CE357",
								"sha1": "3B7C9A0988F6246D253379D5DE725602A202F68E"
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
