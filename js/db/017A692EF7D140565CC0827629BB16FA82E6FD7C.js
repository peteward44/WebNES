this.NesDb = this.NesDb || {};

NesDb[ '017A692EF7D140565CC0827629BB16FA82E6FD7C' ] = {
	"$": {
		"name": "Championship Rally",
		"class": "Licensed",
		"catalog": "NES-29-ESP",
		"publisher": "HAL Laboratory",
		"developer": "Human Entertainment",
		"region": "Spain",
		"players": "8",
		"date": "1991-11-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "C076D66F",
				"sha1": "017A692EF7D140565CC0827629BB16FA82E6FD7C",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
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
								"name": "PAL-29-0 PRG",
								"size": "128k",
								"crc": "10B4CE4D",
								"sha1": "93B3F2A7A37DF47A01738D0FD39CBF4EDDE75B26"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-29-0 CHR",
								"size": "128k",
								"crc": "7E960E53",
								"sha1": "183D9E6AD3671062157C2128F3F3C492B2566934"
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
