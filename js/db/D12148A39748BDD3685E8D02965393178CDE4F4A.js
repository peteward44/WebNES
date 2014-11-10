this.NesDb = this.NesDb || {};

NesDb[ 'D12148A39748BDD3685E8D02965393178CDE4F4A' ] = {
	"$": {
		"name": "Alien³",
		"class": "Licensed",
		"catalog": "NES-X3-FRA",
		"publisher": "LJN",
		"developer": "Probe",
		"region": "France",
		"players": "1",
		"date": "1993"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "DDC6D9C9",
				"sha1": "D12148A39748BDD3685E8D02965393178CDE4F4A",
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
								"name": "PAL-X3-0 PRG",
								"size": "128k",
								"crc": "6A5D45F3",
								"sha1": "E08EE23BF86BF54369647B83DACBCDFBCEAACC34"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-X3-0 CHR",
								"size": "128k",
								"crc": "D87D47F4",
								"sha1": "31CC3707B8CBDC5EB1EE2DF0D6CC84E78AA05C78"
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
