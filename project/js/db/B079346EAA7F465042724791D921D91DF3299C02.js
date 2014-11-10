this.NesDb = this.NesDb || {};

NesDb[ 'B079346EAA7F465042724791D921D91DF3299C02' ] = {
	"$": {
		"name": "Bo Jackson Baseball",
		"class": "Licensed",
		"catalog": "NES-6J-USA",
		"publisher": "Data East",
		"developer": "Beam Software",
		"region": "USA",
		"players": "2",
		"date": "1991-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5FD2AAB1",
				"sha1": "B079346EAA7F465042724791D921D91DF3299C02",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-27"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-08",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-6J-0 PRG",
								"size": "128k",
								"crc": "88AA8CD8",
								"sha1": "40CD14E7166E38AC9CAC3C05B1A2484BDB925520"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-6J-0 CHR",
								"size": "256k",
								"crc": "37307900",
								"sha1": "F5385E2A8D1DD8D7B420A0FFC28CED7838F61AA5"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
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
