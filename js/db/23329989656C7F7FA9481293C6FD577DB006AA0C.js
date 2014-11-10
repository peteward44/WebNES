this.NesDb = this.NesDb || {};

NesDb[ '23329989656C7F7FA9481293C6FD577DB006AA0C' ] = {
	"$": {
		"name": "Magic Darts",
		"altname": "マジックダーツ",
		"class": "Licensed",
		"catalog": "KKS-4R (06)",
		"publisher": "Seta",
		"developer": "Seta",
		"region": "Japan",
		"players": "4",
		"date": "1991-04-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E02133AC",
				"sha1": "23329989656C7F7FA9481293C6FD577DB006AA0C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "KKS-4R-0 PRG",
								"size": "128k",
								"crc": "5857681C",
								"sha1": "04DC7227C9F2D16245A5EBCEF994D822C0E6641F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KKS-4R-0 CHR",
								"size": "128k",
								"crc": "06E760D1",
								"sha1": "109E7ED6EC86355B712F49163D095A9DC2159B40"
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
