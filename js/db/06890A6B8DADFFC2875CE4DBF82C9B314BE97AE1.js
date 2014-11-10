this.NesDb = this.NesDb || {};

NesDb[ '06890A6B8DADFFC2875CE4DBF82C9B314BE97AE1' ] = {
	"$": {
		"name": "Tetris Flash",
		"altname": "テトリスフラッシュ",
		"class": "Licensed",
		"catalog": "HVC-TR",
		"publisher": "Nintendo",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "2",
		"date": "1993-09-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "2746B39E",
				"sha1": "06890A6B8DADFFC2875CE4DBF82C9B314BE97AE1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-11"
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
								"name": "HVC-TR-0 PRG",
								"size": "128k",
								"crc": "40280A0F",
								"sha1": "0B0ACFB55641746D6BE86BA85DF76711A7CF9C5F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-TR-0 CHR",
								"size": "128k",
								"crc": "73736E45",
								"sha1": "8CAE20A542271090283E076DB62DAC15437942AB"
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
