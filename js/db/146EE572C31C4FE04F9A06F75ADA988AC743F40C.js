this.NesDb = this.NesDb || {};

NesDb[ '146EE572C31C4FE04F9A06F75ADA988AC743F40C' ] = {
	"$": {
		"name": "Wizardry III: Diamond no Kishi",
		"altname": "ウィザードリィⅢ・ダイヤモンドの騎士",
		"class": "Licensed",
		"catalog": "HSP-32",
		"publisher": "ASCII",
		"developer": "Sir-Tech Software",
		"portdeveloper": "Game Studio",
		"region": "Japan",
		"players": "1",
		"date": "1990-03-09"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "turbofile",
						"name": "TurboFile"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "5C123EF7",
				"sha1": "146EE572C31C4FE04F9A06F75ADA988AC743F40C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "HSP-32-0 PRG",
								"size": "128k",
								"crc": "33D07E45",
								"sha1": "ED60BEBCA40819F0901DA177115C835E770D0F74"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HSP-32-0 CHR",
								"size": "128k",
								"crc": "42E371DB",
								"sha1": "3A1546E26A02D5CEB13BFE35AAE2AAC8F5B13548"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3A"
							}
						}
					]
				}
			]
		}
	]
};
