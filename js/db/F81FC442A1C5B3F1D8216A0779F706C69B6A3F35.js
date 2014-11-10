this.NesDb = this.NesDb || {};

NesDb[ 'F81FC442A1C5B3F1D8216A0779F706C69B6A3F35' ] = {
	"$": {
		"name": "Pizza Pop!",
		"altname": "ピザポップ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "JF-35",
		"publisher": "Jaleco",
		"developer": "Arc System Works",
		"region": "Japan",
		"players": "2",
		"date": "1992-01-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "49DA2F76",
				"sha1": "F81FC442A1C5B3F1D8216A0779F706C69B6A3F35",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-03"
			},
			"board": [
				{
					"$": {
						"type": "JALECO-JF-24",
						"pcb": "JF-24A",
						"mapper": "18"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "3746F951",
								"sha1": "B7F30321446ED2619B3F08816E4141475C22D215"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "128k",
								"crc": "8623060D",
								"sha1": "27B76103608230B66F60824C7BFCA9C012FC35D1"
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
								"type": "SS88006"
							}
						}
					]
				}
			]
		}
	]
};
