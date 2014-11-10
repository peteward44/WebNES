this.NesDb = this.NesDb || {};

NesDb[ '4BE98A8264DE50AA3853010F04615B492CC1C16B' ] = {
	"$": {
		"name": "Jeopardy!",
		"class": "Licensed",
		"catalog": "NES-JP-USA",
		"publisher": "GameTek",
		"developer": "Rare",
		"region": "USA",
		"players": "3",
		"date": "1988-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "B5D10D5C",
				"sha1": "4BE98A8264DE50AA3853010F04615B492CC1C16B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-03-01"
			},
			"board": [
				{
					"$": {
						"type": "NES-AOROM",
						"pcb": "NES-AOROM-01",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "NES-JP-0 PRG",
								"size": "128k",
								"crc": "B5D10D5C",
								"sha1": "4BE98A8264DE50AA3853010F04615B492CC1C16B"
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
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113A"
							}
						}
					]
				}
			]
		}
	]
};
