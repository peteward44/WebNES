this.NesDb = this.NesDb || {};

NesDb[ '37EAEA125906AA63C30B7215BD63FD9AE1AD9974' ] = {
	"$": {
		"name": "Godzilla",
		"altname": "ゴジラ",
		"class": "Licensed",
		"catalog": "THF-GZ",
		"publisher": "Toho",
		"developer": "Compile",
		"region": "Japan",
		"players": "1",
		"date": "1988-12-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8A36D2B7",
				"sha1": "37EAEA125906AA63C30B7215BD63FD9AE1AD9974",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "THF-GZ-0 PRG",
								"size": "128k",
								"crc": "4E21A480",
								"sha1": "44D40B5EF3D5023D6BC9C9BF1466FD38FC6AEE38"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "THF-GZ-0 CHR",
								"size": "128k",
								"crc": "3DC76996",
								"sha1": "2783C9D03CA48C502A020B6DEE708E66B6D57839"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
