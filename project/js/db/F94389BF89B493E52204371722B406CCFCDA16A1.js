this.NesDb = this.NesDb || {};

NesDb[ 'F94389BF89B493E52204371722B406CCFCDA16A1' ] = {
	"$": {
		"name": "Déjà Vu",
		"class": "Licensed",
		"catalog": "NES-DG-SWE",
		"publisher": "Kemco",
		"developer": "Icom Simulations",
		"region": "Sweden",
		"players": "1",
		"date": "1992-09-24"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "39D43261",
				"sha1": "F94389BF89B493E52204371722B406CCFCDA16A1",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-07-07"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-10",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "SWE-DG-0 PRG",
								"size": "128k",
								"crc": "07259BA7",
								"sha1": "9AB2DDAA2181217D1FB6B05C5407DB008C78891E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SWE-DG-0 CHR",
								"size": "256k",
								"crc": "7CDF8B1A",
								"sha1": "B9A593B8C82DE7A4DE29F39A4C11415EAD75D995"
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
