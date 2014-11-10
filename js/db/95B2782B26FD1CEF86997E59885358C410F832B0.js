this.NesDb = this.NesDb || {};

NesDb[ '95B2782B26FD1CEF86997E59885358C410F832B0' ] = {
	"$": {
		"name": "Hitler no Fukkatsu: Top Secret",
		"altname": "ヒットラーの復活",
		"class": "Licensed",
		"catalog": "CAP-HF",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "1",
		"date": "1988-07-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "16A0A3A3",
				"sha1": "95B2782B26FD1CEF86997E59885358C410F832B0",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-02"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "CAP-HF-0 PRG",
								"size": "256k",
								"crc": "16A0A3A3",
								"sha1": "95B2782B26FD1CEF86997E59885358C410F832B0"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
