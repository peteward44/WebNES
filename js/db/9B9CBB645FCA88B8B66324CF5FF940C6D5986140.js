this.NesDb = this.NesDb || {};

NesDb[ '9B9CBB645FCA88B8B66324CF5FF940C6D5986140' ] = {
	"$": {
		"name": "Lethal Weapon: L'Arme Fatale",
		"class": "Licensed",
		"catalog": "NES-LY-FRA",
		"publisher": "Ocean",
		"developer": "Eurocom",
		"region": "France",
		"players": "1",
		"date": "1993"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "E043C6A5",
				"sha1": "9B9CBB645FCA88B8B66324CF5FF940C6D5986140",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2006-10-01"
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
								"name": "PAL-LY-0 PRG",
								"size": "128k",
								"crc": "FFDA5D58",
								"sha1": "568EFC696AFAB3C360406768C6B3058F9A39C2C3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-LY-0 CHR",
								"size": "128k",
								"crc": "2E46EBEE",
								"sha1": "BC0C04AB4AEF510231CE1D6C4763CC4B4793E867"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
