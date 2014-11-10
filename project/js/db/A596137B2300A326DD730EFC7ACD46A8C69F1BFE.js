this.NesDb = this.NesDb || {};

NesDb[ 'A596137B2300A326DD730EFC7ACD46A8C69F1BFE' ] = {
	"$": {
		"name": "Conan",
		"class": "Licensed",
		"catalog": "NES-YY-USA",
		"publisher": "Mindscape",
		"developer": "System 3",
		"region": "USA",
		"players": "1",
		"date": "1991-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "C6000085",
				"sha1": "A596137B2300A326DD730EFC7ACD46A8C69F1BFE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-10-09"
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
								"name": "NES-YY-0 PRG",
								"size": "128k",
								"crc": "C6000085",
								"sha1": "A596137B2300A326DD730EFC7ACD46A8C69F1BFE"
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
