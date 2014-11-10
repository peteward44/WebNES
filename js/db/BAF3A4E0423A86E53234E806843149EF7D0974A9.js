this.NesDb = this.NesDb || {};

NesDb[ 'BAF3A4E0423A86E53234E806843149EF7D0974A9' ] = {
	"$": {
		"name": "Pachio-kun 4",
		"altname": "パチ夫くん４",
		"class": "Licensed",
		"catalog": "CDS-84",
		"publisher": "Coconuts",
		"developer": "Marionette",
		"region": "Japan",
		"players": "1",
		"date": "1991-11-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E08C8A60",
				"sha1": "BAF3A4E0423A86E53234E806843149EF7D0974A9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TNROM",
						"pcb": "HVC-TNROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "CDS-84-0 PRG",
								"size": "512k",
								"crc": "E08C8A60",
								"sha1": "BAF3A4E0423A86E53234E806843149EF7D0974A9"
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
								"type": "MMC3C"
							}
						}
					]
				}
			]
		}
	]
};
