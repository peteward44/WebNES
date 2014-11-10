this.NesDb = this.NesDb || {};

NesDb[ '999ACA2DFDBDCC164DDAB12282290247F4CE21E1' ] = {
	"$": {
		"name": "Probotector",
		"class": "Licensed",
		"catalog": "NES-77-EEC",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Europe",
		"players": "2",
		"date": "1990-12-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "B13F00D4",
				"sha1": "999ACA2DFDBDCC164DDAB12282290247F4CE21E1",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-77-0 PRG",
								"size": "128k",
								"crc": "B13F00D4",
								"sha1": "999ACA2DFDBDCC164DDAB12282290247F4CE21E1"
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
					"cic": [
						{
							"$": {
								"type": "3195A"
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
