this.NesDb = this.NesDb || {};

NesDb[ '136D0406CE11BBB8C4727F5522FE8E640971F5CA' ] = {
	"$": {
		"name": "Kiteretsu Daihyakka",
		"altname": "キテレツ大百科",
		"class": "Licensed",
		"catalog": "EPO-KT",
		"publisher": "Epoch",
		"developer": "Epoch",
		"region": "Japan",
		"players": "1",
		"date": "1990-02-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "DB479677",
				"sha1": "136D0406CE11BBB8C4727F5522FE8E640971F5CA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
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
								"name": "EPO-KT-0 PRG",
								"size": "128k",
								"crc": "CBD413A9",
								"sha1": "A885F2D4FFEB8CDF7D9F980E70DEBA3C1F3E317F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "EPO-KT-0 CHR",
								"size": "128k",
								"crc": "6E0DC667",
								"sha1": "8AF07A92396E9C2FC0B547AA83FCDB750FD1AEB7"
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
