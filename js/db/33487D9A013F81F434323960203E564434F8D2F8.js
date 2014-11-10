this.NesDb = this.NesDb || {};

NesDb[ '33487D9A013F81F434323960203E564434F8D2F8' ] = {
	"$": {
		"name": "Super Turrican",
		"class": "Licensed",
		"catalog": "NES-TU-SCN",
		"publisher": "Imagineer",
		"developer": "Rainbow Arts",
		"region": "Scandinavia",
		"players": "1",
		"date": "1993-07-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "88C30FDA",
				"sha1": "33487D9A013F81F434323960203E564434F8D2F8",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-05"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-08",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-TU-0 PRG",
								"size": "128k",
								"crc": "DCBA4A78",
								"sha1": "20DD8BCCE6AE04D35F96421ADCCE310E2BF14C29"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-TU-0 CHR",
								"size": "128k",
								"crc": "7AF88E89",
								"sha1": "1B1ABA60929EFB40D2F880EF33C7CDC4AD36FAF5"
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
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
