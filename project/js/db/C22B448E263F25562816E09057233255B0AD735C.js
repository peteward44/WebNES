this.NesDb = this.NesDb || {};

NesDb[ 'C22B448E263F25562816E09057233255B0AD735C' ] = {
	"$": {
		"name": "Barker Bill's Trick Shooting",
		"class": "Licensed",
		"catalog": "NES-ZT-SCN",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Scandinavia",
		"players": "1",
		"date": "1991-06-27"
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
				"system": "NES-PAL-B",
				"crc": "1F6660E6",
				"sha1": "C22B448E263F25562816E09057233255B0AD735C",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-09-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-SCROM",
						"pcb": "NES-SCROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-ZT-0 PRG",
								"size": "64k",
								"crc": "2970D05B",
								"sha1": "E0BB71D086FCE8836555AAFB8F2EF4A26B5C4BF0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-ZT-0 CHR",
								"size": "128k",
								"crc": "A0A5A968",
								"sha1": "49D41D257CD52C20A630B8FAEA64CB54B2D5E1E8"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
