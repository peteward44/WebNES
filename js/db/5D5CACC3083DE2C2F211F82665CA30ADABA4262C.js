this.NesDb = this.NesDb || {};

NesDb[ '5D5CACC3083DE2C2F211F82665CA30ADABA4262C' ] = {
	"$": {
		"name": "Karate Champ",
		"class": "Licensed",
		"catalog": "NES-KC-USA",
		"publisher": "Data East",
		"developer": "Sakata SAS",
		"region": "USA",
		"players": "2",
		"date": "1986-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "ACA145D8",
				"sha1": "5D5CACC3083DE2C2F211F82665CA30ADABA4262C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-03-01"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-01",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-KC-0 PRG",
								"size": "32k",
								"crc": "508EFA07",
								"sha1": "9D69FC90E7692E1F52F60CAB06FD4488E8CFEDB0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-KC-0 CHR",
								"size": "32k",
								"crc": "4B7318E6",
								"sha1": "29C34028761E7BC602FEB254C87A0B63C46589C6"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3193A"
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
