this.NesDb = this.NesDb || {};

NesDb[ '29F5B12F89AA6150FB34CBA0D5F6505F8F611582' ] = {
	"$": {
		"name": "Law of the West",
		"altname": "ロウ・オブ・ザ・ウエスト",
		"class": "Licensed",
		"catalog": "PNF-LW (R53V5907)",
		"publisher": "Pony Canyon",
		"developer": "Accolade",
		"portdeveloper": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1987-03-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "AE128FAC",
				"sha1": "29F5B12F89AA6150FB34CBA0D5F6505F8F611582",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-02",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PNF-LW-0 PRG",
								"size": "128k",
								"crc": "AE128FAC",
								"sha1": "29F5B12F89AA6150FB34CBA0D5F6505F8F611582"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
