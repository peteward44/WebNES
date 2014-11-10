this.NesDb = this.NesDb || {};

NesDb[ '5CD7C3A0080FE7CCC6AFE70AF85123FF77E89834' ] = {
	"$": {
		"name": "American Dream",
		"altname": "アメリカンドリーム",
		"class": "Licensed",
		"catalog": "CDS-A7",
		"publisher": "Coconuts",
		"developer": "Soft Machine",
		"region": "Japan",
		"players": "1",
		"date": "1989-09-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3FFA5762",
				"sha1": "5CD7C3A0080FE7CCC6AFE70AF85123FF77E89834",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "CDS-A7-0 PRG",
								"size": "128k",
								"crc": "FAF802D1",
								"sha1": "82C981600CAF439229BDAE0B5F70ACCA644C3AED"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CDS-A7-0 CHR",
								"size": "128k",
								"crc": "CC95B82C",
								"sha1": "71BE2A6AE520CC61A712519F954523F6858AE842"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
