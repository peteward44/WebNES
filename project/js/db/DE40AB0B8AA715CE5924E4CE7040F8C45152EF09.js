this.NesDb = this.NesDb || {};

NesDb[ 'DE40AB0B8AA715CE5924E4CE7040F8C45152EF09' ] = {
	"$": {
		"name": "Cosmic Epsilon",
		"altname": "コズミックイプシロン",
		"class": "Licensed",
		"catalog": "ASM-EO",
		"publisher": "Asmik",
		"developer": "Home Data",
		"region": "Japan",
		"players": "1",
		"date": "1989-11-24"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "3dglasses",
						"name": "3-D Glasses"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "DC75732F",
				"sha1": "DE40AB0B8AA715CE5924E4CE7040F8C45152EF09",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TLROM",
						"pcb": "HVC-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "ASM-EO-0 PRG",
								"size": "128k",
								"crc": "AB4AC985",
								"sha1": "D919915EEF14F9769AEE6F3A6D48E949C83EE77D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "ASM-EO-0 CHR",
								"size": "256k",
								"crc": "2360540C",
								"sha1": "DC5CE15262C7FE18AD948E7970F1787498C67422"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3A"
							}
						}
					]
				}
			]
		}
	]
};
