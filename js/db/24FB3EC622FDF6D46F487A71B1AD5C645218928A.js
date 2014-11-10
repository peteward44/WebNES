this.NesDb = this.NesDb || {};

NesDb[ '24FB3EC622FDF6D46F487A71B1AD5C645218928A' ] = {
	"$": {
		"name": "Money Game II, The: Kabutochou no Kiseki",
		"altname": "ザ・マネーゲーム２ 兜町の奇跡",
		"class": "Licensed",
		"catalog": "SFL-ZM",
		"publisher": "Sofel",
		"developer": "Sofel",
		"region": "Japan",
		"players": "1",
		"date": "1989-12-20"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "turbofile",
						"name": "TurboFile"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "B9AB06AA",
				"sha1": "24FB3EC622FDF6D46F487A71B1AD5C645218928A",
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
								"name": "SFL-ZM-0 PRG",
								"size": "128k",
								"crc": "EA79CC19",
								"sha1": "682CE64B60645D5D76BD15DEEB254AE8F7537015"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SFL-ZM-0 CHR",
								"size": "128k",
								"crc": "B122C1D1",
								"sha1": "E017C763E26A14E5081CC3DD581452A813D7B0EE"
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
