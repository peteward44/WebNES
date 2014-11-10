this.NesDb = this.NesDb || {};

NesDb[ '7C414EB708C8A8E184C9602B9EFFEC87D6E92EEF' ] = {
	"$": {
		"name": "Rampart",
		"class": "Licensed",
		"catalog": "NES-73-USA",
		"publisher": "Jaleco",
		"developer": "Tengen",
		"portdeveloper": "Bitmasters",
		"region": "USA",
		"players": "2",
		"date": "1992-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "26796758",
				"sha1": "7C414EB708C8A8E184C9602B9EFFEC87D6E92EEF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-14"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-73-0 PRG",
								"size": "128k",
								"crc": "26AD7CEF",
								"sha1": "EF271B074672900B5170A87F85BB3D8927C0960E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-73-0 CHR",
								"size": "128k",
								"crc": "94A07125",
								"sha1": "50403E0F89E14368F687F09995CD1E3EED08CC9C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
