this.NesDb = this.NesDb || {};

NesDb[ 'A9F026EEDAC51D445358F8BC4FBCDA40E0CDFF7B' ] = {
	"$": {
		"name": "F1 Circus",
		"altname": "Ｆ－１サーカス",
		"class": "Licensed",
		"catalog": "NBF-7F (11)",
		"publisher": "Nichibutsu",
		"developer": "Make Software",
		"region": "Japan",
		"players": "1",
		"date": "1992-02-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "ECBF33CE",
				"sha1": "A9F026EEDAC51D445358F8BC4FBCDA40E0CDFF7B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NBF-7F-0 PRG",
								"size": "256k",
								"crc": "245870ED",
								"sha1": "532647BDB69AA0D57AD0F0149EFDE79B038D313D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NBF-7F-0 CHR",
								"size": "128k",
								"crc": "CEC97CAB",
								"sha1": "D277BA396655E63DF61ADBB11600DFB1B4057B6F"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
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
