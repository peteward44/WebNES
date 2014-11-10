this.NesDb = this.NesDb || {};

NesDb[ '05B791369A42E4999847374D3FE304D5678AD75C' ] = {
	"$": {
		"name": "Family Trainer 8: Totsugeki! Fuun Takeshijou",
		"altname": "ファミリートレーナー⑧ 突撃!風雲たけし城",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "FT-08",
		"publisher": "Bandai",
		"developer": "Human Entertainment",
		"region": "Japan",
		"players": "1",
		"date": "1987-12-28"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "familytrainer",
						"name": "Family Trainer Mat"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8A12A7D9",
				"sha1": "05B791369A42E4999847374D3FE304D5678AD75C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-09-08"
			},
			"board": [
				{
					"$": {
						"type": "BANDAI-CNROM",
						"pcb": "BA-タケシジヨウ",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "BA-TAKESHI-PRG",
								"size": "32k",
								"crc": "59794F2D",
								"sha1": "06F424509451B30682362B7BC6C23D02D34EE930"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BA-TAKESHI-CHR",
								"size": "32k",
								"crc": "5B5A3616",
								"sha1": "9D1CF8467526EEC2F89F7D82DF71B467B38E19AB"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
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
