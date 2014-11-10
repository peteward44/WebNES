this.NesDb = this.NesDb || {};

NesDb[ 'E233507D20777ECD6FA9C8D1D6A2017A12F62466' ] = {
	"$": {
		"name": "Yamamura Misa Suspense: Kyouto Zaiteku Satsujin Jiken",
		"altname": "山村美紗サスペンス 京都財テク殺人事件",
		"class": "Licensed",
		"catalog": "HCT-QZ/008",
		"publisher": "Hect",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1990-11-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "028374F2",
				"sha1": "E233507D20777ECD6FA9C8D1D6A2017A12F62466",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-09-08"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "HCT-QZ-0 PRG",
								"size": "128k",
								"crc": "57C12C17",
								"sha1": "8D056F7104E88B9108565C47CF87ABB242969E23"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HCT-QZ-0 CHR",
								"size": "128k",
								"crc": "BD284093",
								"sha1": "E229F6A795073A92E846E3BFD5F3BDBE4D92D9D6"
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
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	]
};
