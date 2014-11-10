this.NesDb = this.NesDb || {};

NesDb[ '9B340A52D6B496596B2D808053696B3DBA514E55' ] = {
	"$": {
		"name": "Choplifter",
		"altname": "チョップリフター",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "JF-08",
		"publisher": "Jaleco",
		"developer": "Sega",
		"portdeveloper": "TOSE Software",
		"region": "Japan",
		"players": "2",
		"date": "1986-06-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "883454EA",
				"sha1": "9B340A52D6B496596B2D808053696B3DBA514E55",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-27"
			},
			"board": [
				{
					"$": {
						"type": "JALECO-JF-08",
						"pcb": "JF-08",
						"mapper": "87"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "D6F73886",
								"sha1": "5172B48008D60DB7FCCC7E502D93A4DCADA591EE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "16k",
								"crc": "D5AAC946",
								"sha1": "47A0E6471A3EBC4C21594E6DAA42AC54049BB9A2"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx139"
							}
						},
						{
							"$": {
								"type": "74xx74"
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
