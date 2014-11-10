this.NesDb = this.NesDb || {};

NesDb[ 'A3791FE7928E8057E478F8D21B51B51C942325F5' ] = {
	"$": {
		"name": "Sunman",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-S6-EEC",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "Europe",
		"players": "1",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"prototype": "1",
				"crc": "015D4555",
				"sha1": "A3791FE7928E8057E478F8D21B51B51C942325F5",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKEPROM",
						"pcb": "NES-TKEPROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "02759BEB",
								"sha1": "0A48B10EE8EC3A6ACBF8A94170259F9298C75296"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "128k",
								"crc": "731A3076",
								"sha1": "000E56BE55BB74A91D8C91499F0FFDB971A62E0F"
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
