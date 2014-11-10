this.NesDb = this.NesDb || {};

NesDb[ '8A20080A4F8EF1268C1555913510733055031C5E' ] = {
	"$": {
		"name": "George Foreman's KO Boxing",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NES-KB-USA",
		"publisher": "Acclaim",
		"developer": "Beam Software",
		"region": "USA",
		"players": "2",
		"date": "1992-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "AF05F37E",
				"sha1": "8A20080A4F8EF1268C1555913510733055031C5E",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-07-05"
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
								"name": "NES-KB PRG",
								"size": "128k",
								"crc": "A86AF976",
								"sha1": "F0F54BEEF7EA10C70B23C34D28E0EB638F9472DA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-KB CHR",
								"size": "256k",
								"crc": "897CFC76",
								"sha1": "ABC1187423E4B3823EC82F2C9CDCCF1FA2404643"
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
