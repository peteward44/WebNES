this.NesDb = this.NesDb || {};

NesDb[ '070EC181FA7B21B25A99B841A5DC1A76ED3F8392' ] = {
	"$": {
		"name": "Itadaki Street: Watashi no Mise ni Yottette",
		"altname": "いただきストリート 私のお店によってって",
		"class": "Licensed",
		"catalog": "HSP-35",
		"publisher": "ASCII",
		"developer": "Game Studio",
		"region": "Japan",
		"players": "4",
		"date": "1991-03-21"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "turbofile",
						"name": "TurboFile"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "CA503F32",
				"sha1": "070EC181FA7B21B25A99B841A5DC1A76ED3F8392",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HSP-35-0 PRG",
								"size": "128k",
								"crc": "7E5D2F1A",
								"sha1": "A5B686BFF73F4B816F47DCBCE43596D90BBD8BD6"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HSP-35-0 CHR",
								"size": "128k",
								"crc": "1D98B913",
								"sha1": "02774D43511EB44435CCF0E2A07692C519A79B8C"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
