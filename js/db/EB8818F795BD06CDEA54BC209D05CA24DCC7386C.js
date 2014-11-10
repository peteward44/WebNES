this.NesDb = this.NesDb || {};

NesDb[ 'EB8818F795BD06CDEA54BC209D05CA24DCC7386C' ] = {
	"$": {
		"name": "Flying Warriors",
		"class": "Licensed",
		"catalog": "NES-6F-USA",
		"publisher": "Culture Brain",
		"developer": "Culture Brain",
		"region": "USA",
		"players": "1",
		"date": "1991-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "92DD67EA",
				"sha1": "EB8818F795BD06CDEA54BC209D05CA24DCC7386C",
				"dump": "ok",
				"dumper": "Skrybe",
				"datedumped": "2012-04-16"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKEPROM",
						"pcb": "NES-SKEPROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PG",
								"size": "128k",
								"crc": "EEEE06F7",
								"sha1": "50D90325B50FACAF4FBA69BD0CA652A788334523"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CG",
								"size": "128k",
								"crc": "4035B7FC",
								"sha1": "A166864B4BDF0ECAD07FBDBAE956727773F07BC3"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1"
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
