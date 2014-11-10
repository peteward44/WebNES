this.NesDb = this.NesDb || {};

NesDb[ 'B7C8E914CCCE4B8BBD07B651D5ED0EC14752D189' ] = {
	"$": {
		"name": "Dragons of Flame, Advanced Dungeons & Dragons",
		"altname": "ＡＤ＆Ｄ ドラゴンオブフレイム",
		"class": "Licensed",
		"catalog": "PNF-OF (R68V5941)",
		"publisher": "Pony Canyon",
		"developer": "Strategic Simulations",
		"portdeveloper": "Atelier Double",
		"region": "Japan",
		"players": "1",
		"date": "1992-02-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E616FF0A",
				"sha1": "B7C8E914CCCE4B8BBD07B651D5ED0EC14752D189",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-03"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PNF-OF-0 PRG",
								"size": "128k",
								"crc": "1E0C7EA3",
								"sha1": "178F2B6EEBA64ADF8812DC56DCACDB2AFD2D28EE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PNF-OF-0 CHR",
								"size": "128k",
								"crc": "EA637671",
								"sha1": "B7EA243C40040F86AC879990BD6F69DDCE54F2D0"
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
