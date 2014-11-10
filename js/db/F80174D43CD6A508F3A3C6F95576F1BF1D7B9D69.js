this.NesDb = this.NesDb || {};

NesDb[ 'F80174D43CD6A508F3A3C6F95576F1BF1D7B9D69' ] = {
	"$": {
		"name": "Mezase Pachi Pro: Pachio-kun",
		"altname": "目指せパチプロ パチ夫くん",
		"class": "Licensed",
		"catalog": "CDS-PA",
		"publisher": "Coconuts",
		"developer": "Marionette",
		"region": "Japan",
		"players": "1",
		"date": "1987-12-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9C3E8FC0",
				"sha1": "F80174D43CD6A508F3A3C6F95576F1BF1D7B9D69",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-21"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SGROM",
						"pcb": "HVC-SGROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "CDS-PA-0 PRG",
								"size": "128k",
								"crc": "9C3E8FC0",
								"sha1": "F80174D43CD6A508F3A3C6F95576F1BF1D7B9D69"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
