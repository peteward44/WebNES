this.NesDb = this.NesDb || {};

NesDb[ 'DBA7F9062891512736327FE09EFAE802B21FAF4D' ] = {
	"$": {
		"name": "Pachio-kun 2",
		"altname": "パチ夫くん２",
		"class": "Licensed",
		"catalog": "CDS-P2",
		"publisher": "Coconuts",
		"developer": "Marionette",
		"region": "Japan",
		"players": "1",
		"date": "1989-01-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "291BCD7D",
				"sha1": "DBA7F9062891512736327FE09EFAE802B21FAF4D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SGROM",
						"pcb": "HVC-SGROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "CDS-P2-0 PRG",
								"size": "256k",
								"crc": "291BCD7D",
								"sha1": "DBA7F9062891512736327FE09EFAE802B21FAF4D"
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
