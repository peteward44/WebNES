this.NesDb = this.NesDb || {};

NesDb[ 'CEE869B39C4154723FEF6184053DD37A9211BC23' ] = {
	"$": {
		"name": "Vegas Dream",
		"class": "Licensed",
		"catalog": "NES-LS-USA",
		"publisher": "HAL Laboratory",
		"developer": "HAL Laboratory",
		"region": "USA",
		"players": "4",
		"date": "1990-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "C973699D",
				"sha1": "CEE869B39C4154723FEF6184053DD37A9211BC23",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-14"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKROM",
						"pcb": "NES-SKROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-LS-0 PRG",
								"size": "128k",
								"crc": "86D67A97",
								"sha1": "5E2B472D2C166E7ABE171D3E4929254E0CC8CCF5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-LS-0 CHR",
								"size": "128k",
								"crc": "617F9A24",
								"sha1": "1CB3AB3B0D61E7BCA161554CAE16B511EB15056B"
							}
						}
					],
					"wram": [
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
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
