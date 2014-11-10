this.NesDb = this.NesDb || {};

NesDb[ 'A601D165BBCDCD2D5EE1DC98E0E1292191AB675A' ] = {
	"$": {
		"name": "Dusty Diamond's All-Star Softball",
		"class": "Licensed",
		"catalog": "NES-B7-USA",
		"publisher": "Brøderbund",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "2",
		"date": "1990-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "38B590E4",
				"sha1": "A601D165BBCDCD2D5EE1DC98E0E1292191AB675A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-24"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-B7-0 PRG",
								"size": "128k",
								"crc": "454F8E59",
								"sha1": "96F36CA38062A909B4E87DE52D557511E2FEF951"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-B7-0 CHR",
								"size": "128k",
								"crc": "D930B6AA",
								"sha1": "4EFFC69406ED81684D9538A46BDCDCC4464C0C06"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
