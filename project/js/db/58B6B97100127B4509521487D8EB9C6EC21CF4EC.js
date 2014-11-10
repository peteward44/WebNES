this.NesDb = this.NesDb || {};

NesDb[ '58B6B97100127B4509521487D8EB9C6EC21CF4EC' ] = {
	"$": {
		"name": "Guevara",
		"altname": "ゲバラ",
		"class": "Licensed",
		"catalog": "SFX-GQ",
		"publisher": "SNK",
		"developer": "SNK",
		"region": "Japan",
		"players": "2",
		"date": "1988-12-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "63C4E122",
				"sha1": "58B6B97100127B4509521487D8EB9C6EC21CF4EC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-31"
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
								"name": "SFX-GQ-0 PRG",
								"size": "128k",
								"crc": "78DFB5D3",
								"sha1": "69D41350D9FAA4A13BFE94F4255BFF22519ED7AC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SFX-GQ-0 CHR",
								"size": "128k",
								"crc": "B039830A",
								"sha1": "72188F4094D46FE50C7F9F13F56B81602F8D6033"
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
