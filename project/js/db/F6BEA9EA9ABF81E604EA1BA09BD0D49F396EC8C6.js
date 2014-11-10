this.NesDb = this.NesDb || {};

NesDb[ 'F6BEA9EA9ABF81E604EA1BA09BD0D49F396EC8C6' ] = {
	"$": {
		"name": "Babel no Tou",
		"altname": "バベルの塔",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-NBL-3900-16",
		"publisher": "Namco",
		"developer": "Namco",
		"region": "Japan",
		"players": "1",
		"date": "1986-07-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8AF25130",
				"sha1": "F6BEA9EA9ABF81E604EA1BA09BD0D49F396EC8C6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-17"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-3401",
						"pcb": "3401",
						"mapper": "206"
					},
					"prg": [
						{
							"$": {
								"name": "NAMCOTBLPR",
								"size": "32k",
								"crc": "899A0067",
								"sha1": "475C9D51065518599EB2368AE4EFCF46373E4CEC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAMCOTBLCH",
								"size": "32k",
								"crc": "134FC0C6",
								"sha1": "3DF01E43D08321A224DA5B0B935581C8B16EF4D3"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "109"
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
