this.NesDb = this.NesDb || {};

NesDb[ 'D48B10D9EE30B6891979985448B047B314A032AE' ] = {
	"$": {
		"name": "Pool of Radiance, Advanced Dungeons & Dragons",
		"altname": "ＡＤ＆Ｄ プール オブ レイディアンス",
		"class": "Licensed",
		"catalog": "PNF-QA (R98V5938)",
		"publisher": "Pony Canyon",
		"developer": "Strategic Simulations",
		"portdeveloper": "Marionette",
		"region": "Japan",
		"players": "1",
		"date": "1991-06-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "CA730971",
				"sha1": "D48B10D9EE30B6891979985448B047B314A032AE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-09-08"
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
								"name": "PNF-QA-0 PRG",
								"size": "512k",
								"crc": "A6819195",
								"sha1": "1F23708665CC9801C99E24B590B40528CA1D2CC1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PNF-QA-0 CHR",
								"size": "128k",
								"crc": "A750F6D9",
								"sha1": "D7053B832C79B8ED4A8D8AB28B7650D65E0DCF52"
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
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	]
};
