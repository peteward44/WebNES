this.NesDb = this.NesDb || {};

NesDb[ 'C34ED0F6CEE061DCBD0F36D05A49FFEB9E1D8461' ] = {
	"$": {
		"name": "Action in New York",
		"class": "Licensed",
		"catalog": "NES-FV-UKV",
		"publisher": "Infogrames",
		"developer": "Natsume",
		"region": "United Kingdom",
		"players": "2",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "3AC0830A",
				"sha1": "C34ED0F6CEE061DCBD0F36D05A49FFEB9E1D8461",
				"dump": "ok",
				"dumper": "Mark_K",
				"datedumped": "2011-12-05"
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
								"name": "PAL-FV-0 PRG",
								"size": "128k",
								"crc": "2E1790A4",
								"sha1": "C0983F1BDDBC6AEFE32F4E616589932C2E609427"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-FV-0 CHR",
								"size": "128k",
								"crc": "87B9342B",
								"sha1": "8F8DEC53071A612804AAF514EA5553A66F03673F"
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
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	]
};
