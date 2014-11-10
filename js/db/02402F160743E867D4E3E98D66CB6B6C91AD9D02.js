this.NesDb = this.NesDb || {};

NesDb[ '02402F160743E867D4E3E98D66CB6B6C91AD9D02' ] = {
	"$": {
		"name": "Namco Classic II",
		"altname": "ナムコクラシックⅡ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-FN2-5900",
		"publisher": "Namco",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1992-03-13"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "684B292F",
				"sha1": "02402F160743E867D4E3E98D66CB6B6C91AD9D02",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-07-08"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-163",
						"pcb": "60-21",
						"mapper": "19"
					},
					"prg": [
						{
							"$": {
								"size": "256k",
								"crc": "9A2B0641",
								"sha1": "781EE304241FDC19BBEC4A66FACE364C64D904B8"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "256k",
								"crc": "B4767C0B",
								"sha1": "AB8F97DE062BFA6103EBB1660DA9BDBE6F880271"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "<163>"
							}
						}
					]
				}
			]
		}
	]
};
