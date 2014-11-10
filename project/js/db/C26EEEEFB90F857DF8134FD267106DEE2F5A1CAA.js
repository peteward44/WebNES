this.NesDb = this.NesDb || {};

NesDb[ 'C26EEEEFB90F857DF8134FD267106DEE2F5A1CAA' ] = {
	"$": {
		"name": "Zombie Nation",
		"class": "Licensed",
		"catalog": "NES-51-USA",
		"publisher": "Meldac",
		"developer": "KAZe",
		"region": "USA",
		"players": "1",
		"date": "1991-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "03FB57B6",
				"sha1": "C26EEEEFB90F857DF8134FD267106DEE2F5A1CAA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-11-05"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-51-0 PRG",
								"size": "128k",
								"crc": "407793C0",
								"sha1": "E17E86C0CD111D90DDD101EFB9F17736CDC877F6"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-51-0 CHR",
								"size": "128k",
								"crc": "BB0AD971",
								"sha1": "EAD1331FE2C6B683D41A2650582D0312FB584C4D"
							}
						}
					],
					"chip": [
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
