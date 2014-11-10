this.NesDb = this.NesDb || {};

NesDb[ '6D0ADBBF93D948004E33CDF3B1CCAC1FB60D65C6' ] = {
	"$": {
		"name": "Athletic World",
		"class": "Licensed",
		"catalog": "NES-AW-ITA",
		"publisher": "Bandai",
		"developer": "Human Entertainment",
		"region": "Italy",
		"players": "1",
		"date": "1988-06-15"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "familyfunfitness",
						"name": "Family Fun Fitness Mat"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "E592F53A",
				"sha1": "6D0ADBBF93D948004E33CDF3B1CCAC1FB60D65C6",
				"dump": "ok",
				"dumper": "B00daW",
				"datedumped": "2008-10-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-07",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-AW-0 PRG",
								"size": "32k",
								"crc": "552FB544",
								"sha1": "DEC198C52FEA50CF0A69E8F9F6DACD3F8AB87377"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-AW-0 CHR",
								"size": "32k",
								"crc": "51BF1FC5",
								"sha1": "BE0BC808796FC5A954A61EB4B285FA73FD77F13C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3197A"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
