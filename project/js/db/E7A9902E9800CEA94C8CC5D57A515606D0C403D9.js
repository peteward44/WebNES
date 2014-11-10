this.NesDb = this.NesDb || {};

NesDb[ 'E7A9902E9800CEA94C8CC5D57A515606D0C403D9' ] = {
	"$": {
		"name": "Famicom Meijin Sen",
		"altname": "ファミコン名人戦",
		"class": "Licensed",
		"catalog": "SFX-MQ",
		"publisher": "SNK",
		"developer": "SNK",
		"region": "Japan",
		"players": "1",
		"date": "1988-09-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9CFA55E7",
				"sha1": "E7A9902E9800CEA94C8CC5D57A515606D0C403D9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "SFX-MQ-0 PRG",
								"size": "128k",
								"crc": "740C8108",
								"sha1": "E5A0CCB0FAD09BF575BA00C816E611EFE054A98B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SFX-MQ-0 CHR",
								"size": "128k",
								"crc": "59720FED",
								"sha1": "1B8C6B39B568B9533F4CECC1757D9D152311C1E9"
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
