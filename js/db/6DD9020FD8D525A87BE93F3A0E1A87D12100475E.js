this.NesDb = this.NesDb || {};

NesDb[ '6DD9020FD8D525A87BE93F3A0E1A87D12100475E' ] = {
	"$": {
		"name": "Princess Tomato in the Salad Kingdom",
		"class": "Licensed",
		"catalog": "NES-RT-USA",
		"publisher": "Hudson Soft",
		"developer": "Hudson Soft",
		"region": "USA",
		"players": "1",
		"date": "1991-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "56756615",
				"sha1": "6DD9020FD8D525A87BE93F3A0E1A87D12100475E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-05-28"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-RT-0 PRG",
								"size": "256k",
								"crc": "56756615",
								"sha1": "6DD9020FD8D525A87BE93F3A0E1A87D12100475E"
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
								"type": "MMC1B2"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
