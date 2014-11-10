this.NesDb = this.NesDb || {};

NesDb[ '70E6CB9E37D27DFB65E49B69D542A60617D19632' ] = {
	"$": {
		"name": "Super Spy Hunter",
		"class": "Licensed",
		"catalog": "NES-UY-ESP",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "Spain",
		"players": "1",
		"date": "1992-01-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "C528ED56",
				"sha1": "70E6CB9E37D27DFB65E49B69D542A60617D19632",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
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
								"name": "PAL-UY-0 PRG",
								"size": "128k",
								"crc": "C359CC8B",
								"sha1": "EF34D59DB855FE77F8197346D784BFC5E10E018C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-UY-0 CHR",
								"size": "128k",
								"crc": "9A132203",
								"sha1": "7755B8C01F6BFC21A40978C17AEF9A18E372BA65"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
