this.NesDb = this.NesDb || {};

NesDb[ '987DE59B4987056A29B53A11D93B76FCE4B34EAC' ] = {
	"$": {
		"name": "Metal Max",
		"altname": "メタルマックス",
		"class": "Licensed",
		"catalog": "DFC-26",
		"publisher": "Data East",
		"developer": "Data East",
		"region": "Japan",
		"players": "1",
		"date": "1991-05-24"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9509F703",
				"sha1": "987DE59B4987056A29B53A11D93B76FCE4B34EAC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "DFC-26-0 PRG",
								"size": "256k",
								"crc": "FD0299C3",
								"sha1": "29C30604B8936D9BE5EC885E0CEEB6C3C4B295FB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DFC-26-0 CHR",
								"size": "256k",
								"crc": "F1A551FF",
								"sha1": "80B324403E9F85342246BD36FC33386C2283DFE8"
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
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	]
};
