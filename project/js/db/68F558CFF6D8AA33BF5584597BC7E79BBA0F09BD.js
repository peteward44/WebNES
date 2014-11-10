this.NesDb = this.NesDb || {};

NesDb[ '68F558CFF6D8AA33BF5584597BC7E79BBA0F09BD' ] = {
	"$": {
		"name": "Monster Maker: 7 Tsu no Hihou",
		"altname": "モンスターメーカー ７つの秘宝",
		"class": "Licensed",
		"catalog": "SFL-7N",
		"publisher": "Sofel",
		"developer": "Sofel",
		"region": "Japan",
		"players": "1",
		"date": "1991-12-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "FB1C0551",
				"sha1": "68F558CFF6D8AA33BF5584597BC7E79BBA0F09BD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-09",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "SFL-7N-0 PRG",
								"size": "256k",
								"crc": "FB1C0551",
								"sha1": "68F558CFF6D8AA33BF5584597BC7E79BBA0F09BD"
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
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B3"
							}
						}
					]
				}
			]
		}
	]
};
