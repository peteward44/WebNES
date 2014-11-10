this.NesDb = this.NesDb || {};

NesDb[ '21AFFEB0462B15A8D5A52B7610DF69AAA3B16805' ] = {
	"$": {
		"name": "George Foreman's KO Boxing",
		"class": "Licensed",
		"catalog": "NES-KB-ESP",
		"publisher": "Acclaim",
		"developer": "Beam Software",
		"region": "Spain",
		"players": "2",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "8C88536F",
				"sha1": "21AFFEB0462B15A8D5A52B7610DF69AAA3B16805",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2007-02-03"
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
								"name": "PAL-KB-0 PRG",
								"size": "128k",
								"crc": "C7A6F4A6",
								"sha1": "347A316477EC29DD14DB9073F8A0C8EF4E78189D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-KB-0 CHR",
								"size": "256k",
								"crc": "EE0FF332",
								"sha1": "20A36CDEF8BB9761CC282DEF93C3B0076893C6D5"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
