this.NesDb = this.NesDb || {};

NesDb[ '022FACF54615AD37D269AC8F561DA6FF51334CC1' ] = {
	"$": {
		"name": "Schlümpfe, Die",
		"altname": "The Smurfs",
		"class": "Licensed",
		"catalog": "NES-SF-NOE",
		"publisher": "Infogrames",
		"developer": "Bit Managers",
		"region": "Germany",
		"players": "1",
		"date": "1995-12-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "4022C94E",
				"sha1": "022FACF54615AD37D269AC8F561DA6FF51334CC1",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-11-01"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-10",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-SF-0 PRG",
								"size": "128k",
								"crc": "4022C94E",
								"sha1": "022FACF54615AD37D269AC8F561DA6FF51334CC1"
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
