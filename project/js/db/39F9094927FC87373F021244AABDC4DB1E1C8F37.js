this.NesDb = this.NesDb || {};

NesDb[ '39F9094927FC87373F021244AABDC4DB1E1C8F37' ] = {
	"$": {
		"name": "Romance of the Three Kingdoms II",
		"class": "Licensed",
		"catalog": "NES-XL-USA",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "USA",
		"players": "12",
		"date": "1991-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F011E490",
				"sha1": "39F9094927FC87373F021244AABDC4DB1E1C8F37",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-EWROM",
						"pcb": "NES-EWROM-01",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "NES-XL-0 PRG",
								"size": "256k",
								"crc": "11EAAD26",
								"sha1": "3B584C70948473F993A17D95479C23CB8BA12DF1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-XL-0 CHR",
								"size": "256k",
								"crc": "973DF95E",
								"sha1": "69AEF280FEF6162018FFB00EA5779BE39E704974"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "32k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC5"
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
