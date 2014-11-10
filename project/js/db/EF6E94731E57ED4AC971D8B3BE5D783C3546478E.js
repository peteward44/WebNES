this.NesDb = this.NesDb || {};

NesDb[ 'EF6E94731E57ED4AC971D8B3BE5D783C3546478E' ] = {
	"$": {
		"name": "Be-Bop High School: Koukousei Gokuraku Densetsu",
		"altname": "ビー・バップ・ハイスクール 高校生極楽伝説",
		"class": "Licensed",
		"catalog": "DFC-EP",
		"publisher": "Data East",
		"developer": "Data East",
		"region": "Japan",
		"players": "1",
		"date": "1988-03-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "2BFB1186",
				"sha1": "EF6E94731E57ED4AC971D8B3BE5D783C3546478E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "DFC-EP-0 PRG",
								"size": "128k",
								"crc": "190A3E11",
								"sha1": "C97F786DB3CF9AC8852A9B0ACEA9B4117C2C1B08"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DFC-EP-0 CHR",
								"size": "128k",
								"crc": "35560AFE",
								"sha1": "EF4EBA6B8294BEA625F30BE2E9A179F8B5B73ABA"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
