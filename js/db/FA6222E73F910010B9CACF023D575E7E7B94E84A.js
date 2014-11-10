this.NesDb = this.NesDb || {};

NesDb[ 'FA6222E73F910010B9CACF023D575E7E7B94E84A' ] = {
	"$": {
		"name": "Punch-Out!!",
		"class": "Licensed",
		"catalog": "NES-QP-USA",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "USA",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "B95E9E7F",
				"sha1": "FA6222E73F910010B9CACF023D575E7E7B94E84A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-PNROM",
						"pcb": "NES-PNROM-05",
						"mapper": "9"
					},
					"prg": [
						{
							"$": {
								"name": "NES-QP-0 PRG",
								"size": "128k",
								"crc": "C032E5B0",
								"sha1": "DC69588E2A55A7BB8B915D3504048DB05D1B4CC9"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-QP-0 CHR",
								"size": "128k",
								"crc": "45D0C815",
								"sha1": "AAFEB629784BDD93035B4607EEEC5446D7AEB7E9"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC2"
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
