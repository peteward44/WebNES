this.NesDb = this.NesDb || {};

NesDb[ 'CE62E3FA66A70EB706E2D6E0417FF88722E5CF1D' ] = {
	"$": {
		"name": "U-Force Power Games",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-UX-USA",
		"publisher": "Brøderbund",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "1",
		"date": "0000"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "uforce",
						"name": "U-Force"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "B459EDC4",
				"sha1": "CE62E3FA66A70EB706E2D6E0417FF88722E5CF1D",
				"dump": "ok",
				"dumper": "Skrybe",
				"datedumped": "2012-04-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-GNROM",
						"pcb": "NES-GN-ROM-03",
						"mapper": "66"
					},
					"prg": [
						{
							"$": {
								"name": "6/3 P",
								"size": "32k",
								"crc": "7A039FEC",
								"sha1": "AC89473DC6C754E52174A46C6E818946B19F3DF8"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "6/3 C",
								"size": "32k",
								"crc": "2C8C5C5C",
								"sha1": "23FB45F79427E57D53EE75249020E59DF9B14471"
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
