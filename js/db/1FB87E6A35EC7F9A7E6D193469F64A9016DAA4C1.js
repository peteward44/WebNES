this.NesDb = this.NesDb || {};

NesDb[ '1FB87E6A35EC7F9A7E6D193469F64A9016DAA4C1' ] = {
	"$": {
		"name": "Sherlock Holmes: Hakushaku Reijou Yuukai Jiken",
		"altname": "シャーロックホームズ 伯爵令嬢誘拐事件",
		"class": "Licensed",
		"catalog": "TCC-SH",
		"publisher": "Towa Chiki",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1986-12-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "2BB6A0F8",
				"sha1": "1FB87E6A35EC7F9A7E6D193469F64A9016DAA4C1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-02",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "TCC-SH-0 PRG",
								"size": "128k",
								"crc": "2BB6A0F8",
								"sha1": "1FB87E6A35EC7F9A7E6D193469F64A9016DAA4C1"
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
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
