this.NesDb = this.NesDb || {};

NesDb[ '4F55AFAF521841B3D50F8076BE674321C1CF4623' ] = {
	"$": {
		"name": "Super Cars",
		"class": "Licensed",
		"catalog": "NES-6S-USA",
		"publisher": "Electro Brain",
		"developer": "Gremlin",
		"region": "USA",
		"players": "1",
		"date": "1991-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "419461D0",
				"sha1": "4F55AFAF521841B3D50F8076BE674321C1CF4623",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-17"
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
								"name": "NES-6S-0 PRG",
								"size": "128k",
								"crc": "419461D0",
								"sha1": "4F55AFAF521841B3D50F8076BE674321C1CF4623"
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
								"type": "6113B1"
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
