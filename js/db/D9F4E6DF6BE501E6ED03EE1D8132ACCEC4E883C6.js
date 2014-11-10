this.NesDb = this.NesDb || {};

NesDb[ 'D9F4E6DF6BE501E6ED03EE1D8132ACCEC4E883C6' ] = {
	"$": {
		"name": "Konami Hyper Soccer",
		"class": "Licensed",
		"catalog": "NES-86-FRA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "France",
		"players": "2",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "D7B35F7D",
				"sha1": "D9F4E6DF6BE501E6ED03EE1D8132ACCEC4E883C6",
				"dump": "ok",
				"dumper": "Yakushi~Kabuto",
				"datedumped": "2010-12-12"
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
								"name": "PAL-86-0 PRG",
								"size": "128k",
								"crc": "D7B35F7D",
								"sha1": "D9F4E6DF6BE501E6ED03EE1D8132ACCEC4E883C6"
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
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
