this.NesDb = this.NesDb || {};

NesDb[ '65B6D12F3009C83110C2AEB18F3E3F439AA9DFA8' ] = {
	"$": {
		"name": "Palamedes",
		"altname": "パラメデス",
		"class": "Licensed",
		"catalog": "GAM-JI-07",
		"publisher": "HOT・B",
		"developer": "HOT・B",
		"region": "Japan",
		"players": "2",
		"date": "1990-07-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C6B5D7E0",
				"sha1": "65B6D12F3009C83110C2AEB18F3E3F439AA9DFA8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SEROM",
						"pcb": "SE-01A",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "35E3EEA2",
								"sha1": "4626040D1FE40C221EE750921F2FB0DB4B3364DD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "2CD6479B",
								"sha1": "FEF31C5E8BAB87C31683BEEF40B05C478C197C51"
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
