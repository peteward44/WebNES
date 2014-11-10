this.NesDb = this.NesDb || {};

NesDb[ '09FF25A8CA289CE40E6FB026A02041FCD05E7C4F' ] = {
	"$": {
		"name": "Short Order / Eggsplode!",
		"class": "Licensed",
		"subclass": "Multi-cart",
		"catalog": "NES-OR-USA",
		"publisher": "Nintendo",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "1",
		"date": "1989-12"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "powerpad",
						"name": "Power Pad"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "6435C095",
				"sha1": "09FF25A8CA289CE40E6FB026A02041FCD05E7C4F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
			},
			"board": [
				{
					"$": {
						"type": "NES-SBROM",
						"pcb": "NES-SBROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-OR-0 PRG",
								"size": "64k",
								"crc": "FD37CA4C",
								"sha1": "06412CD5E411F4A7F2B1B4BDAAA331FA25FBF4EE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-OR-0 CHR",
								"size": "32k",
								"crc": "FB61F257",
								"sha1": "F481C0B2504D67A1340DDF3F82AAAFC403C63136"
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
