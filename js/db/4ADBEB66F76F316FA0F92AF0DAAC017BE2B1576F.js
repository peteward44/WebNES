this.NesDb = this.NesDb || {};

NesDb[ '4ADBEB66F76F316FA0F92AF0DAAC017BE2B1576F' ] = {
	"$": {
		"name": "Armadillo",
		"altname": "アルマジロ",
		"class": "Licensed",
		"catalog": "IGS-9T",
		"publisher": "IGS",
		"developer": "AIM",
		"region": "Japan",
		"players": "2",
		"date": "1991-08-09"
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
				"crc": "78B657AC",
				"sha1": "4ADBEB66F76F316FA0F92AF0DAAC017BE2B1576F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2008-04-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TLSROM",
						"pcb": "HVC-TLSROM-01",
						"mapper": "118"
					},
					"prg": [
						{
							"$": {
								"name": "IGS-9T-0 PRG",
								"size": "256k",
								"crc": "CF3B904C",
								"sha1": "6AD31C2000C804CB2B80B284EEF0696F954FC664"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "IGS-9T-0 CHR",
								"size": "128k",
								"crc": "1AB62D42",
								"sha1": "2E398EE2380449D54A370952E7296AB275D830D6"
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
