this.NesDb = this.NesDb || {};

NesDb[ 'CEF84201B09F138C5552119F805B8AB2E4BE07DA' ] = {
	"$": {
		"name": "Ultraman Club 3",
		"altname": "ウルトラマン倶楽部３ またまた出撃!!ウルトラ兄弟",
		"class": "Licensed",
		"catalog": "SHI-3I",
		"publisher": "Yutaka",
		"developer": "Interlink",
		"region": "Japan",
		"players": "1",
		"date": "1991-12-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "923F915B",
				"sha1": "CEF84201B09F138C5552119F805B8AB2E4BE07DA",
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
								"name": "SHI-3I-0 PRG",
								"size": "256k",
								"crc": "AF754426",
								"sha1": "874680E10C51B84EED7B96C929E6B21E4C38DDB2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SHI-3I-0 CHR",
								"size": "128k",
								"crc": "41007BBE",
								"sha1": "F60D619FF7ED2B8E6965F4ACF834F1657A8B2E0B"
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
