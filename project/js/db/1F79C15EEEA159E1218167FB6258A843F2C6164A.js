this.NesDb = this.NesDb || {};

NesDb[ '1F79C15EEEA159E1218167FB6258A843F2C6164A' ] = {
	"$": {
		"name": "Sesame Street Countdown",
		"class": "Licensed",
		"catalog": "NES-85-USA",
		"publisher": "Hi Tech Expressions",
		"developer": "Rocket Science Productions",
		"region": "USA",
		"players": "1",
		"date": "1992-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5CF6A82E",
				"sha1": "1F79C15EEEA159E1218167FB6258A843F2C6164A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-05"
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
								"name": "NES-85-0 PRG",
								"size": "128k",
								"crc": "1D4A46A4",
								"sha1": "40430C0D20B0AEC0941119835DFBB912B388F443"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-85-0 CHR",
								"size": "128k",
								"crc": "67CD2E44",
								"sha1": "39B09DF3B27B2E1D355B1266D99D70662120589C"
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
