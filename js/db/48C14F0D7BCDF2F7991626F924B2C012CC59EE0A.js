this.NesDb = this.NesDb || {};

NesDb[ '48C14F0D7BCDF2F7991626F924B2C012CC59EE0A' ] = {
	"$": {
		"name": "SD Gundam Gachapon Senshi 5: Battle of Universal Century",
		"altname": "ＳＤガンダム ガチャポン戦士５ バトル オブ ユニバーサル センチュリー",
		"class": "Licensed",
		"catalog": "SHI-P5",
		"publisher": "Yutaka",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1992-12-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "6C940A59",
				"sha1": "48C14F0D7BCDF2F7991626F924B2C012CC59EE0A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
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
								"name": "SHI-P5-0 PRG",
								"size": "128k",
								"crc": "8EE6463A",
								"sha1": "7D780F5A5D2B209199C2A0FF60EF3059C9FC01B3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SHI-P5-0 CHR",
								"size": "128k",
								"crc": "3CC75993",
								"sha1": "004744F2BB44C531FCAA082D5B411F6566815E21"
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
