this.NesDb = this.NesDb || {};

NesDb[ '3AE1C82AD66C5DCDB915A26AF3A8FCBAF68B1975' ] = {
	"$": {
		"name": "Perfect Bowling",
		"altname": "パーフェクトボーリング",
		"class": "Licensed",
		"catalog": "TKS-G8",
		"publisher": "Tonkin House",
		"developer": "Aisystem Tokyo",
		"region": "Japan",
		"players": "4",
		"date": "1989-07-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9ECB9DCD",
				"sha1": "3AE1C82AD66C5DCDB915A26AF3A8FCBAF68B1975",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SFROM",
						"pcb": "HVC-SFROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "TKS-G8-0 PRG",
								"size": "128k",
								"crc": "10327E0E",
								"sha1": "DCF962A27BCB580EE9D317D9CFCC9840A40651ED"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TKS-G8-0 CHR",
								"size": "32k",
								"crc": "5B9698E2",
								"sha1": "5459D5BB7602349D6CF2772640D115106CD7B9E9"
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
