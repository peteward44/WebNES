this.NesDb = this.NesDb || {};

NesDb[ '14D0C6FDFEDC0347D809660A96DFB4B7069C4172' ] = {
	"$": {
		"name": "Deja Vu: Akumu wa Hotouni Yatte Raita",
		"altname": "ディジャブ　悪魔は本当にやって来た",
		"class": "Licensed",
		"catalog": "KSC-DG",
		"publisher": "Kemco",
		"developer": "Icom Simulations",
		"region": "Japan",
		"players": "1",
		"date": "1988-11-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F053AC5F",
				"sha1": "14D0C6FDFEDC0347D809660A96DFB4B7069C4172",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "KSC-DG-0 PRG",
								"size": "128k",
								"crc": "D4042702",
								"sha1": "613B4924807C0B32B138B92C516D618D8F5A449F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KSC-DG-0 CHR",
								"size": "256k",
								"crc": "8F0B2365",
								"sha1": "05591F4AD1713131DCBE19F8A137F1941CE8A628"
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
