this.NesDb = this.NesDb || {};

NesDb[ '5D6997B11ED701F2085288AF4D1B6E8E99F35736' ] = {
	"$": {
		"name": "Ys III: Wanderers from Ys",
		"altname": "イースⅢ　ワンダラーズフロムイース",
		"class": "Licensed",
		"catalog": "VFR-Q8-12",
		"publisher": "Victor",
		"developer": "Nihon Falcom",
		"portdeveloper": "Advance Communication",
		"region": "Japan",
		"players": "1",
		"date": "1991-09-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "37B62D04",
				"sha1": "5D6997B11ED701F2085288AF4D1B6E8E99F35736",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-31"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKSROM",
						"pcb": "HVC-TKSROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "VFR-Q8-0 PRG",
								"size": "256k",
								"crc": "3B0FB600",
								"sha1": "F3B3B876C0DE347B178E277B057346D62142CFCC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "VFR-Q8-0 CHR",
								"size": "128k",
								"crc": "FD7E7E58",
								"sha1": "AD5DBA2687DB2626185087157C902C1840DAC6C7"
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
