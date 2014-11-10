this.NesDb = this.NesDb || {};

NesDb[ '7DCDF7DB93B040D484B190FDFD976BB67AB72DB0' ] = {
	"$": {
		"name": "Fisher-Price: Perfect Fit",
		"class": "Licensed",
		"catalog": "NES-F7-USA",
		"publisher": "GameTek",
		"developer": "Beam Software",
		"region": "USA",
		"players": "1",
		"date": "1990-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "B9762DA8",
				"sha1": "7DCDF7DB93B040D484B190FDFD976BB67AB72DB0",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-07",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-F7-0 PRG",
								"size": "32k",
								"crc": "198E279A",
								"sha1": "701AC4B648972A7DA863F96C6AAEA8F21E3702C5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-F7-0 CHR",
								"size": "32k",
								"crc": "E5E5C4AB",
								"sha1": "0D5B650A040DB131068D34B31D8494260C1A0A73"
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
