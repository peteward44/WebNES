this.NesDb = this.NesDb || {};

NesDb[ '5B26C00AD2CD2DB81783AB039B2142E7B0A784D8' ] = {
	"$": {
		"name": "Igo: Kyuu Roban Taikyoku",
		"altname": "囲碁 九路盤対局",
		"class": "Licensed",
		"catalog": "BPS-IG",
		"publisher": "Bullet-Proof Software",
		"developer": "Edge Computers",
		"portdeveloper": "Bullet-Proof Software",
		"region": "Japan",
		"players": "2",
		"date": "1987-08-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9B208AB1",
				"sha1": "5B26C00AD2CD2DB81783AB039B2142E7B0A784D8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SIROM",
						"pcb": "HVC-SIROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "BPS-IG-0 PRG",
								"size": "32k",
								"crc": "B37F48CD",
								"sha1": "9DBA6C7B32CBCB82063541CE1B36755CFDE73956"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BPS-IG-0 CHR",
								"size": "16k",
								"crc": "C9DAFBCB",
								"sha1": "435CD57BB48C209AFB8ADE8429FC9BA13D8A5737"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
