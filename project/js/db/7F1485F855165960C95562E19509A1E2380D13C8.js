this.NesDb = this.NesDb || {};

NesDb[ '7F1485F855165960C95562E19509A1E2380D13C8' ] = {
	"$": {
		"name": "Ultimate Air Combat",
		"class": "Licensed",
		"catalog": "NES-3Z-USA",
		"publisher": "Activision",
		"developer": "Activision",
		"region": "USA",
		"players": "1",
		"date": "1992-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "E387C77F",
				"sha1": "7F1485F855165960C95562E19509A1E2380D13C8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-06"
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
								"name": "NES-3Z-0 PRG",
								"size": "256k",
								"crc": "8348C788",
								"sha1": "E7B4F8A3BC6E8BF00517BF3F661E06AD80142FB2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-3Z-0 CHR",
								"size": "256k",
								"crc": "6574749B",
								"sha1": "20D17EEA5799D5C3E30B874C17BA3DD140E4AE12"
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
