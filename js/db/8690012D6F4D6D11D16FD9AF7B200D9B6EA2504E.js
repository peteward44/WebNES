this.NesDb = this.NesDb || {};

NesDb[ '8690012D6F4D6D11D16FD9AF7B200D9B6EA2504E' ] = {
	"$": {
		"name": "Final Fantasy III",
		"altname": "ファイナルファンタジーIII",
		"class": "Licensed",
		"catalog": "SQF-FC",
		"publisher": "Square",
		"developer": "Square",
		"region": "Japan",
		"players": "1",
		"date": "1990-04-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "57E220D0",
				"sha1": "8690012D6F4D6D11D16FD9AF7B200D9B6EA2504E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TNROM",
						"pcb": "HVC-TNROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "SQF-FC-0 PRG",
								"size": "512k",
								"crc": "57E220D0",
								"sha1": "8690012D6F4D6D11D16FD9AF7B200D9B6EA2504E"
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
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	]
};
