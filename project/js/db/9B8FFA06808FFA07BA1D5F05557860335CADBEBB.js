this.NesDb = this.NesDb || {};

NesDb[ '9B8FFA06808FFA07BA1D5F05557860335CADBEBB' ] = {
	"$": {
		"name": "Adventures of Lolo II",
		"altname": "アドベンチャーズ オブ ロロII",
		"class": "Licensed",
		"catalog": "HAL-QL",
		"publisher": "HAL Laboratory",
		"developer": "HAL Laboratory",
		"region": "Japan",
		"players": "1",
		"date": "1990-12-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "EAB93CFB",
				"sha1": "9B8FFA06808FFA07BA1D5F05557860335CADBEBB",
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
								"name": "HAL-QL-0 PRG",
								"size": "128k",
								"crc": "B1849D4E",
								"sha1": "274BC0A3940DB464E04C932A9BCBD40BDD7C3D06"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HAL-QL-0 CHR",
								"size": "128k",
								"crc": "B114C6BD",
								"sha1": "B3430A7F4791E4214E33EF020AC4B4414B9DCBED"
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
