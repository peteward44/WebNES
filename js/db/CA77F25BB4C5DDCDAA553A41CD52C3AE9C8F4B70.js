this.NesDb = this.NesDb || {};

NesDb[ 'CA77F25BB4C5DDCDAA553A41CD52C3AE9C8F4B70' ] = {
	"$": {
		"name": "Solomon's Key 2",
		"class": "Licensed",
		"catalog": "NES-K2-FRG",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Germany",
		"players": "1",
		"date": "1993-03-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "F184EB2D",
				"sha1": "CA77F25BB4C5DDCDAA553A41CD52C3AE9C8F4B70",
				"dump": "ok",
				"dumper": "B00daW",
				"datedumped": "2008-10-20"
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
								"name": "PAL-K2-0 PRG",
								"size": "128k",
								"crc": "B18D9273",
								"sha1": "05A4B50D7E9CFCBF55094046C6667ABC5A7B35F8"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-K2-0 CHR",
								"size": "128k",
								"crc": "37737783",
								"sha1": "D0589BC7806C870EF78DCBE3A24EE71DB328F670"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
