this.NesDb = this.NesDb || {};

NesDb[ '149ECA5642642BED5FD98B12D682235C02DEF342' ] = {
	"$": {
		"name": "Shadowgate",
		"class": "Licensed",
		"catalog": "NES-3S-FRA",
		"publisher": "Kemco",
		"developer": "Icom Simulations",
		"region": "France",
		"players": "1",
		"date": "1991-07-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "9F01687D",
				"sha1": "149ECA5642642BED5FD98B12D682235C02DEF342",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-11-05"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "FRA-3S-0 PRG",
								"size": "128k",
								"crc": "8ADE1526",
								"sha1": "A41C30914B28822033157B29742C86EC080A6831"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "FRA-3S-0 CHR",
								"size": "128k",
								"crc": "74A0D738",
								"sha1": "8B6D72D9464CBEAFE0E2370C84E52261E65C6FD6"
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
								"type": "MMC3B"
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
