this.NesDb = this.NesDb || {};

NesDb[ 'CD95D48536382AC6C3182BD89023DC6FEB20A2D8' ] = {
	"$": {
		"name": "Battle Stadium: Senbatsu Pro Yakyuu",
		"altname": "バトルスタジアム",
		"class": "Licensed",
		"catalog": "IGS-X8",
		"publisher": "IGS",
		"developer": "Alfa System",
		"region": "Japan",
		"players": "2",
		"date": "1990-12-20"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "battlebox",
						"name": "Battle Box"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "61A852EA",
				"sha1": "CD95D48536382AC6C3182BD89023DC6FEB20A2D8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "IGS-X8-0 PRG",
								"size": "128k",
								"crc": "F18180CB",
								"sha1": "65B3A8AD275C81455813E9A21537301D98E40A74"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "IGS-X8-0 CHR",
								"size": "128k",
								"crc": "F06451BA",
								"sha1": "1DF8E641061001D565C5C8FAB4A7D530CA69AC8C"
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
