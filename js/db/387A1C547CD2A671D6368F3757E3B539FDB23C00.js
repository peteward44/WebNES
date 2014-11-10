this.NesDb = this.NesDb || {};

NesDb[ '387A1C547CD2A671D6368F3757E3B539FDB23C00' ] = {
	"$": {
		"name": "Parasol Henbee",
		"altname": "パラソルヘンべえ",
		"class": "Licensed",
		"catalog": "EPO-E6",
		"publisher": "Epoch",
		"developer": "Sakata SAS",
		"region": "Japan",
		"players": "1",
		"date": "1991-02-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C769BB34",
				"sha1": "387A1C547CD2A671D6368F3757E3B539FDB23C00",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "EPO-E6-0 PRG",
								"size": "128k",
								"crc": "C7FD5388",
								"sha1": "667044927F556875386174B0BF11F68551932346"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "EPO-E6-0 CHR",
								"size": "128k",
								"crc": "8144188A",
								"sha1": "5B6A120DC6B8F76340B2CF928C26E2E824C6DFE3"
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
