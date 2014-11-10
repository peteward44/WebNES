this.NesDb = this.NesDb || {};

NesDb[ '6E14D69218F890D5B4806E19C599329F1B5079A1' ] = {
	"$": {
		"name": "Alien³",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NES-X3-USA",
		"publisher": "LJN",
		"developer": "Probe",
		"region": "USA",
		"players": "1",
		"date": "1993-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "C527C297",
				"sha1": "6E14D69218F890D5B4806E19C599329F1B5079A1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-27"
			},
			"board": [
				{
					"$": {
						"type": "ACCLAIM-MC-ACC",
						"pcb": "55741",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-X3 PRG",
								"size": "128k",
								"crc": "A67EA466",
								"sha1": "47AE9092CC14D41C0564D0F52251E960431404E6"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-X3 CHR",
								"size": "128k",
								"crc": "D87D47F4",
								"sha1": "31CC3707B8CBDC5EB1EE2DF0D6CC84E78AA05C78"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx08"
							}
						},
						{
							"$": {
								"type": "MC-ACC"
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
