this.NesDb = this.NesDb || {};

NesDb[ '867F8F37C10C737AF77FBCC8853BF95B9DE248EE' ] = {
	"$": {
		"name": "Super Mario USA",
		"altname": "スーパーマリオＵＳＡ",
		"class": "Licensed",
		"catalog": "HVC-MT",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "2",
		"date": "1992-09-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "80FB7E6B",
				"sha1": "867F8F37C10C737AF77FBCC8853BF95B9DE248EE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TSROM",
						"pcb": "HVC-TSROM-04",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-MT-0 PRG",
								"size": "128k",
								"crc": "C283E72D",
								"sha1": "9C399F8A6660E57269DE2BFE619559BE858DAED4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-MT-0 CHR",
								"size": "128k",
								"crc": "CE6E51D3",
								"sha1": "F0B6FCC21D87891DE69632E543DF5435CC70E16E"
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
								"type": "MMC3C"
							}
						}
					]
				}
			]
		}
	]
};
