this.NesDb = this.NesDb || {};

NesDb[ 'DDEBE86096DAF3B6DCD714C33A91E912F91DA7CE' ] = {
	"$": {
		"name": "Gimmi a Break: Shijou Saikyou no Quiz Ou Ketteisen 2",
		"altname": "ギミア・ぶれいく 史上最強のクイズ王決定戦２",
		"class": "Licensed",
		"catalog": "YZW-QP",
		"publisher": "Party Room 21",
		"developer": "Outback",
		"region": "Japan",
		"players": "6",
		"date": "1992-08-28"
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
				"crc": "1545BD13",
				"sha1": "DDEBE86096DAF3B6DCD714C33A91E912F91DA7CE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
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
								"name": "YZW-QP-0 PRG",
								"size": "256k",
								"crc": "1545BD13",
								"sha1": "DDEBE86096DAF3B6DCD714C33A91E912F91DA7CE"
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
								"type": "MMC1B3"
							}
						}
					]
				}
			]
		}
	]
};
