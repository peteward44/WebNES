this.NesDb = this.NesDb || {};

NesDb[ 'A6434D116AD692938B73B1EA24F89E3E1336F43E' ] = {
	"$": {
		"name": "Dragon Spirit: Aratanaru Densetsu",
		"altname": "ドラゴンスピリット 新たなる伝説",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-DS-5200",
		"publisher": "Namco",
		"developer": "Namco",
		"region": "Japan",
		"players": "1",
		"date": "1989-04-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D2699893",
				"sha1": "A6434D116AD692938B73B1EA24F89E3E1336F43E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-30"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-3433",
						"pcb": "3433",
						"mapper": "88"
					},
					"prg": [
						{
							"$": {
								"name": "NAMCOTDSPR",
								"size": "128k",
								"crc": "6231E6DF",
								"sha1": "9A7CC535C03BB3DF22E642FDF25396034F948A8C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAMCOTDSCH",
								"size": "128k",
								"crc": "58216CF2",
								"sha1": "2A87652C25BF888B5DED1480C002ADA89E2EC425"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "118"
							}
						},
						{
							"$": {
								"type": "74xx32"
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
