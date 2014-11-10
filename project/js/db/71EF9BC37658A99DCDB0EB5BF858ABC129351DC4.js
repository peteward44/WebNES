this.NesDb = this.NesDb || {};

NesDb[ '71EF9BC37658A99DCDB0EB5BF858ABC129351DC4' ] = {
	"$": {
		"name": "Overlord",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NES-VL-USA",
		"publisher": "Virgin Games",
		"developer": "Probe",
		"region": "USA",
		"players": "1",
		"date": "1993-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2856111F",
				"sha1": "71EF9BC37658A99DCDB0EB5BF858ABC129351DC4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "VIRGIN-SNROM",
						"pcb": "SN1-ROM AW REV. A",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "OVLD",
								"size": "256k",
								"crc": "2856111F",
								"sha1": "71EF9BC37658A99DCDB0EB5BF858ABC129351DC4"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
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
								"type": "MMC1B2"
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
