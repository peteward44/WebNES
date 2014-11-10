this.NesDb = this.NesDb || {};

NesDb[ '1826D7C39AC1D49B20F07E9CFBBA6B87C0493797' ] = {
	"$": {
		"name": "Ferrari Grand Prix Challenge",
		"class": "Licensed",
		"catalog": "NES-FG-AUS",
		"publisher": "Acclaim",
		"developer": "System 3",
		"region": "Australia",
		"players": "1",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "53A9B53A",
				"sha1": "1826D7C39AC1D49B20F07E9CFBBA6B87C0493797",
				"dump": "ok",
				"dumper": "B00daW",
				"datedumped": "2008-10-21"
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
								"name": "PAL-FG-0 PRG",
								"size": "128k",
								"crc": "8B73FB1B",
								"sha1": "55BE4DC9077933C5A8B32356790B87B7A8245332"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-FG-0 CHR",
								"size": "128k",
								"crc": "13D6708E",
								"sha1": "4CE95BEBC9755F5B841898DC29C740495B7C6706"
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
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	]
};
