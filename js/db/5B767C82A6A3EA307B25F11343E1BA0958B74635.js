this.NesDb = this.NesDb || {};

NesDb[ '5B767C82A6A3EA307B25F11343E1BA0958B74635' ] = {
	"$": {
		"name": "Chuugoku Janshi Story: Tonpuu",
		"altname": "中国雀士ストーリー 東風",
		"class": "Licensed",
		"catalog": "NAT-T8",
		"publisher": "Natsume",
		"developer": "Zap",
		"region": "Japan",
		"players": "1",
		"date": "1989-12-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "5AB54795",
				"sha1": "5B767C82A6A3EA307B25F11343E1BA0958B74635",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-27"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NAT-T8-0 PRG",
								"size": "128k",
								"crc": "0CABBF0F",
								"sha1": "0827B2FC482A2665625090D3083525F1B69C9E7C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAT-T8-0 CHR",
								"size": "128k",
								"crc": "DF44E6EB",
								"sha1": "EBFA5331AF70D0E1D56AB3B55E628EAC7873F636"
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
