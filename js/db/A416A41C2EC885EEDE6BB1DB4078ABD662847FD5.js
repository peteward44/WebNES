this.NesDb = this.NesDb || {};

NesDb[ 'A416A41C2EC885EEDE6BB1DB4078ABD662847FD5' ] = {
	"$": {
		"name": "Gun Nac",
		"class": "Licensed",
		"catalog": "NES-XG-USA",
		"publisher": "Nexoft",
		"developer": "Compile",
		"region": "USA",
		"players": "1",
		"date": "1991-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "D19DCB2B",
				"sha1": "A416A41C2EC885EEDE6BB1DB4078ABD662847FD5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-06"
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
								"name": "NES-XG-0 PRG",
								"size": "128k",
								"crc": "59A706E4",
								"sha1": "5198B429068A14D962D23A72F9E42E8902E35575"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-XG-0 CHR",
								"size": "128k",
								"crc": "2FFB3FA8",
								"sha1": "E9557F280C05A81493181D92F474DCC82067710B"
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
