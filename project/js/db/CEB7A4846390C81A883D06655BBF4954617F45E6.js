this.NesDb = this.NesDb || {};

NesDb[ 'CEB7A4846390C81A883D06655BBF4954617F45E6' ] = {
	"$": {
		"name": "Mad City",
		"altname": "マッド・シティ",
		"class": "Licensed",
		"catalog": "KDS-MU",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1988-08-12"
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
				"system": "Famicom",
				"crc": "DF3E45D2",
				"sha1": "CEB7A4846390C81A883D06655BBF4954617F45E6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2008-04-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KDS-MU-0 PRG",
								"size": "128k",
								"crc": "E4C04EEA",
								"sha1": "C0775916AE838057B34751B342F9DB60C0E7FE92"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KDS-MU-0 CHR",
								"size": "128k",
								"crc": "885FFF4A",
								"sha1": "E851F0853FF4F26289193D25BEFAC9EF20633882"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
