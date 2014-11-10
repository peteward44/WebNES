this.NesDb = this.NesDb || {};

NesDb[ '0D41E2EC201218847AEB492087C26253B5F8086B' ] = {
	"$": {
		"name": "Dynamite Bowl",
		"altname": "ダイナマイトボウル",
		"class": "Licensed",
		"catalog": "TFS-DL",
		"publisher": "Toemiland",
		"developer": "Soft Vision",
		"region": "Japan",
		"players": "5",
		"date": "1987-05-24"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "9E66A66B",
				"sha1": "0D41E2EC201218847AEB492087C26253B5F8086B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-03"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "CN-04B",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "21621797",
								"sha1": "802230FD5269A76886BED6C345DF33250FDAC96E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "70625CD5",
								"sha1": "6C4520EBE3C85AA6466B4038E63B3B686259F8C1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
