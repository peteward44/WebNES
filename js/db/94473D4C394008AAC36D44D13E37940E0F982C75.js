this.NesDb = this.NesDb || {};

NesDb[ '94473D4C394008AAC36D44D13E37940E0F982C75' ] = {
	"$": {
		"name": "Jajamaru Gekimaden: Maboroshi no Kinmajou",
		"altname": "じゃじゃ丸撃魔伝 幻の金魔城",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "JF-27",
		"publisher": "Jaleco",
		"developer": "Jaleco",
		"region": "Japan",
		"players": "1",
		"date": "1990-05-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "0F1BABE7",
				"sha1": "94473D4C394008AAC36D44D13E37940E0F982C75",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-01-21"
			},
			"board": [
				{
					"$": {
						"type": "JALECO-JF-27",
						"pcb": "JF-27B",
						"mapper": "18"
					},
					"prg": [
						{
							"$": {
								"name": "JF-27 PRG",
								"size": "128k",
								"crc": "424EC0A6",
								"sha1": "F631A3CF417BAA42C91B268F6F74DB00299439AE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "JF-27 CHR",
								"size": "128k",
								"crc": "4CDD2416",
								"sha1": "3BFB9888F535CEB6E5E3BA2492C934773F2F2FE5"
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
								"type": "SS88006"
							}
						}
					]
				}
			]
		}
	]
};
