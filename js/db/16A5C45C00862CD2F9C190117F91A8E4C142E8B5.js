this.NesDb = this.NesDb || {};

NesDb[ '16A5C45C00862CD2F9C190117F91A8E4C142E8B5' ] = {
	"$": {
		"name": "Captain Tsubasa",
		"altname": "キャプテン翼",
		"class": "Licensed",
		"catalog": "TCF-TP",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Japan",
		"players": "1",
		"date": "1988-04-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F3F1269D",
				"sha1": "16A5C45C00862CD2F9C190117F91A8E4C142E8B5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "TCF-TP-0 PRG",
								"size": "128k",
								"crc": "92873F0E",
								"sha1": "D5670D69694D4F6F5CA222260309B2200BD671B3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TCF-TP-0 CHR",
								"size": "128k",
								"crc": "462F6575",
								"sha1": "35701AE4B7B5D5232F3AC257921305137DC63457"
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
