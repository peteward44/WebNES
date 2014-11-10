this.NesDb = this.NesDb || {};

NesDb[ '748D702845DF060345FD621E4164A2B4CF4F2194' ] = {
	"$": {
		"name": "Gimmi a Break: Shijou Saikyou no Quiz Ou Ketteisen",
		"altname": "ギミア・ぶれいく 史上最強のクイズ王決定戦",
		"class": "Licensed",
		"catalog": "YZW-QY",
		"publisher": "Party Room 21",
		"developer": "",
		"region": "Japan",
		"players": "6",
		"date": "1991-12-13"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "partytap",
						"name": "Party Tap"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D9F45BE9",
				"sha1": "748D702845DF060345FD621E4164A2B4CF4F2194",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-03"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SGROM",
						"pcb": "HVC-SGROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "YZW-QY-0 PRG",
								"size": "128k",
								"crc": "D9F45BE9",
								"sha1": "748D702845DF060345FD621E4164A2B4CF4F2194"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
