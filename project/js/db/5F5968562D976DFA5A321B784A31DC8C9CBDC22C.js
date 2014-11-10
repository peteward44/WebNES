this.NesDb = this.NesDb || {};

NesDb[ '5F5968562D976DFA5A321B784A31DC8C9CBDC22C' ] = {
	"$": {
		"name": "Rescue: The Embassy Mission",
		"class": "Licensed",
		"catalog": "NES-HZ-EEC",
		"publisher": "Kemco",
		"developer": "Kemco",
		"region": "Europe",
		"players": "1",
		"date": "1991-03-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "8B4D2443",
				"sha1": "5F5968562D976DFA5A321B784A31DC8C9CBDC22C",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-13"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-HZ-0 PRG",
								"size": "128k",
								"crc": "7EEF2338",
								"sha1": "5B4E9E05309EFF032F6296E7DA67CD20DD3F99FE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-HZ-0 CHR",
								"size": "128k",
								"crc": "31ED51A8",
								"sha1": "024475ACD8706F6228C2BF28496C8F9EA1864DA1"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
