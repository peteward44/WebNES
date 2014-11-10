this.NesDb = this.NesDb || {};

NesDb[ '8FC3A23A8E89B1E952AC137C1E3F7C7181CBE777' ] = {
	"$": {
		"name": "Mickey's Safari in Letterland",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NES-M8-USA",
		"publisher": "Hi Tech Expressions",
		"developer": "Beam Software",
		"region": "USA",
		"players": "1",
		"date": "1993-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "982DFB38",
				"sha1": "8FC3A23A8E89B1E952AC137C1E3F7C7181CBE777",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-01-14"
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
								"name": "NES-M8 PRG",
								"size": "128k",
								"crc": "91AA57F1",
								"sha1": "7D242AC60B8175C2D181AE173273203F305B5711"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-M8 CHR",
								"size": "128k",
								"crc": "FBD1BB6A",
								"sha1": "3EDF6780FC5EFEA866D5FAE6825DD4318EA81387"
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
