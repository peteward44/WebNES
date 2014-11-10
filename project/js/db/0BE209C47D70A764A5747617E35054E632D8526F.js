this.NesDb = this.NesDb || {};

NesDb[ '0BE209C47D70A764A5747617E35054E632D8526F' ] = {
	"$": {
		"name": "F-15 Strike Eagle",
		"class": "Licensed",
		"catalog": "NES-8F-FRG",
		"publisher": "Microprose",
		"developer": "Microprose",
		"region": "Germany",
		"players": "1",
		"date": "1993-02-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "D353D351",
				"sha1": "0BE209C47D70A764A5747617E35054E632D8526F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-08-21"
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
								"name": "FRG-8F-0 PRG",
								"size": "256k",
								"crc": "57C2E712",
								"sha1": "ABC63B7D51ED5B8BAF35D6B9861877C022B4C350"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "FRG-8F-0 CHR",
								"size": "256k",
								"crc": "74E93832",
								"sha1": "212A8BF5974FAB938D8102797D6C8943B17B2579"
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
