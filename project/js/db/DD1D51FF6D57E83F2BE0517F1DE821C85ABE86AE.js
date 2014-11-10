this.NesDb = this.NesDb || {};

NesDb[ 'DD1D51FF6D57E83F2BE0517F1DE821C85ABE86AE' ] = {
	"$": {
		"name": "Fire Emblem: Ankokuryuu to Hikari no Ken",
		"altname": "ファイアーエムブレム　暗黒竜と光の剣",
		"class": "Licensed",
		"catalog": "HVC-VX",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "1",
		"date": "1990-04-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "97CAD370",
				"sha1": "DD1D51FF6D57E83F2BE0517F1DE821C85ABE86AE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-FKROM",
						"pcb": "HVC-FKROM-01",
						"mapper": "10"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-VX-0 PRG",
								"size": "256k",
								"crc": "2078DCE4",
								"sha1": "A74C0760F32F5131D4FEB67694123FDA6B7DA24F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-VX-0 CHR",
								"size": "128k",
								"crc": "8118B30B",
								"sha1": "98EE1568073C6C41425E4A381CF588433AC9FC97"
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
								"type": "MM1026"
							}
						},
						{
							"$": {
								"type": "MMC-4"
							}
						}
					]
				}
			]
		}
	]
};
