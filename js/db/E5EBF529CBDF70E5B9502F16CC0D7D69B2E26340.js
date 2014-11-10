this.NesDb = this.NesDb || {};

NesDb[ 'E5EBF529CBDF70E5B9502F16CC0D7D69B2E26340' ] = {
	"$": {
		"name": "Home Alone",
		"class": "Licensed",
		"catalog": "NES-6N-USA",
		"publisher": "THQ",
		"developer": "Bethesda Softworks",
		"region": "USA",
		"players": "1",
		"date": "1991-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "CA5EDBFC",
				"sha1": "E5EBF529CBDF70E5B9502F16CC0D7D69B2E26340",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-03-19"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-08",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-6N-0 PRG",
								"size": "128k",
								"crc": "4F9F71DC",
								"sha1": "6D07C107A37FA4C7C3FD37A84A24FCB41EDDA47A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-6N-0 CHR",
								"size": "128k",
								"crc": "D795FC5F",
								"sha1": "6B1C3DE7183CE51E03A2B62FA74B663FB09E2904"
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
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
