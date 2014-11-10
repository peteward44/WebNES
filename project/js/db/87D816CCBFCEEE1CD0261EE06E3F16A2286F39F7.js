this.NesDb = this.NesDb || {};

NesDb[ '87D816CCBFCEEE1CD0261EE06E3F16A2286F39F7' ] = {
	"$": {
		"name": "Toki no Tabibito: Time Stranger",
		"altname": "時空の旅人 TIME STRANGER",
		"class": "Licensed",
		"catalog": "KSC-TS",
		"publisher": "Kemco",
		"developer": "Kemco",
		"region": "Japan",
		"players": "1",
		"date": "1986-12-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C5CFE54E",
				"sha1": "87D816CCBFCEEE1CD0261EE06E3F16A2286F39F7",
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
								"name": "KSC-TS-0 PRG",
								"size": "128k",
								"crc": "C5CFE54E",
								"sha1": "87D816CCBFCEEE1CD0261EE06E3F16A2286F39F7"
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
