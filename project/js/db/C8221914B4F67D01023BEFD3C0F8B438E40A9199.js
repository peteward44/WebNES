this.NesDb = this.NesDb || {};

NesDb[ 'C8221914B4F67D01023BEFD3C0F8B438E40A9199' ] = {
	"$": {
		"name": "Tsuppari Wars",
		"altname": "つっぱりウォーズ",
		"class": "Licensed",
		"catalog": "SAC-7W",
		"publisher": "Sammy",
		"developer": "",
		"region": "Japan",
		"players": "2",
		"date": "1991-06-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "972D08C5",
				"sha1": "C8221914B4F67D01023BEFD3C0F8B438E40A9199",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2012-05-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "SAC-7W-0 PRG",
								"size": "128k",
								"crc": "D54F5DA9",
								"sha1": "DD8E4510638FB4D9AC9D38BAA7FA86C6CCF124EE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SAC-7W-0 CHR",
								"size": "128k",
								"crc": "C9BAC5D2",
								"sha1": "78115F0ADD18B6EC9C7C332BC7D571360BD6E8C4"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
