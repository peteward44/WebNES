this.NesDb = this.NesDb || {};

NesDb[ 'A39BCDAED0DFFDEC5E3FBECA39FE95D62CBDDA8A' ] = {
	"$": {
		"name": "King's Quest V",
		"class": "Licensed",
		"catalog": "NES-8Q-USA",
		"publisher": "Konami",
		"developer": "Sierra",
		"portdeveloper": "Novotrade",
		"region": "USA",
		"players": "1",
		"date": "1992-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "00837960",
				"sha1": "A39BCDAED0DFFDEC5E3FBECA39FE95D62CBDDA8A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-11-05"
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
								"name": "NES-8Q-0 PRG",
								"size": "256k",
								"crc": "8871B5C4",
								"sha1": "EDF09D7319AD52C0A9ABAF6731C7E0C44C1C20E5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-8Q-0 CHR",
								"size": "256k",
								"crc": "5B49294C",
								"sha1": "8B8F20E7FE4D121CE5DC24ED1E93F57E712D4F30"
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
