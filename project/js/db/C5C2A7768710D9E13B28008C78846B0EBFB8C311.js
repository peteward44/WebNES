this.NesDb = this.NesDb || {};

NesDb[ 'C5C2A7768710D9E13B28008C78846B0EBFB8C311' ] = {
	"$": {
		"name": "Toxic Crusaders",
		"class": "Licensed",
		"catalog": "NES-TX-USA",
		"publisher": "Bandai",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "1",
		"date": "1992-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F009DDD2",
				"sha1": "C5C2A7768710D9E13B28008C78846B0EBFB8C311",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-TX-0 PRG",
								"size": "128k",
								"crc": "B859AB5F",
								"sha1": "866A01A40FC9FD5008A2F75C8CFAE1F8259DC2B1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-TX-0 CHR",
								"size": "128k",
								"crc": "145F3DA7",
								"sha1": "DAC368A75AD831454A9663DD8E4BFC461AF84C29"
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
