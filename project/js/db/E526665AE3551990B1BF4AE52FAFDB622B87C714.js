this.NesDb = this.NesDb || {};

NesDb[ 'E526665AE3551990B1BF4AE52FAFDB622B87C714' ] = {
	"$": {
		"name": "Conflict",
		"altname": "コンフリクト",
		"class": "Licensed",
		"catalog": "VIC-C3",
		"publisher": "Vic Tokai",
		"developer": "Vic Tokai",
		"region": "Japan",
		"players": "2",
		"date": "1989-12-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A6648353",
				"sha1": "E526665AE3551990B1BF4AE52FAFDB622B87C714",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "VIC-C3-0 PRG",
								"size": "128k",
								"crc": "6A10ADD2",
								"sha1": "2FA75F7DB7D581F332603DB5C4DDEAA4F8707C22"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "VIC-C3-0 CHR",
								"size": "128k",
								"crc": "2FC28BEA",
								"sha1": "0849F013BF9FEF57F62F48A9B5705A191A3F9384"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
