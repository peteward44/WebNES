this.NesDb = this.NesDb || {};

NesDb[ '008AAD423DCDECCA9FC6B3BA8362556750E10AF5' ] = {
	"$": {
		"name": "Famicom Yakyuu Ban",
		"altname": "ファミコン野球盤",
		"class": "Licensed",
		"catalog": "EPO-EY",
		"publisher": "Epoch",
		"developer": "Sakata SAS",
		"region": "Japan",
		"players": "2",
		"date": "1989-12-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D0A9F4E1",
				"sha1": "008AAD423DCDECCA9FC6B3BA8362556750E10AF5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2012-05-06"
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
								"name": "EPO-EY-0 PRG",
								"size": "128k",
								"crc": "B6DC9AA7",
								"sha1": "5B961E7C84D7936EC9F831DE200C6073880CEFF0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "EPO-EY-0 CHR",
								"size": "128k",
								"crc": "1B7E629E",
								"sha1": "1AFDA11061A02F30FCCAAA4004E64914061655F7"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
