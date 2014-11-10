this.NesDb = this.NesDb || {};

NesDb[ '6802A12A7A33D09C6DA6185A59DB69FDD5A9A6D9' ] = {
	"$": {
		"name": "Uninvited",
		"class": "Licensed",
		"catalog": "NES-UV-USA",
		"publisher": "Kemco",
		"developer": "Icom Simulations",
		"region": "USA",
		"players": "1",
		"date": "1991-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "9BAC73EF",
				"sha1": "6802A12A7A33D09C6DA6185A59DB69FDD5A9A6D9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-10-12"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-UV-0 PRG",
								"size": "128k",
								"crc": "B258D6CA",
								"sha1": "C71C0A69AA7C2C92D4507002BB9A4BFDEE1074FC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-UV-0 CHR",
								"size": "128k",
								"crc": "5A19C566",
								"sha1": "8D7000B6A5E7ADC0E4087D0A433967C8366D3414"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
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
