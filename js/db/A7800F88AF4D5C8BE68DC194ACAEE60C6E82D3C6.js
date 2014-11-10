this.NesDb = this.NesDb || {};

NesDb[ 'A7800F88AF4D5C8BE68DC194ACAEE60C6E82D3C6' ] = {
	"$": {
		"name": "Casino Derby",
		"altname": "カジノ・ダービー",
		"class": "Licensed",
		"catalog": "YZW-KD",
		"publisher": "Party Room 21",
		"developer": "Outback",
		"region": "Japan",
		"players": "1",
		"date": "1993-03-19"
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
				"crc": "E44001D8",
				"sha1": "A7800F88AF4D5C8BE68DC194ACAEE60C6E82D3C6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
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
								"name": "YZW-KD-0 PRG",
								"size": "128k",
								"crc": "E44001D8",
								"sha1": "A7800F88AF4D5C8BE68DC194ACAEE60C6E82D3C6"
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
