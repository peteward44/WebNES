this.NesDb = this.NesDb || {};

NesDb[ '00147962462C44354735861D0258D72314635458' ] = {
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
				"revision": "A",
				"crc": "F31D36A3",
				"sha1": "00147962462C44354735861D0258D72314635458",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-10"
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
								"name": "NES-6N-1 PRG",
								"size": "128k",
								"crc": "96788826",
								"sha1": "8B7DFAF759CFE05D2B64764488D48C29ACDE6545"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-6N-1 CHR",
								"size": "128k",
								"crc": "19254115",
								"sha1": "C0A6702BC8BD1D25F2754DE725D8C9FF7A7331CE"
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
								"type": "MMC3C"
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
