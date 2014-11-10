this.NesDb = this.NesDb || {};

NesDb[ '062FB8526334D7A5A70F3BD72658F882DC5BFA7D' ] = {
	"$": {
		"name": "Dai Kaijuu: Deburas",
		"altname": "大怪獣 デブラス",
		"class": "Licensed",
		"catalog": "DFC-24",
		"publisher": "Data East",
		"developer": "Data East",
		"region": "Japan",
		"players": "1",
		"date": "1990-12-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "956E3D90",
				"sha1": "062FB8526334D7A5A70F3BD72658F882DC5BFA7D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-03"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "DFC-24-0 PRG",
								"size": "128k",
								"crc": "A9A0D729",
								"sha1": "AD2A1478AF3B6D1150AC1E87FDA6388DAB392510"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DFC-24-0 CHR",
								"size": "256k",
								"crc": "BCEAFF09",
								"sha1": "65EDC8D2830EE2C1BAEA12EDAD411EFC10BB142E"
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
