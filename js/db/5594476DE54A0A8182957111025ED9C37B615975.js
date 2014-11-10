this.NesDb = this.NesDb || {};

NesDb[ '5594476DE54A0A8182957111025ED9C37B615975' ] = {
	"$": {
		"name": "Darkman",
		"class": "Licensed",
		"catalog": "NES-N8-USA",
		"publisher": "Ocean",
		"developer": "Ocean",
		"region": "USA",
		"players": "1",
		"date": "1991-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "398B8182",
				"sha1": "5594476DE54A0A8182957111025ED9C37B615975",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-18"
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
								"name": "NES-N8-0 PRG",
								"size": "128k",
								"crc": "CDC3350B",
								"sha1": "03F7D0059E861A62ADF1E92F33723A544F5A639B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-N8-0 CHR",
								"size": "128k",
								"crc": "0F62E176",
								"sha1": "8F4FB53F531263EB2BB3B1C58FC418D1B4D0A224"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B3"
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
