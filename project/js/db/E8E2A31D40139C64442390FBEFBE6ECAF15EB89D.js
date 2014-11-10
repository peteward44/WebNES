this.NesDb = this.NesDb || {};

NesDb[ 'E8E2A31D40139C64442390FBEFBE6ECAF15EB89D' ] = {
	"$": {
		"name": "Nangoku Shirei!! Spy vs. Spy",
		"altname": "南国指令！！スパイＶＳスパイ",
		"class": "Licensed",
		"catalog": "KSC-SI",
		"publisher": "Kemco",
		"developer": "First Star Software",
		"portdeveloper": "Kemco",
		"region": "Japan",
		"players": "2",
		"date": "1987-03-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "10D62149",
				"sha1": "E8E2A31D40139C64442390FBEFBE6ECAF15EB89D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-02",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "KSC-SI-0 PRG",
								"size": "128k",
								"crc": "10D62149",
								"sha1": "E8E2A31D40139C64442390FBEFBE6ECAF15EB89D"
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
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
