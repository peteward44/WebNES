this.NesDb = this.NesDb || {};

NesDb[ 'CE34B12A46AE8D4432D06F461342F729E8BE35E6' ] = {
	"$": {
		"name": "Devil Man",
		"altname": "デビルマン",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-DM-5500",
		"publisher": "Namco",
		"developer": "ISCO",
		"region": "Japan",
		"players": "1",
		"date": "1989-04-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D1691028",
				"sha1": "CE34B12A46AE8D4432D06F461342F729E8BE35E6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-03"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-3453",
						"pcb": "UNK-NAMCOT-DM",
						"mapper": "154"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "C1B6B2A6",
								"sha1": "13DA54A3AB62A3EB2707517288D002D5A42691D1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DM-CHR",
								"size": "128k",
								"crc": "13D13564",
								"sha1": "769C5D11B3F8916BC6290E1D46DE7ED5C438999A"
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
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					]
				}
			]
		}
	]
};
