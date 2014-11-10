this.NesDb = this.NesDb || {};

NesDb[ '6728C231090850C5B55E7954CC2BE8B45D4E5214' ] = {
	"$": {
		"name": "Dragon Fighter",
		"class": "Licensed",
		"catalog": "NES-1D-USA",
		"publisher": "Sofel",
		"developer": "Natsume",
		"region": "USA",
		"players": "1",
		"date": "1992-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "A166548F",
				"sha1": "6728C231090850C5B55E7954CC2BE8B45D4E5214",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-1D-0 PRG",
								"size": "128k",
								"crc": "5F807010",
								"sha1": "EA35A8025169CB11AD3998196A191600C079DF9D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-1D-0 CHR",
								"size": "128k",
								"crc": "326F47F3",
								"sha1": "8B6875ED77FDDD404A3544DF34979A914F30AF6F"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B3"
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
