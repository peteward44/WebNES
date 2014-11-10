this.NesDb = this.NesDb || {};

NesDb[ 'FF93357A36F2B946E02F1A826A04C4F8C73EDF1B' ] = {
	"$": {
		"name": "Woody Poco",
		"altname": "うっでいぽこ",
		"class": "Licensed",
		"catalog": "DBF-UP",
		"publisher": "dB-SOFT",
		"developer": "dB-SOFT",
		"region": "Japan",
		"players": "1",
		"date": "1987-06-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "ADB810F8",
				"sha1": "FF93357A36F2B946E02F1A826A04C4F8C73EDF1B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-21"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-03",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "dBF-UP-0 PRG",
								"size": "128k",
								"crc": "ADB810F8",
								"sha1": "FF93357A36F2B946E02F1A826A04C4F8C73EDF1B"
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
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
