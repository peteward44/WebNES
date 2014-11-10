this.NesDb = this.NesDb || {};

NesDb[ 'A74747BCDF980706F8CFC8D47642BCD16221649F' ] = {
	"$": {
		"name": "Hissatsu Shigoto Nin",
		"altname": "必殺仕事人",
		"class": "Licensed",
		"catalog": "BAP-X7",
		"publisher": "Banpresto",
		"developer": "Arc System Works",
		"region": "Japan",
		"players": "1",
		"date": "1990-12-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "5D105C10",
				"sha1": "A74747BCDF980706F8CFC8D47642BCD16221649F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "BAP-X7-0 PRG",
								"size": "256k",
								"crc": "D777D47D",
								"sha1": "21F4C8E7F012C00D48C4951A5FCFF09CAD125976"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BAP-X7-0 CHR",
								"size": "128k",
								"crc": "F330B640",
								"sha1": "CF9686E34B0E82FD1677CFEECB90F28641C0E195"
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
					]
				}
			]
		}
	]
};
