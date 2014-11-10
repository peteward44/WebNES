this.NesDb = this.NesDb || {};

NesDb[ 'BB71A65706F75DA8008A1BAC02ECAE06EA176F1F' ] = {
	"$": {
		"name": "Hoshi no Kirby: Yume no Izumi no Monogatari",
		"altname": "星のカービィ 夢の泉の物語",
		"class": "Licensed",
		"catalog": "HVC-KI",
		"publisher": "Nintendo",
		"developer": "HAL Laboratory",
		"region": "Japan",
		"players": "1",
		"date": "1993-03-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E4A7D436",
				"sha1": "BB71A65706F75DA8008A1BAC02ECAE06EA176F1F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-KI-0 PRG",
								"size": "512k",
								"crc": "6CC62C06",
								"sha1": "3F78E47B3E38AEAEB99D1368F330C2326CE13E2E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-KI-0 CHR",
								"size": "256k",
								"crc": "CFD0615F",
								"sha1": "0B902089AD99A12E324A8FB86A25A13E1D59A9A7"
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
					]
				}
			]
		}
	]
};
