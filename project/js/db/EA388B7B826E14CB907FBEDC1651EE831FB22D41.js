this.NesDb = this.NesDb || {};

NesDb[ 'EA388B7B826E14CB907FBEDC1651EE831FB22D41' ] = {
	"$": {
		"name": "New Zealand Story, The",
		"class": "Licensed",
		"catalog": "NES-38-FRA",
		"publisher": "Ocean",
		"developer": "Software Creations",
		"region": "France",
		"players": "2",
		"date": "1991-12-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "666BE5EC",
				"sha1": "EA388B7B826E14CB907FBEDC1651EE831FB22D41",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-38-0 PRG",
								"size": "128k",
								"crc": "332BACDF",
								"sha1": "DB216C83A327C132904E818A12F5C8DE299F8764"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-38-0 CHR",
								"size": "128k",
								"crc": "3FB727C9",
								"sha1": "FFCD52A260E9BCE1B462433302524985AEBC258A"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
