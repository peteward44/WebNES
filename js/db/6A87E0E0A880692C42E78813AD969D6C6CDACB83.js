this.NesDb = this.NesDb || {};

NesDb[ '6A87E0E0A880692C42E78813AD969D6C6CDACB83' ] = {
	"$": {
		"name": "Othello",
		"altname": "オセロ",
		"class": "Licensed",
		"catalog": "KWD-OH",
		"publisher": "Kawada",
		"developer": "Kawada",
		"region": "Japan",
		"players": "2",
		"date": "1986-11-13"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "87D7CAF0",
				"sha1": "6A87E0E0A880692C42E78813AD969D6C6CDACB83",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "9011-N02",
						"mapper": "185"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "81A743F5",
								"sha1": "D5FEC72F828E51E74425B50716962CB967681981"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "8k",
								"crc": "2F7856C8",
								"sha1": "4B48C4F4782AB8E13CBA6073E3C7E19F51017774"
							},
							"pin": [
								{
									"$": {
										"number": "26",
										"function": "/CE"
									}
								},
								{
									"$": {
										"number": "27",
										"function": "CE"
									}
								}
							]
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
