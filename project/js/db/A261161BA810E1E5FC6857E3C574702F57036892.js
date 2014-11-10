this.NesDb = this.NesDb || {};

NesDb[ 'A261161BA810E1E5FC6857E3C574702F57036892' ] = {
	"$": {
		"name": "Maniac Mansion",
		"class": "Licensed",
		"catalog": "NES-JM-FRA",
		"publisher": "Jaleco",
		"developer": "LucasFilm Games",
		"region": "France",
		"players": "1",
		"date": "1992-10-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "F4B70BFE",
				"sha1": "A261161BA810E1E5FC6857E3C574702F57036892",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2006-07-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-SNROM",
						"pcb": "NES-SNROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "FRA-JM-0 PRG",
								"size": "256k",
								"crc": "F4B70BFE",
								"sha1": "A261161BA810E1E5FC6857E3C574702F57036892"
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
								"type": "MMC1B2"
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
