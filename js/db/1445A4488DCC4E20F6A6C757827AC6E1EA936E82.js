this.NesDb = this.NesDb || {};

NesDb[ '1445A4488DCC4E20F6A6C757827AC6E1EA936E82' ] = {
	"$": {
		"name": "Operation Wolf: Take no Prisoners",
		"class": "Licensed",
		"catalog": "NES-OW-AUS",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "Australia",
		"players": "1",
		"date": "1992"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "zapper",
						"name": "Zapper Light Gun"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "5529431F",
				"sha1": "1445A4488DCC4E20F6A6C757827AC6E1EA936E82",
				"dump": "ok",
				"dumper": "B00daW",
				"datedumped": "2008-10-21"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-OW-0 PRG",
								"size": "128k",
								"crc": "54C34223",
								"sha1": "3CFB33AE21278B4F03CB6E531E7A4D84CD1A5E25"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-OW-1 CHR",
								"size": "128k",
								"crc": "B6C77A38",
								"sha1": "EE6BF933D33320CFAC050C24353DFFC98AB711F4"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B3"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	]
};
