this.NesDb = this.NesDb || {};

NesDb[ 'D8621C9AA030E60453D74E2EC1CEE1B45DD1B855' ] = {
	"$": {
		"name": "Ginga Eiyuu Densetsu",
		"altname": "銀河英雄伝説　わが征くは星の大海",
		"class": "Licensed",
		"catalog": "KSC-GE",
		"publisher": "Kemco",
		"developer": "Kemco",
		"region": "Japan",
		"players": "1",
		"date": "1988-12-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8D5B77C0",
				"sha1": "D8621C9AA030E60453D74E2EC1CEE1B45DD1B855",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KSC-GE-0 PRG",
								"size": "128k",
								"crc": "6E32F3C2",
								"sha1": "910284DC2D5266AC55DF4B4C91AF100B28547EAC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KSC-GE-0 CHR",
								"size": "128k",
								"crc": "33593766",
								"sha1": "4C00A72AF693F11A74EF7F3269FDD63BEA62893B"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
