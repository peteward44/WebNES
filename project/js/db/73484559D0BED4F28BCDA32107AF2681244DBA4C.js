this.NesDb = this.NesDb || {};

NesDb[ '73484559D0BED4F28BCDA32107AF2681244DBA4C' ] = {
	"$": {
		"name": "Ganbare Goemon! Karakuri Douchuu",
		"altname": "がんばれゴエモン！からくり道中",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC815",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1986-07-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "4FC2F673",
				"sha1": "73484559D0BED4F28BCDA32107AF2681244DBA4C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-01-24"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-1",
						"pcb": "302114A",
						"mapper": "75"
					},
					"prg": [
						{
							"$": {
								"name": "RC815J0P",
								"size": "128k",
								"crc": "565A57E5",
								"sha1": "E6BCD8B679644B08337C2B529CC41180F07F8D5F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC815J0C",
								"size": "128k",
								"crc": "D9842835",
								"sha1": "0BD2757B20E8F339BA113D13B092AF3D2995B3F7"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "VRC1"
							}
						}
					]
				}
			]
		}
	]
};
