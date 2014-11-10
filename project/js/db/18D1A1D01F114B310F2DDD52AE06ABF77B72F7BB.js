this.NesDb = this.NesDb || {};

NesDb[ '18D1A1D01F114B310F2DDD52AE06ABF77B72F7BB' ] = {
	"$": {
		"name": "Time Zone",
		"altname": "たいむゾーン",
		"class": "Licensed",
		"catalog": "SEI-1G",
		"publisher": "Sigma Enterprises",
		"developer": "EIM",
		"region": "Japan",
		"players": "1",
		"date": "1991-10-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E305202E",
				"sha1": "18D1A1D01F114B310F2DDD52AE06ABF77B72F7BB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TLROM",
						"pcb": "HVC-TLROM-04",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "SEI-1G-0 PRG",
								"size": "128k",
								"crc": "D852C2F7",
								"sha1": "FCDD99D0CF73F1C807385B73A8EC6507D920EED7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SEI-1G-0 CHR",
								"size": "128k",
								"crc": "283971DB",
								"sha1": "FD6A1A06A91DD01DD34E72952BB36BEC8D1135AE"
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
