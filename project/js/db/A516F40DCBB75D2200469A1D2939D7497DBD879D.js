this.NesDb = this.NesDb || {};

NesDb[ 'A516F40DCBB75D2200469A1D2939D7497DBD879D' ] = {
	"$": {
		"name": "Money Game, The",
		"altname": "ザ・マネーゲーム",
		"class": "Licensed",
		"catalog": "SFL-MY",
		"publisher": "Sofel",
		"developer": "Sofel",
		"region": "Japan",
		"players": "1",
		"date": "1988-08-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "CFD4A281",
				"sha1": "A516F40DCBB75D2200469A1D2939D7497DBD879D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-09"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SJROM",
						"pcb": "HVC-SJROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "SFL-MY-0 PRG",
								"size": "128k",
								"crc": "8CE9C87B",
								"sha1": "B4B93631B86BF3863058375718BE43C59A37DD65"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SFL-MY-0 CHR",
								"size": "32k",
								"crc": "0F61A72A",
								"sha1": "A9A72D461662B63964EA7306D01310AB1975D9B8"
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
