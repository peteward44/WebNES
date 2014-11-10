this.NesDb = this.NesDb || {};

NesDb[ '2809B947227C8C703981C96D3007193434D5BCDD' ] = {
	"$": {
		"name": "Bad News Baseball",
		"class": "Licensed",
		"catalog": "NES-3B-USA",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "USA",
		"players": "2",
		"date": "1990-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "40DAFCBA",
				"sha1": "2809B947227C8C703981C96D3007193434D5BCDD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-3B-0 PRG",
								"size": "128k",
								"crc": "607F9765",
								"sha1": "BF61FF8A541F7387F898D5CF340E064C61C348BA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-3B-0 CHR",
								"size": "128k",
								"crc": "9CE28672",
								"sha1": "46C034D50C7759DEFBEE26F462975BABBEC87283"
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
