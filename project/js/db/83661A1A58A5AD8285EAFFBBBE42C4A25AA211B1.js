this.NesDb = this.NesDb || {};

NesDb[ '83661A1A58A5AD8285EAFFBBBE42C4A25AA211B1' ] = {
	"$": {
		"name": "Astro Fang: Super Machine",
		"altname": "アストロファング",
		"class": "Licensed",
		"catalog": "WAV-E1-01",
		"publisher": "A Wave",
		"developer": "Soft Machine",
		"region": "Japan",
		"players": "1",
		"date": "1990-10-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E949EF8A",
				"sha1": "83661A1A58A5AD8285EAFFBBBE42C4A25AA211B1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-15"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TLROM",
						"pcb": "HVC-TLROM-04",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "WAV-E1-0 PRG",
								"size": "128k",
								"crc": "C701A262",
								"sha1": "A9BB8D62342CC4223AE5B2F53A02F09E3440FBA7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "WAV-E1-0 CHR",
								"size": "128k",
								"crc": "93D787AC",
								"sha1": "E00A67A81051E79090A49615CFA6ECDFF954E2C6"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	]
};
