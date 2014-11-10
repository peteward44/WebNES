this.NesDb = this.NesDb || {};

NesDb[ '217D01EDD1200D41588DA862926139E05BBAA02D' ] = {
	"$": {
		"name": "Metro-Cross",
		"altname": "メトロクロス",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-MC-3900",
		"publisher": "Namco",
		"developer": "Now Production",
		"region": "Japan",
		"players": "1",
		"date": "1986-12-16"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E40B4973",
				"sha1": "217D01EDD1200D41588DA862926139E05BBAA02D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-19"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-3451",
						"pcb": "3451",
						"mapper": "206"
					},
					"prg": [
						{
							"$": {
								"name": "NAMCOT-MC-PRG",
								"size": "32k",
								"crc": "BDABC4A6",
								"sha1": "A3AB5D18CEE63B89306522BC550E813F6CD174A2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAMCOT-MC-CHR",
								"size": "32k",
								"crc": "E94CEEEE",
								"sha1": "25C70DD0CDEA7D4A5BB9650CF1D46D2FDCDCD703"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "118"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
