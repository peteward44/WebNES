this.NesDb = this.NesDb || {};

NesDb[ '22D27B765927ECBAA31EAC4C1C305BC5B2987BA2' ] = {
	"$": {
		"name": "Ys II: Ancient Ys Vanished The Final Chapter",
		"altname": "イースⅡ",
		"class": "Licensed",
		"catalog": "VFR-Q2-09",
		"publisher": "Victor",
		"developer": "Nihon Falcom",
		"portdeveloper": "Advance Communication",
		"region": "Japan",
		"players": "1",
		"date": "1990-05-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "5A0454F3",
				"sha1": "22D27B765927ECBAA31EAC4C1C305BC5B2987BA2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
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
								"name": "VFR-Q2-0 PRG",
								"size": "256k",
								"crc": "00161AFD",
								"sha1": "89764CA28A748175167E6901606560FB68EFAF2D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "VFR-Q2-0 CHR",
								"size": "128k",
								"crc": "370DC857",
								"sha1": "E6C5BAE1F8C8AC259B533AF6AA566D986260F960"
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
