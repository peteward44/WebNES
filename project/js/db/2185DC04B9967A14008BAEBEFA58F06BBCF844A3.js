this.NesDb = this.NesDb || {};

NesDb[ '2185DC04B9967A14008BAEBEFA58F06BBCF844A3' ] = {
	"$": {
		"name": "Adventures of Dr. Franken, The",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-D7-USA",
		"publisher": "Elite",
		"developer": "Motivetime",
		"region": "USA",
		"players": "1",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "3B0F4DB2",
				"sha1": "2185DC04B9967A14008BAEBEFA58F06BBCF844A3",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-15"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNEPROM",
						"pcb": "NES-UNEPROM-01",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "ADV OF FRANKEN NES RN0036",
								"size": "128k",
								"crc": "3B0F4DB2",
								"sha1": "2185DC04B9967A14008BAEBEFA58F06BBCF844A3"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
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
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
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
