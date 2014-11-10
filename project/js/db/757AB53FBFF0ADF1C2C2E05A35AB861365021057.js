this.NesDb = this.NesDb || {};

NesDb[ '757AB53FBFF0ADF1C2C2E05A35AB861365021057' ] = {
	"$": {
		"name": "Shadowgate",
		"class": "Licensed",
		"catalog": "NES-3S-SWE",
		"publisher": "Kemco",
		"developer": "Icom Simulations",
		"region": "Sweden",
		"players": "1",
		"date": "1991-05-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "2B1497DC",
				"sha1": "757AB53FBFF0ADF1C2C2E05A35AB861365021057",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-07-06"
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
								"name": "SWE-3S-0 PRG",
								"size": "128k",
								"crc": "04D6B4F6",
								"sha1": "0E429A553A32AEBBD9D88377014F2956DDA7B1A1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SWE-3S-0 CHR",
								"size": "128k",
								"crc": "84A68F4B",
								"sha1": "74BF76DD76661208890EDD916281A58762D9F983"
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
