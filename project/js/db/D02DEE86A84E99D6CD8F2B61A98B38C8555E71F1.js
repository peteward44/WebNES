this.NesDb = this.NesDb || {};

NesDb[ 'D02DEE86A84E99D6CD8F2B61A98B38C8555E71F1' ] = {
	"$": {
		"name": "J.League Winning Goal",
		"altname": "Ｊリーグウイニングゴール",
		"class": "Licensed",
		"catalog": "HVC-W3",
		"publisher": "Electronic Arts",
		"developer": "Graphic Research",
		"region": "Japan",
		"players": "2",
		"date": "1994-05-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3D4B64F1",
				"sha1": "D02DEE86A84E99D6CD8F2B61A98B38C8555E71F1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-W3-0 PRG",
								"size": "128k",
								"crc": "12BBA335",
								"sha1": "6D7794704A460F1C89040F26F1C8FE4B4F352AC7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-W3-0 CHR",
								"size": "128k",
								"crc": "BD6CF7CA",
								"sha1": "1EA8A3A343662A6D8655BFBE44BCE1D5E72BB178"
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
								"type": "MMC3C"
							}
						}
					]
				}
			]
		}
	]
};
