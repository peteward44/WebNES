this.NesDb = this.NesDb || {};

NesDb[ '8323A68AB1C7C6B042F336E12C54AD7717FAC693' ] = {
	"$": {
		"name": "Haja no Fuuin",
		"altname": "覇邪の封印",
		"class": "Licensed",
		"catalog": "HSP-08",
		"publisher": "ASCII",
		"developer": "Kogado Studio",
		"region": "Japan",
		"players": "1",
		"date": "1987-10-23"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "turbofile",
						"name": "TurboFile"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "21DD2174",
				"sha1": "8323A68AB1C7C6B042F336E12C54AD7717FAC693",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HSP-08-0 PRG",
								"size": "128k",
								"crc": "7C46998B",
								"sha1": "1547DA017F00098FAF3D897EBA887BA41F5D20C6"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HSP-08-0 CHR",
								"size": "128k",
								"crc": "0006419C",
								"sha1": "A746BF6CA50F31FC4AA33FBFEA8C0C91622C9078"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1"
							}
						}
					]
				}
			]
		}
	]
};
