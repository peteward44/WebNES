this.NesDb = this.NesDb || {};

NesDb[ 'C3463FC08A3553C77EBD6114C5F1910D63773A85' ] = {
	"$": {
		"name": "Matsumoto Tooru no Kabushiki Hisshou Gaku 2",
		"altname": "松本亨の株式必勝学２",
		"class": "Licensed",
		"catalog": "IMA-K2",
		"publisher": "Imagineer",
		"developer": "Infinity",
		"region": "Japan",
		"players": "1",
		"date": "1989-03-31"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "1208E754",
				"sha1": "C3463FC08A3553C77EBD6114C5F1910D63773A85",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-07",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "IMA-K2-0 PRG",
								"size": "256k",
								"crc": "1208E754",
								"sha1": "C3463FC08A3553C77EBD6114C5F1910D63773A85"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
