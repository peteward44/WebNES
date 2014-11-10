this.NesDb = this.NesDb || {};

NesDb[ 'CFFAC7D2ECB18A28C36E0E90A6682DFE5BA6E3D1' ] = {
	"$": {
		"name": "Gunsight",
		"altname": "ガンサイト",
		"class": "Licensed",
		"catalog": "KDS-8G",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1991-03-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "0AFB395E",
				"sha1": "CFFAC7D2ECB18A28C36E0E90A6682DFE5BA6E3D1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-ELROM",
						"pcb": "HVC-ELROM-01",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "KDS-8G-0 PRG",
								"size": "128k",
								"crc": "255B129C",
								"sha1": "3B7A17063802EF1E2B53B60EFB2AB9C9A4D647AA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KDS-8G-0 CHR",
								"size": "128k",
								"crc": "95A72C42",
								"sha1": "F42554BB3732BEB4D3A40090B4613FC0ED9E450C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC5"
							}
						}
					]
				}
			]
		}
	]
};
