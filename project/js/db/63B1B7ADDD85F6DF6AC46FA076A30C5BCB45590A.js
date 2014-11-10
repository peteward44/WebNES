this.NesDb = this.NesDb || {};

NesDb[ '63B1B7ADDD85F6DF6AC46FA076A30C5BCB45590A' ] = {
	"$": {
		"name": "High Speed",
		"class": "Licensed",
		"catalog": "NES-8H-USA",
		"publisher": "Tradewest",
		"developer": "Rare",
		"region": "USA",
		"players": "4",
		"date": "1991-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "383CABBF",
				"sha1": "63B1B7ADDD85F6DF6AC46FA076A30C5BCB45590A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-31"
			},
			"board": [
				{
					"$": {
						"type": "NES-TQROM",
						"pcb": "NES-TQROM-01",
						"mapper": "119"
					},
					"prg": [
						{
							"$": {
								"name": "NES-8H-0 PRG",
								"size": "128k",
								"crc": "1255036F",
								"sha1": "ED54E3CFF79A727A0F0D7E29E712A2800AEC57A1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-8H-0 CHR",
								"size": "64k",
								"crc": "028F3D82",
								"sha1": "43C86237BF3B6C98ECEC7C39F908B7D5D56592E5"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "MMC3B"
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
