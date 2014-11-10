this.NesDb = this.NesDb || {};

NesDb[ '81074D89B619D97E544B3CB6F4BA781BAF49C72F' ] = {
	"$": {
		"name": "Teenage Mutant Ninja Turtles 2: The Manhattan Project",
		"altname": "チイーネーソ　ミュータント　ニンジャ　タートルス　ザマンハッタンプロジェクト",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC863",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1991-12-13"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "490E8A4C",
				"sha1": "81074D89B619D97E544B3CB6F4BA781BAF49C72F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-01-24"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-4",
						"pcb": "352400",
						"mapper": "25"
					},
					"prg": [
						{
							"$": {
								"name": "RC863J00P",
								"size": "256k",
								"crc": "5F82CB7D",
								"sha1": "B004AD1C691DE84E41AA092D4E65D218B20AAFCA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC863J00C",
								"size": "256k",
								"crc": "4AA9B12A",
								"sha1": "0F186C0BF66954EEEDA7566F785180A2D1E7E773"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "VRC4"
							},
							"pin": [
								{
									"$": {
										"number": "3",
										"function": "PRG A2"
									}
								},
								{
									"$": {
										"number": "4",
										"function": "PRG A3"
									}
								}
							]
						}
					]
				}
			]
		}
	]
};
